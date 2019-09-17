import React from "react";
import PropTypes from "prop-types";
import { useTable, usePagination } from "react-table";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TextField,
  TableRow,
  Toolbar,
  makeStyles,
  Typography
} from "@material-ui/core";
import ChevronLeftIcon from "mdi-material-ui/ChevronLeft";
import ChevronRightIcon from "mdi-material-ui/ChevronRight";
import Button from "../Button";
import Select from "../Select";

const useStyles = makeStyles((theme) => ({
  pagination: {
    borderBottom: "none",
    color: theme.palette.colors.coolGrey500,
    letterSpacing: 0.28,
    paddingTop: theme.spacing(2)
  },
  tableBody: {
    "& tr:nth-child(odd)": {
      backgroundColor: theme.palette.colors.black02
    }
  },
  tableHead: {
    borderBottom: "none",
    fontWeight: theme.typography.fontWeightSemiBold,
    letterSpacing: 0.5,
    padding: theme.spacing(0.5, 2),
    color: theme.palette.colors.coolGrey500
  },
  tableCell: {
    borderBottom: "none",
    letterSpacing: 0.28,
    color: theme.palette.colors.coolGrey500
  }
}));

/**
 * @name DataTable
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */
const DataTable = React.forwardRef(function DataTable(props, ref) {
  const { columns, data, pageSizes } = props;
  const classes = useStyles();

  const {
    getTableProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: [{ pageIndex, pageSize }]
  } = useTable(
    {
      columns,
      data
    },
    usePagination
  );

  return (
    <div>
      <Table ref={ref} {...getTableProps()}>
        <TableHead className={classes.tableHead}>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell
                  classes={{
                    root: classes.tableHead
                  }}
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody className={classes.tableBody}>
          {page.map((row) =>
            prepareRow(row) || (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <TableCell
                    classes={{
                      root: classes.tableCell
                    }}
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <Toolbar>
        <Box
          display="flex"
          alignItems="center"
          paddingRight={2}
        >
          {"Page"}
          <Box maxWidth={80} paddingLeft={1} paddingRight={1}>
            <TextField
              className={classes.pageInput}
              margin="dense"
              variant="outlined"
              disableUnderline
              type="number"
              size="small"
              min={1}
              max={pageOptions.length}
              defaultValue={pageIndex + 1}
              value={pageIndex + 1}
              onChange={(event) => {
                let pageNumber = Number(event.target.value);
                pageNumber = pageNumber > 0 ? pageNumber - 1 : 0;
                gotoPage(pageNumber);
              }}
            />
          </Box>
          <span>{"of "}{pageCount}</span>
        </Box>
        <Box flex={1} maxWidth={120}>
          <Select
            value={{ label: `${pageSize} rows`, value: pageSize }}
            onChange={(event) => {
              setPageSize(Number(event.target.value));
            }}
            options={pageSizes.map((value) => ({ label: value, value }))}
          />
        </Box>
        <Box flex={1} />
        <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
          <ChevronLeftIcon /> Previous
        </Button>
        <Typography component="span">{" | "}</Typography>
        <Button onClick={() => nextPage()} disabled={!canNextPage}>
          Next <ChevronRightIcon />
        </Button>
      </Toolbar>
    </div>
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
  data: PropTypes.arrayOf(PropTypes.object),
  /**
   * Row data as an array of objects
   */
  pageSizes: PropTypes.arrayOf(PropTypes.number)
};

DataTable.defaultProps = {
  pageSizes: [10, 20, 30, 40, 50]
};

export default DataTable;
