import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  AppBar,
  ButtonGroup,
  Box,
  Drawer,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TextField,
  TableRow,
  Toolbar,
  Typography,
  makeStyles,
  useMediaQuery,
  useTheme
} from "@material-ui/core";
import ChevronLeftIcon from "mdi-material-ui/ChevronLeft";
import ChevronRightIcon from "mdi-material-ui/ChevronRight";
import CloseIcon from "mdi-material-ui/Close";
import Button from "../Button";
import Select from "../Select";
import ActionMenu from "../ActionMenu";

const useStyles = makeStyles((theme) => ({
  pagination: {
    paddingTop: theme.spacing(2)
  },
  tableBody: {

  },
  tableRowOdd: {
    backgroundColor: theme.palette.colors.black02
  },
  tableHead: {
    ...theme.typography.h5,
    fontWeight: theme.typography.fontWeightSemiBold,
    padding: theme.spacing(0.5, 2)
  },
  tableCell: {
    ...theme.typography.body2
  },
  textField: {
    marginTop: 0,
    marginBottom: 0
  },
  tableRowClickable: {
    cursor: "pointer"
  },
  tableRowHover: {
    "&:hover": {
      backgroundColor: theme.palette.colors.black05
    }
  },
  tableRowSelected: {
    "backgroundColor": theme.palette.colors.coolGrey100,
    "&:hover": {
      backgroundColor: theme.palette.colors.coolGreyHoverSelected
    }
  },
  tableWrapper: {
    overflowX: "auto"
  }
}));

