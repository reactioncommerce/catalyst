import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  makeStyles
} from "@material-ui/core";

import { useTable } from "react-table";

const useStyles = makeStyles((theme) => ({
  tableBody: {
    "& tr:nth-child(odd)": {
      backgroundColor: theme.palette.colors.black02
    }
  },
  tableHead: {
    "& tr th": {
      borderBottom: "none",
      fontWeight: theme.typography.fontWeightSemiBold,
      letterSpacing: 0.5,
      padding: 0,
      color: theme.palette.colors.coolGrey500
    },
    "& tr th:first-child": {
      padding: "7px 0 1px 4px"
    }
  },
  pagination: {
    borderBottom: "none",
    color: theme.palette.colors.coolGrey500,
    letterSpacing: 0.28,
    paddingTop: theme.spacing(2)
  }
}));

/**
 * @name DataTable
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */
const DataTable = React.forwardRef(function DataTable(props, ref) {
  const { columns, data } = props;
  const classes = useStyles();

  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  return (
    <Table ref={ref} {...getTableProps()}>
      <TableHead className={classes.tableHead}>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableCell {...column.getHeaderProps()}>{column.render("Header")}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody className={classes.tableBody}>
        {rows.map((row) =>
          prepareRow(row) || (
            <TableRow {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <TableCell {...cell.getCellProps()}>{cell.render("Cell")}</TableCell>
              ))}
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
});

DataTable.propTypes = {
  /**
   * The content of the Button
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * Column header data
   */
  columns: PropTypes.arrayOf(PropTypes.object),
  /**
   * Row data as an array of objects
   */
  data: PropTypes.arrayOf(PropTypes.object)
};

export default DataTable;
