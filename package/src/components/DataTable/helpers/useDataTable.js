import React, { useCallback, useMemo, useEffect, useState } from "react";
import { Checkbox } from "@material-ui/core";
import {
  useTable,
  useFilters,
  useTableState,
  usePagination,
  useRowSelect
} from "react-table";
import useDataTableCellProps from "./useDataTableCellProps";

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
  onRowClick,
  onGlobalFilterChange,
  pageSize: defaultPageSize = 10,
  ...otherProps
}) {
  const [stateData, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [globalFilter, setGlobalFilter] = useState();
  const tableState = useTableState({ pageCount: 0, pageSize: defaultPageSize });
  const [{ sortBy, filters, pageIndex, pageSize, selectedRows }] = tableState;

  const isServerControlled = typeof onFetchData === "function";
  const isSelectable = typeof onSelectRows === "function";
  const isRowInteractive = typeof onRowClick === "function";
  let data = stateData;

  if (Array.isArray(simpleData)) {
    data = simpleData;
  }

  const columnsWithCheckboxes = useMemo(() => {
    if (isSelectable) {
      const hasCheckboxColumn = Boolean(columns.find(({ id }) => id === "selection"));

      if (!hasCheckboxColumn) {
        return [
          {
            id: "selection",
            cellProps: {
              // Disable cell click so that clicking the checkbox doesn't also trigger the row click
              isClickDisabled: true,
              padding: "checkbox"
            },
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
          globalFilter,
          data,
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
    globalFilter,
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
        data,
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

  const handleGlobalFilterChange = useCallback((event) => {
    setGlobalFilter(event.target.value);
  }, [onGlobalFilterChange]);

  const handleRowClick = useMemo(() => {
    if (isRowInteractive) {
      return (row) => () => {
        onRowClick({
          row,
          data,
          setData,
          setPageCount,
          sortBy,
          filters,
          pageIndex,
          pageSize,
          selectedRows
        });
      };
    }

    return null;
  }, [onRowClick]);

  const dataTableProps = useTable(
    {
      columns: columnsWithCheckboxes,
      data,
      getRowID: (row, index) => `${pageIndex}.${index}`,
      state: tableState,
      manualFilters: isServerControlled,
      manualSorting: isServerControlled,
      manualPagination: isServerControlled,
      pageCount,
      ...otherProps
    },
    useFilters,
    usePagination,
    useRowSelect,
    useDataTableCellProps
  );

  return {
    ...dataTableProps,
    isSelectable,
    onGlobalFilterChange: handleGlobalFilterChange,
    onRowClick: handleRowClick
  };
}