/**
 * @name DataTable
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */
const DataTable = React.forwardRef(function DataTable(props, ref) {
  const {
    // DataTable specific props
    pageSizes,
    isFilterable,
    actionMenuProps,
    ToolbarComponent,
    PaginationComponent,
    setShowAdditionalFilters,
    shouldShowAdditionalFilters,
    onRowClick,

    // Props unique from the useDataTable hook
    isSelectable,
    onGlobalFilterChange,

    // useTable Props
    getTableProps,
    flatColumns,
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
  } = props;

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const shouldShowStandardToolbar = (actionMenuProps || isFilterable);
  const hasMoreFilters = flatColumns.filter(({ canFilter }) => canFilter).length > 3;

  const handleCellClick = React.useCallback((isClickDisabled) => (event) => {
    if (isClickDisabled) {
      event.stopPropagation();
    }
  }, []);

  let maxFilterButtons = 3;

  if (isMobile) {
    maxFilterButtons = 0;
  } else if (isTablet) {
    maxFilterButtons = 1;
  }

  return (
    <>
      {ToolbarComponent(props) || (shouldShowStandardToolbar && (
        <Toolbar>
          {actionMenuProps && (
            <Box paddingRight={2}>
              <ActionMenu children="Actions" {...actionMenuProps} />
            </Box>
          )}
          {isFilterable && (
            <TextField
              className={classes.textField}
              fullWidth
              margin="dense"
              placeholder="Filter"
              onChange={onGlobalFilterChange}
              variant="outlined"
            />
          )}
          <Box paddingLeft={2}>
            <ButtonGroup>
              {flatColumns
                .filter(({ canFilter }) => canFilter)
                .slice(0, maxFilterButtons)
                .map((column) => (
                  column.render("Filter")
                ))
              }
              {hasMoreFilters &&
                <Button
                  color="primary"
                  onClick={() => setShowAdditionalFilters(!shouldShowAdditionalFilters)}
                >
                  More Filters
                </Button>
              }
            </ButtonGroup>
            <Drawer
              anchor="right"
              open={shouldShowAdditionalFilters}
              onClose={() => setShowAdditionalFilters(false)}
            >
              <AppBar position="sticky">
                <Toolbar>
                  <Box flex={1} paddingLeft={2}>
                    <Typography variant="h3">More Filters</Typography>
                  </Box>
                  <IconButton>
                    <CloseIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
              {flatColumns
                .filter(({ canFilter }) => canFilter)
                .map((column) => (
                  React.cloneElement(column.render("Filter"), {
                    container: "card"
                  })
                ))
              }
            </Drawer>
          </Box>
        </Toolbar>
      ))}
      <div className={classes.tableWrapper}>
        <Table ref={ref} {...getTableProps()}>
          <TableHead className={classes.tableHead}>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell
                    padding={isSelectable ? "checkbox" : "default"}
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
            {page.map((row, index) =>
              prepareRow(row) || (
                <TableRow
                  onClick={onRowClick && onRowClick(row)}
                  {...row.getRowProps()}
                  className={clsx({
                    [classes.tableRowHover]: true,
                    [classes.tableRowSelected]: row.isSelected,
                    [classes.tableRowOdd]: !row.isSelected && ((index + 1) % 2 !== 0),
                    [classes.tableRowClickable]: onRowClick
                  })}
                >
                  {row.cells.map((cell) => {
                    const { isClickDisabled, ...cellProps } = cell.getCellProps();

                    return (
                      <TableCell
                        onClick={handleCellClick(isClickDisabled)}
                        classes={{
                          root: classes.tableCell
                        }}
                        {...cellProps}
                      >
                        {cell.render("Cell")}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      {PaginationComponent(props) || (
        <Toolbar>
          <Box
            display="flex"
            alignItems="center"
            paddingRight={2}
          >
            <Typography component="span" variant="body2">{"Page"}</Typography>
            <Box maxWidth={80} paddingLeft={1} paddingRight={1}>
              <TextField
                className={classes.textField}
                margin="dense"
                variant="outlined"
                disableUnderline
                type="number"
                size="small"
                min={1}
                max={pageOptions.length}
                value={pageIndex + 1}
                onChange={(event) => {
                  let pageNumber = Number(event.target.value);
                  pageNumber = pageNumber > 0 ? pageNumber - 1 : 0;
                  gotoPage(pageNumber);
                }}
              />
            </Box>
            <Typography component="span" variant="body2">{"of "}{pageCount}</Typography>
          </Box>
          <Box flex={1} maxWidth={120}>
            <Select
              value={{ label: `${pageSize} rows`, value: pageSize }}
              onChange={({ value }) => {
                setPageSize(value);
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
      )}
    </>
  );
});

DataTable.propTypes = {
  /**
   * Replace the built-in pagination component with a custom component
   */
  PaginationComponent: PropTypes.elementType,
  /**
   * Replace the built-in toolbar component that contains the action menu and global filter controls
   * with a custom component.
   */
  ToolbarComponent: PropTypes.elementType,
  /**
   * Props applied to the built-in action menu
   */
  actionMenuProps: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Change the cancel button label in the confirm dialog
     */
    cancelActionText: PropTypes.string,
    /**
     * Change the label of the confirmation button in the confirm dialog
     */
    confirmActionText: PropTypes.string,
    /**
     * If supplied, the option will show a confirm dialog this message when selected.
     */
    confirmMessage: PropTypes.string,
    /**
     * If supplied, the option will show a confirm dialog this title when selected
     */
    confirmTitle: PropTypes.string,
    /**
     * Secondary option label
     */
    details: PropTypes.string,
    /**
     * Disable the option
     */
    isDisabled: PropTypes.bool,
    /**
     * Option label
     */
    label: PropTypes.string.isRequired,
    /**
     * If supplied, this function will be called in addition to onSelect
     */
    onClick: PropTypes.func
  })),
  /**
   * Can go to next page
  */
  canNextPage: PropTypes.bool,
  /**
   * Can go to previous page
  */
  canPreviousPage: PropTypes.bool,
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
   * Flattened array of the original column data
   */
  flatColumns: PropTypes.arrayOf(PropTypes.object),
  /**
   * Get props for table
   */
  getTableProps: PropTypes.func,
  /**
   * Jump to a page
   */
  gotoPage: PropTypes.func,
  /**
   * Table headers
   */
  headerGroups: PropTypes.array,
  /**
   * Should the table show filters
   */
  isFilterable: PropTypes.bool,
  /**
   * Is set to true if the table rows are selectable
   */
  isSelectable: PropTypes.bool,
  /**
   * Go to next page
   */
  nextPage: PropTypes.func,
  /**
   * Event triggered when global filter field has changed
   */
  onGlobalFilterChange: PropTypes.func,
  /**
   * Event triggered when a row is clicked
   */
  onRowClick: PropTypes.func,
  /**
   * Pages
   */
  page: PropTypes.array,
  /**
   * pageCount
   */
  pageCount: PropTypes.number,
  /**
   * Page options
   */
  pageOptions: PropTypes.array,
  /**
   * Row data as an array of objects
   */
  pageSizes: PropTypes.arrayOf(PropTypes.number),
  /**
   * Custom row renderer
   */
  prepareRow: PropTypes.func,
  /**
   * Go to previous page
   */
  previousPage: PropTypes.func,
  /**
   * Set the size of the pages
   */
  setPageSize: PropTypes.func,
  /**
   * Callback for setting the state shouldShowAdditionalFilters
   */
  setShowAdditionalFilters: PropTypes.func,
  /**
   * Show or hide the additional filters drawer
   */
  shouldShowAdditionalFilters: PropTypes.bool,
  /**
   * Table state [state, updater]
   */
  state: PropTypes.array
};

DataTable.defaultProps = {
  ToolbarComponent() { },
  PaginationComponent() { },
  pageSizes: [10, 20, 30, 40, 50]
};

export default DataTable;
