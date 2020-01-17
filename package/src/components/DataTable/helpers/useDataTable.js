import React, { useCallback, useMemo, useEffect, useState } from "react";
import { Checkbox } from "@material-ui/core";
import {
  useTable,
  useFilters,
  usePagination,
  useRowSelect,
  useGlobalFilter
} from "react-table";
import useDataTableCellProps from "./useDataTableCellProps";

/**
 * useDataTable
 * @param {Object} args Arguments for the useDataTable hook
 * @returns {Object} args
 */
export default function useDataTable({
  DefaultColumnFilter,
  columns,
  data,
  getRowId,
  pageCount: controlledPageCount,
  onFetchData,
  onRowClick,
  onRowSelect,
  disableRowClick = false,
  disableRowSelect = false,
  ...otherProps
}) {
  const [shouldShowAdditionalFilters, setShowAdditionalFilters] = useState(false);
  const isSelectable = typeof onRowSelect === "function" && disableRowSelect === false;
  const isRowInteractive = typeof onRowClick === "function" && disableRowClick === false;

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter || (() => null)
    }),
    [DefaultColumnFilter]
  );

  const dataTableProps = useTable(
    {
      columns,
      data,
      defaultColumn,
      getRowId,
      initialState: { pageIndex: 0 },
      manualPagination: true,
      manualFilters: true,
      manualGlobalFilter: true,
      pageCount: controlledPageCount,
      ...otherProps
    },
    useFilters,
    useGlobalFilter,
    usePagination,
    useDataTableCellProps,
    useRowSelect,
    (hooks) => {
      if (isSelectable) {
        const hasCheckboxColumn = Boolean(columns.find(({ id }) => id === "selection"));

        if (!hasCheckboxColumn) {
          hooks.flatColumns.push((prevColumns) => [
            {
              id: "selection",
              cellProps: {
                // Disable cell click so that clicking the checkbox doesn't also trigger the row click
                isClickDisabled: true,
                padding: "checkbox"
              },
              // This column is not filterable
              disableFilters: true,
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
            ...prevColumns
          ]);
        }
      }
    }
  );

  const {
    state: { pageIndex, pageSize, filters, globalFilter, selectedRowIds, sortBy }
  } = dataTableProps;

  useEffect(() => {
    onFetchData({
      globalFilter,
      sortBy,
      filters,
      pageIndex,
      pageSize
    });
  }, [
    globalFilter,
    filters,
    onFetchData,
    pageIndex,
    pageSize,
    sortBy
  ]);

  useEffect(() => {
    onRowSelect({
      globalFilter,
      filters,
      pageIndex,
      pageSize,
      selectedRows: Object.keys(selectedRowIds)
    });
  }, [
    globalFilter,
    filters,
    onFetchData,
    pageIndex,
    pageSize,
    selectedRowIds
  ]);

  const onRowClickWrapper = useMemo(() => {
    if (isRowInteractive) {
      return (row) => () => {
        onRowClick({
          row,
          data,
          filters,
          pageIndex,
          pageSize
        });
      };
    }

    return null;
  }, [onRowClick]);

  const onRemoveFilter = useCallback((key, multiSelectValue) => {
    const filterName = filters[key].id;
    const filterValue = filters[key].value;
    const { setFilter } = dataTableProps;

    if (Array.isArray(filterValue)) {
      const newMultiFilters = filterValue.filter((valueToKeep) => valueToKeep !== multiSelectValue);
      setFilter(filterName, newMultiFilters.length === 0 ? null : newMultiFilters);
    } else {
      setFilter(filterName, null);
    }
  }, [filters]);

  return {
    ...dataTableProps,
    isSelectable,
    onRowClick: onRowClickWrapper,
    onRemoveFilter,
    shouldShowAdditionalFilters,
    setShowAdditionalFilters
  };
}
