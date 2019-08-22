import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  Box,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  Paper,
  ListItemText,
  MenuItem,
  MenuList,
  Popper
} from "@material-ui/core";
import MenuDownIcon from "mdi-material-ui/MenuDown";
import Button from "../Button";

/**
 * @name Button
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */
const SplitButton = React.forwardRef(function SplitButton(props, ref) {
  const {
    children,
    color: colorProp,
    initialSelectedOption,
    onClick,
    options,
    ...otherProps
  } = props;
  const [open, setOpen] = React.useState(false);
  const anchorRef = ref || React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(initialSelectedOption);
  const selectedOption = options[selectedIndex];
  const color = selectedOption.isDestructive ? "error" : colorProp;

  /**
   * Handle option click
   * @returns {undefined}
   */
  function handleClick() {
    onClick && onClick(selectedOption, selectedIndex);
  }

  /**
   * Handle menu item click
   * @param {SyntheticEvent} event Event object
   * @param {Number} index Menu item index
   * @returns {undefined}
   */
  function handleMenuItemClick(event, index) {
    setSelectedIndex(index);
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
      <ButtonGroup variant="contained" ref={anchorRef}>
        <Button
          color={color}
          data-testid="splitButton-action-button"
          onClick={handleClick}
          {...otherProps}
        >
          {selectedOption.label}
        </Button>
        <Button
          color={color}
          data-testid="splitButton-dropdown-button"
          variant="contained"
          size="small"
          aria-owns={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <MenuDownIcon />
        </Button>
      </ButtonGroup>
      <Popper open={open} anchorEl={anchorRef.current} transition>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === "bottom" ? "center top" : "center bottom"
            }}
          >
            <Paper elevation={2} id="menu-list-grow">
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  {options.map(({ label, details, isDisabled }, index) => (
                    <MenuItem
                      key={label}
                      disabled={isDisabled}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      <Box maxWidth={320} whiteSpace="normal">
                        <ListItemText
                          primary={label}
                          secondary={details}
                          primaryTypographyProps={{
                            variant: "body1"
                          }}
                        />
                      </Box>
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Fragment>
  );
});

SplitButton.defaultProps = {
  color: "primary",
  initialSelectedOption: 0
};

SplitButton.propTypes = {
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
   * Initial selected option index
   */
  initialSelectedOption: PropTypes.number,
  /**
   * If `true`, the CircularProgress will be displayed and the button will be disabled.
   */
  isWaiting: PropTypes.bool,
  /**
   * onClick callback
   */
  onClick: PropTypes.func,
  /**
   * Menu options
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    details: PropTypes.string,
    isDestructive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    label: PropTypes.string.isRequired
  }))
};

export default SplitButton;
