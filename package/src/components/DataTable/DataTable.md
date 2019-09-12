### Overview

The DataTable provides a robust solution for displaying tabular data. It is built using [react-table](https://github.com/tannerlinsley/react-table) with the Material-UI [Table](https://material-ui.com/components/tables/) components.

```jsx noeditor
import { useMemo } from "react"

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

  const data = useMemo(() => [
    {"id":1,"fullName":"Emmalyn Boldero","email":"eboldero0@freewebs.com","cardType":"jcb"},
    {"id":2,"fullName":"Fiona Acory","email":"facory1@bing.com","cardType":"china-unionpay"},
    {"id":3,"fullName":"Muffin Nuttall","email":"mnuttall2@ucoz.ru","cardType":"jcb"},
    {"id":4,"fullName":"Carlye Benford","email":"cbenford3@un.org","cardType":"jcb"},
    {"id":5,"fullName":"Rolland Eastope","email":"reastope4@hubpages.com","cardType":"americanexpress"},
    {"id":6,"fullName":"Vallie Fownes","email":"vfownes5@delicious.com","cardType":"jcb"},
    {"id":7,"fullName":"Nady Wolfit","email":"nwolfit6@nifty.com","cardType":"jcb"},
    {"id":8,"fullName":"Karel Keitch","email":"kkeitch7@samsung.com","cardType":"jcb"},
    {"id":9,"fullName":"Krystle Smallcombe","email":"ksmallcombe8@cbsnews.com","cardType":"bankcard"},
    {"id":10,"fullName":"Cordula Taill","email":"ctaill9@weebly.com","cardType":"visa-electron"}
  ], []);

  return <DataTable columns={columns} data={data} />;
}

TableExample()

```

### Usage

#### Types

##### Simple Table

```jsx
import { useMemo } from "react"

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

  const data = useMemo(() => [
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
  ], []);

  return <DataTable columns={columns} data={data} />;
}

TableExample()
```
