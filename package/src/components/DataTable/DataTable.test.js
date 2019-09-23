/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable require-jsdoc */
/* eslint-disable react/no-multi-comp */
import React, { useMemo, useCallback } from "react";
import CreditCardIcon from "mdi-material-ui/CreditCard";
import { fireEvent, render, waitForElement } from "../../tests/index.js";
import { getPaginatedData, data } from "./mocks/sampleData";
import DataTable, { useDataTable } from "./";

const columnData = [
  {
    Header: "Name",
    accessor: "fullName"
  },
  {
    Header: "Email",
    accessor: "email"
  },
  {
    Header: "Card Type",
    accessor: "cardType"
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
  const columns = useMemo(() => [
    {
      Header: "Name",
      accessor: "fullName"
    },
    {
      Header: "Email",
      accessor: "email"
    },
    {
      Header: "Card Type",
      accessor: "cardType",
      Cell: ({ row }) => (
        <span><CreditCardIcon /> {row.values.cardType}</span>
      )
    }
  ], []);

  const onFetchData = useCallback(async ({ pageIndex, pageSize }) => {
    const { data: fetchedData } = await getPaginatedData({
      offset: pageIndex * pageSize,
      limit: (pageIndex + 1) * pageSize,
      simulatedDelay: 200 // 300ms delay
    });

    return {
      data: fetchedData.nodes,
      pageCount: fetchedData.totalCount / pageSize
    };
  }, []);

  const dataTableProps = useDataTable({
    columns,
    onFetchData
  });

  return <DataTable {...dataTableProps} />;
}

function TestTableWithClientSidePagination() {
  const columns = useMemo(() => [
    {
      Header: "Name",
      accessor: "fullName"
    },
    {
      Header: "Email",
      accessor: "email"
    },
    {
      Header: "Card Type",
      accessor: "cardType",
      Cell: ({ row }) => (
        <span><CreditCardIcon /> {row.values.cardType}</span>
      )
    }
  ], []);

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
  await waitForElement(() => getByText("Claudia Whitmarsh"));
  fireEvent.click(getByText("Next"));
  await waitForElement(() => getByText("Kennett Fenlon"));
  expect(asFragment()).toMatchSnapshot();
});

test("server-side paginated snapshot - advances one page forward and back to first", async () => {
  const { asFragment, getByText } = render(<TestTableWithServerSidePagination />);
  await waitForElement(() => getByText("Claudia Whitmarsh"));
  fireEvent.click(getByText("Previous"));
  await waitForElement(() => getByText("Claudia Whitmarsh"));
  expect(asFragment()).toMatchSnapshot();
});

test("client-side paginated snapshot - advances one page forward", async () => {
  const { asFragment, getByText } = render(<TestTableWithClientSidePagination />);
  await waitForElement(() => getByText("Claudia Whitmarsh"));
  fireEvent.click(getByText("Next"));
  await waitForElement(() => getByText("Kennett Fenlon"));
  expect(asFragment()).toMatchSnapshot();
});

test("client-side paginated snapshot - advances one page forward and back to first", async () => {
  const { asFragment, getByText } = render(<TestTableWithClientSidePagination />);
  await waitForElement(() => getByText("Claudia Whitmarsh"));
  fireEvent.click(getByText("Previous"));
  await waitForElement(() => getByText("Claudia Whitmarsh"));
  expect(asFragment()).toMatchSnapshot();
});
