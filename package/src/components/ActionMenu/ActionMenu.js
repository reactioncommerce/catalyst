import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  Box,
  ClickAwayListener,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  makeStyles
} from "@material-ui/core";
import ChevronDownIcon from "mdi-material-ui/ChevronDown";
import Button from "../Button";

const useStyles = makeStyles((theme) => ({
  button: {
    paddingRight: theme.spacing(1.5)
  }
}));

/**
 * @name ActionMenu
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */
const ActionMenu = React.forwardRef(function ActionMenu(props, ref) {
  const {
    children,
    onSelect,
    options,
    ...otherProps
  } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = ref || React.useRef(null);

  /**
   * Handle menu item click
   * @param {SyntheticEvent} event Event object
   * @param {Number} index Menu item index
   * @returns {undefined}
   */
  function handleMenuItemClick(event, index) {
    const selectedOption = options[index];
    onSelect && onSelect(selectedOption, index);
    setOpen(false);
  }

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

  return (
    <Fragment>
      <Button
        className={classes.button}
        onClick={handleToggle}
        ref={anchorRef}
        {...otherProps}
      >
        {children}
        <Box display="flex" paddingLeft={1}>
          <ChevronDownIcon />
        </Box>
      </Button>
      <Menu open={open} anchorEl={anchorRef.current}>
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList disablePadding>
            <MenuItem key="default-label" disabled>
              <Box maxWidth={320} whiteSpace="normal">
                <ListItemText
                  primary={children}
                />
              </Box>
            </MenuItem>
            {options.map(({ label, details, isDisabled }, index) => (
              <MenuItem
                key={index}
                disabled={isDisabled}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                <Box maxWidth={320} whiteSpace="normal">
                  <ListItemText
                    primary={label}
                    secondary={details}
                  />
                </Box>
              </MenuItem>
            ))}
          </MenuList>
        </ClickAwayListener>
      </Menu>
    </Fragment>
  );
});

ActionMenu.defaultProps = {
  color: "primary",
  variant: "outlined"
};

ActionMenu.propTypes = {
  /**
   * The content of the Button
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * Options: `default` | `inherit` | `primary` | `secondary` | `error`
   */
  color: PropTypes.string,
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool, // eslint-disable-line
  /**
   * If `true`, the CircularProgress will be displayed and the button will be disabled.
   */
  isWaiting: PropTypes.bool,
  /**
   * onSelect callback when an option is selected from the menu
   */
  onSelect: PropTypes.func,
  /**
   * Menu options
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    details: PropTypes.string,
    isDisabled: PropTypes.bool,
    label: PropTypes.string.isRequired
  }))
};

export default ActionMenu;
