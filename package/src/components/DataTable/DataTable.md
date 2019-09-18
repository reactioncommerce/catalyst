### Overview

The DataTable provides a robust solution for displaying tabular data. It is built using [react-table](https://github.com/tannerlinsley/react-table) with the Material-UI [Table](https://material-ui.com/components/tables/) components.

### Usage

#### Types

##### Standard selectable table data fetching and filtering

This example is of a standard table what has selectable rows, bulk actions, filtering and pagination controlled by data from an API. Data fetching is simulated with a 200ms delay.

This is the most common table type used in Reaction.

```jsx
import { useMemo, useEffect, useCallback } from "react";
import { useDataTable } from "./";
import { getPaginatedData, data } from "./mocks/sampleData";

function TableExample() {
  const columns = useMemo(() => [
    {
      Header: "Name",
      accessor: 'fullName',
    },
    {
      Header: "Email",
      accessor: 'email',
    },
    {
      Header: "Card Type",
      accessor: 'cardType',
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

  const {
    dataTableProps,
    selectedRows,
    tableState,
    setData,
    pageCount,
    pageSize,
    setPageCount
  } = useDataTable({
    columns,
    onFetchData,
    onSelectRows
  });

  return <DataTable {...dataTableProps} />
}

TableExample()
```

##### Simple table with data fetching

Simple table with no filtering or selectable rows. Data fetching is simulated with a 200ms delay.

```jsx
import { useMemo, useEffect, useCallback } from "react";
import { useDataTable } from "./";
import { getPaginatedData, data } from "./mocks/sampleData";

function TableExample() {
  const columns = useMemo(() => [
    {
      Header: "Name",
      accessor: 'fullName',
    },
    {
      Header: "Email",
      accessor: 'email',
    },
    {
      Header: "Card Type",
      accessor: 'cardType',
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

  const {
    dataTableProps,
    selectedRows,
    tableState,
    setData,
    pageCount,
    pageSize,
    setPageCount
  } = useDataTable({
    columns,
    onFetchData
  });

  return <DataTable {...dataTableProps} />
}

TableExample()
```

##### Simple table with client-side data

```jsx
import { useMemo, useEffect, useCallback } from "react";
import { useDataTable } from "./";
import { getPaginatedData, data } from "./mocks/sampleData";

function TableExample() {
  const columns = useMemo(() => [
    {
      Header: "Name",
      accessor: 'fullName',
    },
    {
      Header: "Email",
      accessor: 'email',
    },
    {
      Header: "Card Type",
      accessor: 'cardType',
    }
  ], []);

  const memoizedData = useMemo(() => data, []);

  const {
    dataTableProps,
    selectedRows,
    tableState,
    setData,
    pageCount,
    pageSize,
    setPageCount
  } = useDataTable({
    columns,
    data: memoizedData
  });

  return <DataTable {...dataTableProps} />;
}

TableExample()
```