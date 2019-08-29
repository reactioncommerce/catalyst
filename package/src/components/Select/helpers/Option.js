import React from "react";
import PropTypes from "prop-types";
import { MenuItem } from "@material-ui/core";

/**
 * @name Option
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */
export default function Option(props) {
  return (
    <MenuItem
      ref={props.innerRef}
      component="div"
      className={props.selectProps.classes.menuItem}
      selected={props.isFocused}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

Option.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  /**
   * CSS class passed down from parent
   */
  className: PropTypes.string,
  /**
   * props passed to the wrapping element for the group.
   */
  innerProps: PropTypes.shape({
    id: PropTypes.string.isRequired,
    key: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    onMouseMove: PropTypes.func.isRequired,
    onMouseOver: PropTypes.func.isRequired,
    tabIndex: PropTypes.number.isRequired
  }).isRequired,
  /**
   * Inner ref to DOM Node
   */
  innerRef: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired
    })
  ]),
  /**
   * Whether the option is focused.
   */
  isFocused: PropTypes.bool.isRequired,
  /**
   * Whether the option is selected.
   */
  isSelected: PropTypes.bool.isRequired,
  selectProps: PropTypes.object.isRequired
};
