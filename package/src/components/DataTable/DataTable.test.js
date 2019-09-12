import React, { useMemo } from "react";
import { render } from "../../tests/index.js";
import DataTable from "./DataTable";

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

const rowData = [
  { id: 1, fullName: "Emmalyn Boldero", email: "eboldero0@freewebs.com", cardType: "jcb" },
  { id: 2, fullName: "Fiona Acory", email: "facory1@bing.com", cardType: "china-unionpay" },
  { id: 3, fullName: "Muffin Nuttall", email: "mnuttall2@ucoz.ru", cardType: "jcb" },
  { id: 4, fullName: "Carlye Benford", email: "cbenford3@un.org", cardType: "jcb" },
  { id: 5, fullName: "Rolland Eastope", email: "reastope4@hubpages.com", cardType: "americanexpress" },
  { id: 6, fullName: "Vallie Fownes", email: "vfownes5@delicious.com", cardType: "jcb" },
  { id: 7, fullName: "Nady Wolfit", email: "nwolfit6@nifty.com", cardType: "jcb" },
  { id: 8, fullName: "Karel Keitch", email: "kkeitch7@samsung.com", cardType: "jcb" },
  { id: 9, fullName: "Krystle Smallcombe", email: "ksmallcombe8@cbsnews.com", cardType: "bankcard" },
  { id: 10, fullName: "Cordula Taill", email: "ctaill9@weebly.com", cardType: "visa-electron" }
];

test("basic snapshot - only default props", () => {
  // eslint-disable-next-line require-jsdoc
  function TestTable() {
    const columns = useMemo(() => columnData, []);
    const data = useMemo(() => rowData, []);

    return <DataTable columns={columns} data={data} />;
  }

  const { asFragment } = render(TestTable);
  expect(asFragment()).toMatchSnapshot();
});
