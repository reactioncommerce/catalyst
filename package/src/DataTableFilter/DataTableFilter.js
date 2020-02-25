import React, { Fragment, useCallback } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Checkbox,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Box,
  Menu,
  MenuItem,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  makeStyles
} from "@material-ui/core";
import ChevronDownIcon from "mdi-material-ui/ChevronDown";
import Button from "../Button";

const useStyles = makeStyles((theme) => ({
  button: {
    whiteSpace: "nowrap",
    paddingRight: theme.spacing(1.5)
  },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0
  },
  expansionPanel: {},
  expansionPanelDetails: {
    paddingLeft: theme.spacing(1.5)
  }
}));

const defaultLabels = {
  clear: "Clear",
  clearAll: "Clear all"
};

/**
 * @name DataTableFilter
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */
const DataTableFilter = React.forwardRef(function DataTableFilter(props, ref) {
  const {
    children,
    isMulti,
    onSelect,
    options,
    container,
    labels: labelsProp,
    title,
    value,
    className: classNameProp,
    ...otherProps
  } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = ref || React.useRef(null);

  const labels = {
    ...defaultLabels,
    ...labelsProp
  };

  /**
   * Toggle menu open
   * @returns {undefined}
   */
  function handleToggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  /**
   * Handle menu close
   * @param {SyntheticEvent} event Event object
   * @returns {undefined}
   */
  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }

  const handleCheckboxChange = useCallback((event) => {
    const values = Array.isArray(value) ? value : [];
    const controlValue = event.target.value;
    let selectedValues;

    if (event.target.checked === false) {
      const newValues = values.filter((item) => item !== controlValue);
      selectedValues = newValues.length > 0 ? newValues : null;
    } else {
      selectedValues = [...new Set([
        event.target.value,
        ...values
      ])];
    }

    onSelect(selectedValues);
  }, [onSelect]);

  let menuItems;

  if (isMulti) {
    menuItems = options.map((option, index) => {
      const {
        label,
        value: optionValue,
        isDisabled
      } = option;

      return (
        <ListItem className={classes.listItem} key={index}>
          <FormControlLabel
            onChange={handleCheckboxChange}
            value={optionValue}
            control={<Checkbox />}
            label={label}
            disabled={isDisabled}
            checked={Array.isArray(value) && value.includes(optionValue)}
          />
        </ListItem>
      );
    });
  } else {
    menuItems = (
      <RadioGroup
        onChange={(event) => onSelect(event.target.value)}
        value={value || ""}
        aria-label={title}
      >
        <FormControlLabel
          style={{ display: "none" }}
          key="noneSelected"
          control={<Radio />}
          value=""
        />
        {options.map((option, index) => {
          const {
            label,
            value: optionValue,
            isDisabled
          } = option;

          return (
            <ListItem className={classes.listItem} key={index}>
              <FormControlLabel
                value={optionValue}
                control={<Radio />}
                label={label}
                disabled={isDisabled}
              />
            </ListItem>
          );
        })}
      </RadioGroup>
    );
  }

  if (container === "card") {
    return (
      <ExpansionPanel className={clsx(classes.expansionPanel, classNameProp)}>
        <ExpansionPanelSummary
          expandIcon={<ChevronDownIcon />}
        >
          <Typography>{title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionPanelDetails}>
          <Box>
            <List>
              {menuItems}
              <ListItem key="clear-button">
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => onSelect(null)}
                >
                  {isMulti ? labels.clearAll : labels.clear}
                </Link>
              </ListItem>
            </List>
          </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }

  return (
    <Fragment>
      <Button
        aria-controls="filter-menu"
        aria-haspopup="true"
        className={clsx(classes.button, classNameProp)}
        onClick={handleToggle}
        ref={anchorRef}
        variant="outlined"
        {...otherProps}
      >
        {title}
        <Box display="flex" paddingLeft={1}>
          <ChevronDownIcon />
        </Box>
      </Button>
      <Menu
        MenuListProps={{ disablePadding: true }}
        anchorEl={anchorRef.current}
        id="action-menu"
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <MenuItem className={classes.listItem} key="default-label" disabled>
          <Box whiteSpace="normal">
            <ListItemText primary={title} />
          </Box>
        </MenuItem>
        {menuItems}
        <ListItem key="clear-button">
          <Link
            component="button"
            variant="body2"
            onClick={() => onSelect(null)}
          >
            {labels.clear}
          </Link>
        </ListItem>
      </Menu>
    </Fragment>
  );
});

DataTableFilter.defaultProps = {
  color: "primary",
  isMulti: false,
  labels: defaultLabels,
  onSelect: () => { },
  variant: "outlined"
};

DataTableFilter.propTypes = {
  /**
   * The content of the Button
   */
  children: PropTypes.node,
  /**
   * Class name to be applied to the root element
  */
  className: PropTypes.string,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * Options: `default` | `inherit` | `primary` | `secondary` | `error`
   */
  color: PropTypes.string,
  /**
   * Container type to display as
   */
  container: PropTypes.oneOf(["default", "card"]),
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool, // eslint-disable-line
  /**
   * If `true, the filter options can be multi-selected
   */
  isMulti: PropTypes.bool,
  /**
   * If `true`, the CircularProgress will be displayed and the button will be disabled.
   */
  isWaiting: PropTypes.bool,
  /**
   * Labels for various components
   */
  labels: PropTypes.shape({
    /**
     * Clear all for multi-select filters
     */
    clearAll: PropTypes.string,
    /**
     * Clear label for single select filters
     */
    clear: PropTypes.string
  }),
  /**
   * Called when an option is selected. Can be use simultaneously with option onClick callbacks.
   */
  onSelect: PropTypes.func,
  /**
   * Menu options
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Disable the option
     */
    isDisabled: PropTypes.bool,
    /**
     * Option label
     */
    label: PropTypes.string.isRequired,
    /**
     * Value for the item
     */
    value: PropTypes.any.isRequired
  })),
  /**
   * Title used for dropdown, card and aria labels for form controls
   */
  title: PropTypes.string,
  /**
   * Value to match with selected item(s)
   */
  value: PropTypes.any
};

export default DataTableFilter;
