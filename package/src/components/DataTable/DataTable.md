### Overview

The DataTable provides a robust solution for displaying tabular data. It is built using [react-table](https://github.com/tannerlinsley/react-table) with the Material-UI [Table](https://material-ui.com/components/tables/) components.

### Usage

#### Types

##### Standard table

This example is of the DataTable with selectable rows, bulk actions, filtering and pagination controlled by data from an API. Data fetching is simulated with a 200ms delay.

This is the most common table setup used in Reaction.

```jsx
import { useMemo, useEffect, useCallback, forwardRef } from "react";
import { Box, Checkbox, Typography } from "@material-ui/core";
import { useDataTable } from "./";
import { getPaginatedData } from "./mocks/sampleData";
import Chip from "../Chip";
import DataTableFilter, { makeDataTableColumnFilter } from "../DataTableFilter";
import dateFormat from "dateformat";

function TableExample() {
  // Create and memoize the column data
  const columns = useMemo(() => [
    {
      Header: "Order ID",
      accessor: "referenceId",
      cellProps: {
        padding: "checkbox"
      },
      Cell: ({ row, cell }) => {
        const { status } = row.values;
        let color = "success";

        if (row.values.status === "canceled") {
          color = "danger";
        } else if (status === "processing") {
          color = "info"
        }

        return (
          <Box style={{ whiteSpace: "nowrap" }}>
            <Box
              component="span"
              paddingRight={2}
            >
              {cell.value}
            </Box>
            {status !== "completed" ?
              <Chip
                color={color}
                variant="default"
                label={row.values.status}
              />
              :
              <span>{row.values.status}</span>
            }
          </Box>
        );
      },
    },
    {
      Header: "Date",
      accessor: "createdAt",
      Cell: ({ row }) =>  (
        <span style={{ whiteSpace: "noWrap" }}>
          {dateFormat(row.values.createdAt, "mm-dd-yyyy h:MM TT")}
        </span>
      )
    },
    {
      Header: "Order Status",
      accessor: "status",
      Filter: makeDataTableColumnFilter({
        // `title` can be omitted if the Header is a string
        // title: "Order Status",
        options: [
          // { label: "All", value: "" },
          { label: "New", value: "new" },
          { label: "Processing", value: "processing" },
          { label: "Canceled", value: "canceled" }
        ]
      }),
      show: false
    },
    {
      Header: "Payment Status",
      accessor: "paymentStatus",
      Filter: makeDataTableColumnFilter({
        isMulti: true,
        options: [
          { label: "Authorized", value: "authorized" },
          { label: "Paid", value: "paid" },
          { label: "Partially Refunded", value: "partially_refunded" },
          { label: "Pending", value: "pending" },
          { label: "Refunded", value: "refunded" },
          { label: "Unpaid", value: "unpaid" }
        ]
      })
    },
    {
      Header: "Fulfillment Status",
      accessor: "fulfillmentStatus",
      Filter: makeDataTableColumnFilter({
        isMulti: true,
        options: [
          { label: "Unfulfilled", value: "unfulfilled" },
          { label: "Fulfilled", value: "fulfilled" },
          { label: "Partially Fulfilled", value: "partially_fulfilled" },
        ]
      })
    },
    {
      Header: "Customer",
      accessor: "customer"
    },
    // Custom cell and header renderer
    {
      Cell: ({ row }) => (
        <Box textAlign="right">
          {row.values.total}
        </Box>
      ),
      Header: ({ header }) => (
        <Box textAlign="right">
          Total
        </Box>
      ),
      accessor: "total"
    },
    {
      // Hide this column, it's only for filtering
      Header: "Order date",
      Filter: makeDataTableColumnFilter({
        options: [
          { label: "Today", value: "today" },
          { label: "Last 7 days", value: "last7" },
          { label: "Last 30", value: "last30" },
        ]
      }),
      accessor: "createdAt",
      show: false
    },
  ], []);

  // Fetch data callback whenever the table requires more data to properly display.
  // This is the case if theres an update with pagination, filtering or sorting.
  // This function is called on the initial load of the table to fet the first set of results.
  const onFetchData = useCallback(async ({ globalFilter, setData, pageIndex, pageSize, filters }) => {
    console.log("Fetch Data")
    console.log("-- Filters", filters)
    // Get data from an API.
    const { data } = await getPaginatedData({
      filters: {
        searchField: globalFilter,
        ...filters
      },
      offset: pageIndex * pageSize,
      limit: (pageIndex + 1) * pageSize,
      simulatedDelay: 200 // 300 ms delay
    });

    // Return the fetched data as an array of objects and the calculated page count
    return {
      data: data.nodes,
      pageCount: Math.ceil(data.totalCount / pageSize)
    }
  }, []);

  // Row click callback
  const onRowClick = useCallback(async ({ row }) => {
    console.log("Row clicked", row);
  }, []);

  const dataTableProps = useDataTable({
    columns,
    onFetchData,
    onRowClick,
    getRowID: (row, index) => row.id
  });

  // Table state is comes fom a `useState` hook, thus the state first element in
  // the array, and the second is the updater function
  // e.g. `const [state, updaterFunc] = dataTableProps.state;`
  const [{ selectedRows }] = dataTableProps.state;

  const labels = useMemo(() => ({
    "globalFilterPlaceholder": "Filter orders",
    "filterChipValue.partially_fulfilled": "Partially Fulfilled",
    "filterChipValue.fulfilled": "Fulfilled",
    "filterChipValue.Unfulfilled": "Unfulfilled",
    "filterChipValue.authorized": "Authorized",
    "filterChipValue.paid": "Paid",
    "filterChipValue.partially_refunded": "Partially Refunded",
    "filterChipValue.pending": "Pending",
    "filterChipValue.refunded": "Refunded",
    "filterChipValue.unpaid": "Unpaid",
    "filterChipValue.new": "New",
    "filterChipValue.processing": "Processing",
    "filterChipValue.canceled": "Canceled",
    "filterChipValue.today": "Today",
    "filterChipValue.last7": "Last 7 days",
    "filterChipValue.last30": "Last 30"
  }), []);

  return (
    <DataTable
      {...dataTableProps}
      labels={labels}
      isFilterable
    />
  );
}

TableExample()
```

##### Table with data fetching

A DataTable without filtering or selectable rows. Data fetching is simulated with a 200ms delay.

```jsx
import { useMemo, useEffect, useCallback } from "react";
import { Box } from "@material-ui/core";
import { useDataTable } from "./";
import { getPaginatedData, data } from "./mocks/sampleData";
import CreditCardIcon from "mdi-material-ui/CreditCard";
import dateFormat from "dateformat";

function TableExample() {
  const columns = useMemo(() => [
    {
      Header: "Order ID",
      accessor: "referenceId"
    },
    {
      Header: "Date",
      accessor: "createdAt",
      Cell: ({ row }) =>  (
        <span style={{ whiteSpace: "noWrap" }}>
          {dateFormat(row.values.createdAt, "mm-dd-yyyy h:MM TT")}
        </span>
      )
    },
    {
      Header: "Payment Status",
      accessor: "paymentStatus"
    },
    {
      Header: "Fulfillment Status",
      accessor: "fulfillmentStatus"
    },
    {
      Header: "Customer",
      accessor: "customer"
    },
    // Custom cell and header renderer
    {
      Cell: ({ row }) => (
        <Box textAlign="right">
          {row.values.total}
        </Box>
      ),
      Header: ({ header }) => (
        <Box textAlign="right">
          Total
        </Box>
      ),
      accessor: "total"
    },
  ], []);

  const onFetchData = useCallback(async ({ setData, pageIndex, pageSize }) => {
    const { data } = await getPaginatedData({
      offset: pageIndex * pageSize,
      limit: (pageIndex + 1) * pageSize,
      simulatedDelay: 200 // 300 ms delay
    });

    return {
      data: data.nodes,
      pageCount: data.totalCount / pageSize
    }
  }, []);

  const onSelectRows = useCallback(async ({ selectedRows }) => {
    console.log("Selected rows", selectedRows);
  }, []);

  const dataTableProps = useDataTable({
    columns,
    onFetchData
  });

  return <DataTable {...dataTableProps} />
}

TableExample()
```

##### Table with client-side data

```jsx
import { useMemo, useEffect, useCallback } from "react";
import { Box } from "@material-ui/core";
import { useDataTable } from "./";
import data from "./mocks/orders.json";
import dateFormat from "dateformat"

function TableExample() {
  // Create and memoize the column data
  const columns = useMemo(() => [
    {
      Header: "Order ID",
      accessor: "referenceId"
    },
    {
      Header: "Date",
      accessor: "createdAt",
      Cell: ({ row }) =>  (
        <span style={{ whiteSpace: "noWrap" }}>
          {dateFormat(row.values.createdAt, "mm-dd-yyyy h:MM TT")}
        </span>
      )
    },
    {
      Header: "Payment Status",
      accessor: "paymentStatus"
    },
    {
      Header: "Fulfillment Status",
      accessor: "fulfillmentStatus"
    },
    {
      Header: "Customer",
      accessor: "customer"
    },
    // Custom cell and header renderer
    {
      Cell: ({ row }) => (
        <Box textAlign="right">
          {row.values.total}
        </Box>
      ),
      Header: ({ header }) => (
        <Box textAlign="right">
          Total
        </Box>
      ),
      accessor: "total"
    },
  ], []);

  // Create and memoize the row data
  // This data should contain all the rows that the table could possibly display
  // as this table set up will not fetch additional data from the server.
  const memoizedData = useMemo(() => data, []);

  // Setup the data with the columns and data
  const dataTableProps = useDataTable({
    columns,
    data: memoizedData
  });

  // Render the DataTable component with all props provided from the useDataTable hook
  return <DataTable {...dataTableProps} />;
}

TableExample()
```

##### Custom columns

```jsx
import { useMemo, useEffect, useCallback } from "react";
import { Box, Checkbox, Link } from "@material-ui/core";
import Button from "../Button";
import Chip from "../Chip";
import { useDataTable } from "./";
import { getPaginatedData } from "./mocks/sampleData";

function TableExample() {
  // Create and memoize the column data
  const columns = useMemo(() => [
    // This is optional for selectable tables. If omitted, a default selectable column
    // will be automatically added to the table if the `onSelectRows` callback is provided
    // to the `useDataTable` hook.
    {
      id: "selection",
      headerProps: {},
      cellProps: {
        // Disables the cell click if the row is clickable
        // This is important if you have a callback for onRowClick, as the checkbox cell
        // will also trigger the row click.
        // Alternatively you can control the onClick with the following option
        // onClick: (event) => event.stopPropagation(),
        isClickDisabled: true,

        // All other props will be applied to the table cell.
        padding: "checkbox",
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
        <Checkbox
          {...row.getToggleRowSelectedProps()}
          title={`Toggle row selection for ${row.values.fullName}`}
        />
      )
    },
    {
      Header: "Order ID",
      accessor: "referenceId",
      cellProps: {
        padding: "checkbox"
      },
      Cell: ({ row, cell }) => {
        const { status } = row.values;
        let color = "success";

        if (row.values.status === "canceled") {
          color = "danger";
        } else if (status === "processing") {
          color = "info"
        }

        return (
          <Box style={{ whiteSpace: "nowrap" }}>
            <Box
              component="span"
              paddingRight={2}
            >
              {cell.value}
            </Box>
            {status !== "completed" ?
              <Chip
                color={color}
                variant="default"
                label={row.values.status}
              />
              :
              <span>{row.values.status}</span>
            }
          </Box>
        );
      },
    },
    {
      show: false,
      accessor: "status"
    },
    {
      Header: "Payment Status",
      accessor: "paymentStatus"
    },
    {
      Header: "Fulfillment Status",
      accessor: "fulfillmentStatus"
    },
    {
      Header: "Customer",
      accessor: "customer",
      cellProps: (cell) => {
        // Call props can also be a function, in case you want to
        // dynamically create props
        return {
          style: {
            cursor: "pointer"
          }
        }
      },
      Cell: ({ cell }) => (
        <Link href={`#/Components/Content/DataTable/${cell.value}`}>
          {cell.value}
        </Link>
      ),
    },
    // Custom cell and header renderer
    {
      Cell: ({ cell }) => (
        <Box textAlign="right">
          {cell.value}
        </Box>
      ),
      Header: ({ header }) => (
        <Box textAlign="right">
          Total
        </Box>
      ),
      accessor: "total"
    }
  ], []);

  // Fetch data callback whenever the table requires more data to properly display.
  // This is the case if theres an update with pagination, filtering or sorting.
  // This function is called on the initial load of the table to fet the first set of results.
  const onFetchData = useCallback(async ({ globalFilter, setData, pageIndex, pageSize }) => {
    // Get data from an API.
    const { data } = await getPaginatedData({
      filter: globalFilter,
      offset: pageIndex * pageSize,
      limit: (pageIndex + 1) * pageSize,
      simulatedDelay: 200 // 300 ms delay
    });

    // Return the fetched data as an array of objects and the calculated page count
    return {
      data: data.nodes,
      pageCount: Math.ceil(data.totalCount / pageSize)
    }
  }, []);

  // When rows are selected it will be reported here if additional actions need
  // to take place on selection.
  // Selected can also be accessed from the table state in the example below:
  // `const [{ selectedRows }] = dataTableProps.state;`
  const onSelectRows = useCallback(async ({ selectedRows }) => {
    console.log("Selected rows", selectedRows);
  }, []);

  // Row click callback
  const onRowClick = useCallback(async ({ row }) => {
    console.log("Row clicked", row);
  }, []);

  const dataTableProps = useDataTable({
    columns,
    onFetchData,
    onRowClick,
    onSelectRows,
    getRowID: (row, index) => row.id
  });

  // Table state is comes fom a `useState` hook, thus the state first element in
  // the array, and the second is the updater function
  // e.g. `const [state, updaterFunc] = dataTableProps.state;`
  const [{ selectedRows }] = dataTableProps.state;

  // Create options for the built-in ActionMenu in the DataTable
  const options = useMemo(() => [{
    label: "Filter by file",
    onClick: () => {
      console.log("Filter by file");
    }
  }, {
    label: "Publish",
    confirmTitle: `Publish ${selectedRows.length} products`,
    confirmMessage: `Are you sure you want to publish ${selectedRows.length} products to your storefront?`,
    isDisabled: selectedRows.length === 0,
    onClick: () => {
      console.log(`Published ${selectedRows.length} products`);
    }
  }, {
    label: "Make Visible",
    confirmTitle: `Make ${selectedRows.length} products visible`,
    confirmMessage: `Are you sure you want to make ${selectedRows.length} products visible to customers?`,
    isDisabled: selectedRows.length === 0,
    onClick: () => {
      console.log(`Made ${selectedRows.length} products visible`);
    }
  }, {
    label: "Make Hidden",
    confirmTitle: `Make ${selectedRows.length} products hidden`,
    confirmMessage: `Are you sure you want to make ${selectedRows.length} products hidden from customers?`,
    isDisabled: selectedRows.length === 0,
    onClick: () => {
      console.log(`Made ${selectedRows.length} products hidden`);
    }
  }, {
    label: "Duplicate",
    confirmTitle: `Duplicate ${selectedRows.length} products`,
    confirmMessage: `Are you sure you want to duplicate ${selectedRows.length} products?`,
    isDisabled: selectedRows.length === 0,
    onClick: () => {
      console.log(`Duplicated ${selectedRows.length} products`);
    }
  }, {
    label: "Archive",
    confirmTitle: `Archive ${selectedRows.length} products`,
    confirmMessage: `Are you sure you want to archive ${selectedRows.length} products? This will hide them from both admins and customers.`,
    isDisabled: selectedRows.length === 0,
    onClick: () => {
      console.log(`Archived ${selectedRows.length} products`);
    }
  }], [selectedRows]);

  return (
    <DataTable
      {...dataTableProps}
      actionMenuProps={{ options }}
      isFilterable
    />
  );
}

TableExample()
```