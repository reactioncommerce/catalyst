import React, { Fragment } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Box,
  Menu,
  List,
  ListItem,
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
  expansionPanel: {}
}));

/**
 * @name DataTableFilter
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */
const DataTableFilter = React.forwardRef(function DataTableFilter(props, ref) {
  const {
    children,
    onSelect,
    options,
    container,
    title,
    value,
    className: classNameProp,
    ...otherProps
  } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = ref || React.useRef(null);

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

  const menuItems = options.map((option, index) => {
    const {
      label,
      value: optionValue,
      isDisabled
    } = option;

    return (
      <ListItem key={index}>
        <FormControlLabel
          value={optionValue}
          control={<Radio />}
          label={label}
          disabled={isDisabled}
        />
      </ListItem>
    );
  });

  if (container === "card") {
    return (
      <ExpansionPanel className={clsx(classes.expansionPanel, classNameProp)}>
        <ExpansionPanelSummary
          expandIcon={<ChevronDownIcon />}
        >
          <Typography>{title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <RadioGroup
            onChange={(event) => onSelect(event.target.value)}
            defaultValue={value}
            aria-label={title}
          >
            <List>
              {menuItems}
            </List>
          </RadioGroup>
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
        <RadioGroup
          onChange={(event) => onSelect(event.target.value)}
          defaultValue={value}
          aria-label={title}
        >
          {menuItems}
        </RadioGroup>
      </Menu>
    </Fragment>
  );
});

DataTableFilter.defaultProps = {
  color: "primary",
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
   * If `true`, the CircularProgress will be displayed and the button will be disabled.
   */
  isWaiting: PropTypes.bool,
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
