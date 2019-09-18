import React, { useMemo, useEffect, useState } from "react";
import { Checkbox } from "@material-ui/core";
import {
  useTable,
  useFilters,
  useTableState,
  usePagination,
  useRowSelect
} from "react-table";

/**
 * useDataTable
 * @param {Object} args Arguments for the useDataTable hook
 * @returns {Object} args
 */
export default function useDataTable({
  data: simpleData,
  columns,
  onFetchData,
  onSelectRows,
  pageSize: defaultPageSize = 10
}) {
  const [stateData, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const tableState = useTableState({ pageCount: 0, pageSize: defaultPageSize });
  const [{ sortBy, filters, pageIndex, pageSize, selectedRows }] = tableState;

  const isServerControlled = typeof onFetchData === "function";
  const isSelectable = typeof onSelectRows === "function";
  let data = stateData;

  if (Array.isArray(simpleData)) {
    data = simpleData;
  }

  const columnsWithCheckboxes = useMemo(() => {
    if (isSelectable) {
      return [
        {
          id: "selection",
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          // eslint-disable-next-line react/no-multi-comp,react/display-name,react/prop-types
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          // eslint-disable-next-line react/no-multi-comp,react/display-name,react/prop-types
          Cell: ({ row }) => (
            <Checkbox {...row.getToggleRowSelectedProps()} />
          )
        },
        ...columns
      ];
    }

    return columns;
  }, [
    onSelectRows
  ]);

  // Handle requests for more data
  useEffect(() => {
    if (isServerControlled) {
      const fetch = async () => {
        const { data: fetchedData, pageCount: newPageCount } = await onFetchData({
          setData,
          setPageCount,
          sortBy,
          filters,
          pageIndex,
          pageSize,
          selectedRows
        });

        setData(fetchedData);
        setPageCount(newPageCount);
      };

      fetch();
    }
  }, [
    onFetchData,
    setData,
    pageCount,
    setPageCount,
    tableState
  ]);

  // Handle selection of rows
  useEffect(() => {
    if (isSelectable) {
      onSelectRows({
        setData,
        setPageCount,
        sortBy,
        filters,
        pageIndex,
        pageSize,
        selectedRows
      });
    }
  }, [
    tableState,
    setData,
    selectedRows,
    onSelectRows
  ]);

  const dataTableProps = useTable(
    {
      columns: columnsWithCheckboxes,
      data,
      state: tableState,
      manualFilters: isServerControlled,
      manualSorting: isServerControlled,
      manualPagination: isServerControlled,
      pageCount
    },
    useFilters,
    usePagination,
    useRowSelect
  );

  return {
    dataTableProps,
    sortBy,
    filters,
    pageIndex,
    pageSize,
    setData,
    isSelectable,
    pageCount,
    setPageCount,
    tableState
  };
}
