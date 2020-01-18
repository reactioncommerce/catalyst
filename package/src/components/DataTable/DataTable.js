import React, { useCallback, useMemo } from "react";
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
import { Skeleton } from "@material-ui/lab";
import ChevronLeftIcon from "mdi-material-ui/ChevronLeft";
import ChevronRightIcon from "mdi-material-ui/ChevronRight";
import CloseIcon from "mdi-material-ui/Close";
import Button from "../Button";
import Select from "../Select";
import ActionMenu from "../ActionMenu";
import DataTableFilterChipBar from "./helpers/DataTableFilterChipBar";

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

export const defaultLabels = {
  allFilters: "All filters",
  allFiltersDrawerTitle: "All filters",
  clearAllFilters: "Clear all",
  clearFilter: "Clear",
  globalFilterPlaceholder: "Filter",
  loading: "Loading...",
  next: "Next",
  page: "Page",
  pageOf: ({ count }) => `of ${count}`,
  pageSizeSelect: ({ count }) => `${count} rows`,
  previous: "Previous"
};

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
    FilterDrawerComponent,
    FilterDrawerButtonComponent,
    ToolbarComponent,
    PaginationComponent,
    labels: labelsProp,
    setShowAdditionalFilters,
    shouldShowAdditionalFilters,
    onRowClick,
    onRemoveFilter,
    isLoading,

    // Props from the useTable hook
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
    setGlobalFilter,
    setPageSize,
    state: { pageIndex, pageSize, filters }
  } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const shouldShowStandardToolbar = (actionMenuProps || isFilterable);
  const activeFilters = flatColumns.filter(({ canFilter }) => canFilter);
  const activeFilterCount = activeFilters.length;

  // Merge labels from props with the default labels
  const labels = useMemo(() => ({
    ...defaultLabels,
    ...labelsProp
  }), [labelsProp]);

  // Callback designed to stop event propagation on cells.
  // This is important for cells like the checkbox cell, as clicking the
  // checkbox would also trigger the row click.
  const handleCellClick = useCallback((isClickDisabled) => (event) => {
    if (isClickDisabled) {
      event.stopPropagation();
    }
  }, []);

  // Callback for closing the filter drawer
  const handleCloseDrawer = useCallback(() => setShowAdditionalFilters(false), []);

  // Determine how many filter buttons to show
  let maxFilterButtons = 3;
  let hasMoreFilters = false;

  if (isMobile) {
    maxFilterButtons = 0;
  } else if (isTablet) {
    maxFilterButtons = 1;
  }

  let filterDrawerComponents;

  if (activeFilterCount > maxFilterButtons) {
    // If we have more filters, then generate the components
    // for the filter drawer
    filterDrawerComponents = activeFilters.map((column, index) => (
      column.render("Filter", {
        container: "card",
        key: index,
        labels: {
          clear: labels.clearFilter,
          clearAll: labels.clearAllFilters
        }
      })
    ));

    // Display the "All filters" button
    hasMoreFilters = true;
  }

  // Render loading rows
  let loadingRows;
  if (isLoading) {
    loadingRows = [];

    /* eslint-disable no-loop-func */
    for (let index = 0; index < pageSize; index += 1) {
      loadingRows.push((
        <TableRow
          className={clsx({
            [classes.tableRowOdd]: ((index + 1) % 2 !== 0)
          })}
          key={`loading-${index}`}
        >
          {flatColumns.map((column, cellIndex) => {
            if (column.show === false) return null;

            return (
              <TableCell
                classes={{
                  root: classes.tableCell
                }}
                key={`cell-${cellIndex}`}
                padding={column.id === "selection" ? "checkbox" : undefined}
              >
                {column.id === "selection" ? (
                  <Box paddingLeft="12px" paddingTop="13px" paddingBottom="12px">
                    <Skeleton variant="rect" width={8 * 2 + 2} />
                  </Box>
                ) : (
                  <Skeleton variant="text" />
                )}
              </TableCell>
            );
          })}
        </TableRow>
      ));
      /* eslint-enable no-loop-func */
    }
  }

  const extraRows = [];

  if (page.length < pageSize && !isLoading) {
    /* eslint-disable no-loop-func */
    for (let index = page.length; index < pageSize; index += 1) {
      extraRows.push((
        <TableRow
          className={clsx({
            [classes.tableRowOdd]: ((index + 1) % 2 !== 0)
          })}
          key={`empty-${index}`}
        >
          {flatColumns.map((column, cellIndex) => {
            if (column.show === false) return null;

            return (
              <TableCell
                classes={{
                  root: classes.tableCell
                }}
                key={`cell-${cellIndex}`}
                padding={column.id === "selection" ? "checkbox" : undefined}
              >
                {"\u00A0"}
              </TableCell>
            );
          })}
        </TableRow>
      ));
      /* eslint-enable no-loop-func */
    }
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
            <>
              <TextField
                className={classes.textField}
                fullWidth
                margin="dense"
                placeholder={labels.globalFilterPlaceholder}
                onChange={(event) => setGlobalFilter(event.target.value)}
                variant="outlined"
              />
              <Box paddingLeft={2}>
                <ButtonGroup>
                  {activeFilters
                    .slice(0, maxFilterButtons)
                    .map((column, index) => (
                      column.render("Filter", {
                        key: index,
                        labels: {
                          clear: labels.clearFilter,
                          clearAll: labels.clearAllFilters
                        }
                      })
                    ))
                  }
                  {hasMoreFilters && (
                    FilterDrawerButtonComponent({
                      children: labels.allFilters
                    }) || (
                      <Button
                        color="primary"
                        onClick={() => setShowAdditionalFilters(!shouldShowAdditionalFilters)}
                      >
                        {labels.allFilters}
                      </Button>
                    )
                  )}}
                </ButtonGroup>
                {hasMoreFilters && (
                  FilterDrawerComponent({
                    title: labels.allFiltersDrawerTitle,
                    children: filterDrawerComponents
                  }) || (
                    <Drawer
                      anchor="right"
                      open={shouldShowAdditionalFilters}
                      onClose={handleCloseDrawer}
                    >
                      <AppBar position="sticky">
                        <Toolbar>
                          <Box flex={1} paddingLeft={2}>
                            <Typography variant="h3">{labels.allFiltersDrawerTitle}</Typography>
                          </Box>
                          <IconButton onClick={handleCloseDrawer}>
                            <CloseIcon />
                          </IconButton>
                        </Toolbar>
                      </AppBar>
                      <Box
                        paddingTop={1}
                        marginLeft="-1px"
                        marginRight="-1px"
                      >
                        {filterDrawerComponents}
                      </Box>
                    </Drawer>
                  )
                )}
              </Box>
            </>
          )}
        </Toolbar>
      ))}
      <DataTableFilterChipBar
        columns={flatColumns}
        filters={filters}
        labels={labels}
        onRemove={onRemoveFilter}
      />
      <div className={classes.tableWrapper}>
        <Table ref={ref} {...getTableProps()}>
          <TableHead className={classes.tableHead}>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  if (column.show === false) return null;

                  return (
                    <TableCell
                      padding={column.id === "selection" ? "checkbox" : "default"}
                      classes={{
                        root: classes.tableHead
                      }}
                      {...column.getHeaderProps()}
                    >
                      {column.render("Header")}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableHead>
          <TableBody className={classes.tableBody}>
            {loadingRows}
            {!isLoading && page.map((row, index) =>
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
                    if (cell.column.show === false) return null;

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
              ))
            }
            {extraRows}
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
            <Typography component="span" variant="body2">{labels.page}</Typography>
            <Box maxWidth={80} paddingLeft={1} paddingRight={1}>
              <TextField
                className={classes.textField}
                margin="dense"
                variant="outlined"
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
            <Typography component="span" variant="body2">{labels.pageOf({ count: pageCount })}</Typography>
          </Box>
          <Box flex={1} maxWidth={120}>
            <Select
              value={{ label: labels.pageSizeSelect({ count: pageSize }), value: pageSize }}
              onChange={({ value }) => {
                setPageSize(value);
              }}
              options={pageSizes.map((value) => ({ label: value, value }))}
            />
          </Box>
          <Box flex={1} />
          <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <ChevronLeftIcon /> {labels.previous}
          </Button>
          <Typography component="span">{" | "}</Typography>
          <Button onClick={() => nextPage()} disabled={!canNextPage}>
            {labels.next} <ChevronRightIcon />
          </Button>
        </Toolbar>
      )}
    </>
  );
});

