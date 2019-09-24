### Overview

The DataTable provides a robust solution for displaying tabular data. It is built using [react-table](https://github.com/tannerlinsley/react-table) with the Material-UI [Table](https://material-ui.com/components/tables/) components.

### Usage

#### Types

##### Standard table

This example is of the DataTable with selectable rows, bulk actions, filtering and pagination controlled by data from an API. Data fetching is simulated with a 200ms delay.

This is the most common table setup used in Reaction.

```jsx
import { useMemo, useEffect, useCallback } from "react";
import { Box } from "@material-ui/core";
import { useDataTable } from "./";
import { getPaginatedData } from "./mocks/sampleData";

function TableExample() {
  // Create and memoize the column data
  const columns = useMemo(() => [
    {
      Header: "Name",
      accessor: "fullName",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Card Type",
      accessor: "cardType",
    },
    // Custom cell and header renderer
    {
      Cell: ({ row }) => (
        <Box textAlign="right">
          {row.values.amount}
        </Box>
      ),
      Header: ({ header }) => (
        <Box textAlign="right">
          Amount
        </Box>
      ),
      accessor: "amount"
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

  const dataTableProps = useDataTable({
    columns,
    onFetchData,
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

##### Table with data fetching

A DataTable without filtering or selectable rows. Data fetching is simulated with a 200ms delay.

```jsx
import { useMemo, useEffect, useCallback } from "react";
import { Box } from "@material-ui/core";
import { useDataTable } from "./";
import { getPaginatedData, data } from "./mocks/sampleData";
import CreditCardIcon from "mdi-material-ui/CreditCard";

function TableExample() {
  const columns = useMemo(() => [
    {
      Header: "Name",
      accessor: "fullName"
    },
    {
      Header: "Email",
      accessor: "email"
    },
    // Custom cell with an icon
    {
      Cell: ({ row }) => (
        <Box display="flex" alignItems="center">
          <Box component="span" paddingRight={1}>
            <CreditCardIcon />
          </Box>
          {row.values.cardType}
        </Box>
      ),
      Header: "Card Type",
      accessor: "cardType"
    },
    // Custom cell and header renderer
    {
      Cell: ({ row }) => (
        <Box textAlign="right">
          {row.values.amount}
        </Box>
      ),
      Header: ({ header }) => (
        <Box textAlign="right">
          Amount
        </Box>
      ),
      accessor: "amount"
    }
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
import { getPaginatedData, data } from "./mocks/sampleData";

function TableExample() {
  // Create and memoize the column data
  const columns = useMemo(() => [
    {
      Header: "Name",
      accessor: "fullName",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Card Type",
      accessor: "cardType",
    },
    // Custom cell and header renderer
    {
      Cell: ({ row }) => (
        <Box textAlign="right">
          {row.values.amount}
        </Box>
      ),
      Header: ({ header }) => (
        <Box textAlign="right">
          Amount
        </Box>
      ),
      accessor: "amount"
    }
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