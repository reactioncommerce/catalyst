### Overview

The DataTable provides a robust solution for displaying tabular data. It is built using [react-table](https://github.com/tannerlinsley/react-table) with the Material-UI [Table](https://material-ui.com/components/tables/) components.

### Usage

#### Types

##### Orders table

This example showcases using the DataTable to display orders that come from an API. Data fetching is simulated with a 200ms delay.

This example uses many of the available features of the DataTable.

```jsx
import { useMemo, useEffect, useCallback, forwardRef, useState } from "react";
import { Box, Checkbox, Link, Typography } from "@material-ui/core";
import { useDataTable } from "./";
import { getPaginatedData } from "./mocks/sampleData";
// import data from "./mocks/orders.json";
import Chip from "../Chip";
import DataTableFilter, { makeDataTableColumnFilter } from "../DataTableFilter";
import dateFormat from "dateformat";

function TableExample() {
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState();
  const [selectedRows, setSelectedRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Create and memoize the column data
  const columns = useMemo(() => [
    {
      Header: "Order ID",
      accessor: "referenceId",
      headerProps: {}, // Optional. Header props may be a function, object
      cellProps: { // Optional. Cell Props props may be a function, object
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
          { label: "Completed", value: "completed" },
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
  const onFetchData = useCallback(async ({ globalFilter, pageIndex, pageSize, filters }) => {
    console.log("Fetch Data")
    console.log("-- Global Filter", globalFilter)
    console.log("-- Filters", filters)

    // Trigger loading animation
    setIsLoading(true);

    // Get data from an API.
    const { data: apiData } = await getPaginatedData({
      filters: {
        searchText: globalFilter,
        ...filters
      },
      offset: pageIndex * pageSize,
      limit: (pageIndex + 1) * pageSize,
      simulatedDelay: 200 // 300 ms delay
    });

    // Update the state with the fetched data as an array of objects and the calculated page count
    setData(apiData.nodes)
    setPageCount(Math.ceil(apiData.totalCount / pageSize))

    // Disable loading animation
    setIsLoading(false);
  }, [
    setData,
    setPageCount
  ]);

  // Row click callback
  const onRowClick = useCallback(async ({ row }) => {
    console.log("Row clicked", row);
  }, []);


  const onRowSelect = useCallback(async ({ selectedRows }) => {
    setSelectedRows(selectedRows || [])
    console.log("Selected rows", selectedRows);
  }, []);

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
    "filterChipValue.completed": "Completed",
    "filterChipValue.canceled": "Canceled",
    "filterChipValue.today": "Today",
    "filterChipValue.last7": "Last 7 days",
    "filterChipValue.last30": "Last 30"
  }), []);

  const dataTableProps = useDataTable({
    columns,
    data,
    labels,
    pageCount,
    onFetchData,
    onRowClick,
    onRowSelect,
    getRowID: (row, index) => row.id,
  })

  const { toggleAllRowsSelected } = dataTableProps;

      // Create options for the built-in ActionMenu in the DataTable
  const actionMenuOptions = useMemo(() => [{
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
      toggleAllRowsSelected(false);
      console.log(`Published ${selectedRows.length} products`);
    }
  }, {
    label: "Make Visible",
    confirmTitle: `Make ${selectedRows.length} products visible`,
    confirmMessage: `Are you sure you want to make ${selectedRows.length} products visible to customers?`,
    isDisabled: selectedRows.length === 0,
    onClick: () => {
      toggleAllRowsSelected(false);
      console.log(`Made ${selectedRows.length} products visible`);
    }
  }, {
    label: "Make Hidden",
    confirmTitle: `Make ${selectedRows.length} products hidden`,
    confirmMessage: `Are you sure you want to make ${selectedRows.length} products hidden from customers?`,
    isDisabled: selectedRows.length === 0,
    onClick: () => {
      toggleAllRowsSelected(false);
      console.log(`Made ${selectedRows.length} products hidden`);
    }
  }, {
    label: "Duplicate",
    confirmTitle: `Duplicate ${selectedRows.length} products`,
    confirmMessage: `Are you sure you want to duplicate ${selectedRows.length} products?`,
    isDisabled: selectedRows.length === 0,
    onClick: () => {
      toggleAllRowsSelected(false);
      console.log(`Duplicated ${selectedRows.length} products`);
    }
  }, {
    label: "Archive",
    confirmTitle: `Archive ${selectedRows.length} products`,
    confirmMessage: `Are you sure you want to archive ${selectedRows.length} products? This will hide them from both admins and customers.`,
    isDisabled: selectedRows.length === 0,
    onClick: () => {
      toggleAllRowsSelected(false);
      console.log(`Archived ${selectedRows.length} products`);
    }
  }], [selectedRows]);


  return (
    <DataTable
      {...dataTableProps}
      actionMenuProps={{ options: actionMenuOptions }}
      isLoading={isLoading}
    />
  );
}

TableExample()
```

##### Loading state

This example gives a closer look at the loading animation

```jsx
import { useMemo, useEffect, useCallback, forwardRef, useState } from "react";
import { Box, Checkbox, Link, Typography } from "@material-ui/core";
import { useDataTable } from "./";
import { getPaginatedData } from "./mocks/sampleData";
// import data from "./mocks/orders.json";
import Chip from "../Chip";
import DataTableFilter, { makeDataTableColumnFilter } from "../DataTableFilter";
import dateFormat from "dateformat";

function TableExample() {
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Create and memoize the column data
  const columns = useMemo(() => [
    {
      Header: "Order ID",
      accessor: "referenceId"
    },
    {
      Header: "Date",
      accessor: "createdAt"
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
    {
      Header: () => (<Box textAlign="right">Total</Box>),
      accessor: "total"
    }
  ], []);

  const dataTableProps = useDataTable({
    columns,
    data,
    pageCount,
    onRowSelect: () => {},
    getRowID: (row, index) => row.id,
  })

  return (
    <DataTable
      {...dataTableProps}
      isLoading={true}
    />
  );
}

TableExample()
```