DataTable.propTypes = {
  /**
   * Component to replace the standard button for opening the filter drawer
   */
  FilterDrawerButtonComponent: PropTypes.func,
  /**
   * Component to replace the standard filter drawer
   */
  FilterDrawerComponent: PropTypes.func,
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
   * Props applied to the built-in action menu. See ActionMenu component for available props.
   */
  actionMenuProps: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.shape({
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
    }))
  }),
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
   * Should show the table filters
   */
  isFilterable: PropTypes.bool,
  /**
   * Show loading indicator
   */
  isLoading: PropTypes.bool,
  /**
   * Is set to true if the table rows are selectable
   */
  isSelectable: PropTypes.bool,
  /**
   * Labels for various controls
   */
  labels: PropTypes.shape({
    /**
     * The "All filters" button in table toolbar
     */
    allFilters: PropTypes.string.isRequired,
    /**
     * Drawer title for all filters
     */
    allFiltersDrawerTitle: PropTypes.string.isRequired,
    /**
     * Label for clearing all filters
     */
    clearAllFilters: PropTypes.string.isRequired,
    /**
     * Label for clearing a single filter
     */
    clearFilter: PropTypes.string.isRequired,
    /**
     * Global filter text input label
     */
    globalFilterPlaceholder: PropTypes.string.isRequired,
    /**
     * Loading message
     */
    loading: PropTypes.string.isRequired,
    /**
     * Next button label
     */
    next: PropTypes.string.isRequired,
    /**
     * Function to generate the total number of pages ({ count }) => \`of ${count}\`,
     */
    pageOf: PropTypes.func.isRequired,
    /**
     * Function to generate the label in select dropdown ({ count }) => \`${count} rows`,
     */
    pageSizeSelect: PropTypes.func.isRequired,
    /**
     * Previous button label
     */
    previous: PropTypes.string.isRequired
  }),
  /**
   * Go to next page
   */
  nextPage: PropTypes.func,
  /**
   * Event triggered when global filter field has changed
   */
  onGlobalFilterChange: PropTypes.func,
  /**
   * Event triggered when a filter is removed with the `(key, multiSelectValueIfAvailable) => {}` signature.
   */
  onRemoveFilter: PropTypes.func,
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
   * Set the global text filter
   */
  setGlobalFilter: PropTypes.func,
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
   * Table state
   */
  state: PropTypes.object
};

DataTable.defaultProps = {
  FilterDrawerButtonComponent() { },
  FilterDrawerComponent() { },
  ToolbarComponent() { },
  PaginationComponent() { },
  isFilterable: true,
  labels: defaultLabels,
  pageSizes: [10, 20, 30, 40, 50]
};

export default DataTable;
