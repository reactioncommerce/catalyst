import React, { useCallback, useMemo, useEffect, useState } from "react";
import { Checkbox } from "@material-ui/core";
import debounce from "lodash.debounce";
import {
  useTable,
  useFilters,
  usePagination,
  useRowSelect,
  useGlobalFilter
} from "react-table";
import useDataTableCellProps from "./useDataTableCellProps";

/**
 * Convert an array of objects to an object by id
 * @param {Array<Object>} filters An array of objects `{id, value}`
 * @returns {Object} An object containing the filters by key
 */
function filtersArrayToObject(filters) {
  const filtersByKey = {};
  filters.forEach(({ id, value }) => {
    filtersByKey[id] = value;
  });

  return filtersByKey;
}

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
      Filter: DefaultColumnFilter || (() => null),
      disableFilters: true
    }),
    [DefaultColumnFilter]
  );

  const updatedColumns = columns.map((column) => {
    if (column.disableFilters !== true && (column.Filter || column.filter)) {
      column.disableFilters = false;
    }

    return column;
  });

  const dataTableProps = useTable(
    {
      columns: updatedColumns,
      data,
      defaultColumn,
      getRowId,
      initialState: { pageIndex: 0 },
      manualPagination: true,
      manualFilters: true,
      manualGlobalFilter: true,
      manualSortBy: true,
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
    setAllFilters,
    setFilter,
    setGlobalFilter,
    setPageSize,
    state: { pageIndex, pageSize, filters, globalFilter, selectedRowIds, sortBy }
  } = dataTableProps;

  useEffect(() => {
    if (onFetchData) {
      onFetchData({
        globalFilter,
        sortBy,
        filters,
        filtersByKey: filtersArrayToObject(filters),
        pageIndex,
        pageSize
      });
    }
  }, [
    globalFilter,
    filters,
    onFetchData,
    pageIndex,
    pageSize,
    sortBy
  ]);

  const debounceSetGlobalFilter = useCallback(debounce((value) => {
    setGlobalFilter(value);
  }, 1000), []);

  useEffect(() => {
    if (isSelectable) {
      onRowSelect({
        globalFilter,
        filters,
        pageIndex,
        pageSize,
        selectedRows: Object.keys(selectedRowIds)
      });
    }
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

  const onRemoveFilter = useCallback((id, value, multiSelectValue) => {
    if (Array.isArray(value)) {
      const newMultiFilters = value.filter((valueToKeep) => valueToKeep !== multiSelectValue);
      setFilter(id, newMultiFilters.length === 0 ? null : newMultiFilters);
    } else {
      setFilter(id, null);
    }
  }, [filters]);

  const refetch = useCallback(() => {
    if (onFetchData) {
      onFetchData({
        globalFilter,
        filters,
        filtersByKey: filtersArrayToObject(filters),
        pageIndex,
        pageSize,
        sortBy
      });
    }
  }, [
    globalFilter,
    filters,
    onFetchData,
    pageIndex,
    pageSize,
    sortBy
  ]);

  const fetchData = useCallback(({
    globalFilter: globalFilterLocal,
    filters: filtersLocal,
    pageSize: pageSizeLocal
  }) => {
    setGlobalFilter(globalFilterLocal || "");
    setAllFilters(filtersLocal || []);
    setPageSize(pageSizeLocal || pageSize);
  }, []);

  return {
    ...dataTableProps,
    debounceSetGlobalFilter,
    fetchData,
    isSelectable,
    onRowClick: onRowClickWrapper,
    onRemoveFilter,
    refetch,
    shouldShowAdditionalFilters,
    setShowAdditionalFilters
  };
}
