/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable require-jsdoc */
/* eslint-disable react/no-multi-comp */
import React, { useMemo, useCallback, useState } from "react";
import { fireEvent, render, waitForElement } from "../../tests/index.js";
import { getPaginatedData, data } from "./mocks/sampleData";
import DataTable, { useDataTable } from "./";

const columnData = [
  {
    Header: "Order ID",
    accessor: "referenceId"
  },
  {
    Header: "Customer",
    accessor: "customer",
    Cell: ({ cell }) => (
      <a href={`#${cell.value}`}>{cell.value}</a>
    )
  },
  {
    Header: "Total",
    accessor: "total"
  }
];

// Basic table
function TestTable() {
  const columns = useMemo(() => columnData, []);
  const memoizedData = useMemo(() => data, []);

  const dataTableProps = useDataTable({
    columns,
    data: memoizedData
  });

  return <DataTable {...dataTableProps} />;
}

// Basic table
function TestTableWithServerSidePagination() {
  const [tableData, setTableData] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const columns = useMemo(() => columnData, []);

  const onFetchData = useCallback(async ({ pageIndex, pageSize }) => {
    const { data: fetchedData } = await getPaginatedData({
      offset: pageIndex * pageSize,
      limit: (pageIndex + 1) * pageSize,
      simulatedDelay: 200, // 300ms delay
      sortBy: "referenceId",
      sortOrder: "asc"
    });

    setTableData(fetchedData.nodes);
    setPageCount(fetchedData.totalCount / pageSize);
  }, []);

  const dataTableProps = useDataTable({
    data: tableData,
    columns,
    onFetchData,
    pageCount
  });

  return <DataTable {...dataTableProps} />;
}

function TestTableWithClientSidePagination() {
  const columns = useMemo(() => columnData, []);
  const memoizedData = useMemo(() => data, []);

  const dataTableProps = useDataTable({
    columns,
    data: memoizedData
  });

  return <DataTable {...dataTableProps} />;
}


test("basic snapshot - only default props", () => {
  const { asFragment } = render(<TestTable />);
  expect(asFragment()).toMatchSnapshot();
});

test("server-side paginated snapshot - advances one page forward", async () => {
  const { asFragment, getByText } = render(<TestTableWithServerSidePagination />);
  await waitForElement(() => getByText("10000001"));
  fireEvent.click(getByText("Next"));
  await waitForElement(() => getByText("10000011"));
  expect(asFragment()).toMatchSnapshot();
});

test("server-side paginated snapshot - advances one page forward and back to first", async () => {
  const { asFragment, getByText } = render(<TestTableWithServerSidePagination />);
  await waitForElement(() => getByText("10000001"));
  fireEvent.click(getByText("Previous"));
  await waitForElement(() => getByText("10000001"));
  expect(asFragment()).toMatchSnapshot();
});

test("client-side paginated snapshot - advances one page forward", async () => {
  const { asFragment, getByText } = render(<TestTableWithClientSidePagination />);
  await waitForElement(() => getByText("10000001"));
  fireEvent.click(getByText("Next"));
  await waitForElement(() => getByText("10000011"));
  expect(asFragment()).toMatchSnapshot();
});

test("client-side paginated snapshot - advances one page forward and back to first", async () => {
  const { asFragment, getByText } = render(<TestTableWithClientSidePagination />);
  await waitForElement(() => getByText("10000001"));
  fireEvent.click(getByText("Previous"));
  await waitForElement(() => getByText("10000001"));
  expect(asFragment()).toMatchSnapshot();
});
