import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Chip from "../../Chip";

/**
 * @name MultiValue
 * @param {Object} props Component props
 * @returns {React.Component} A React Component
 */
export default function MultiValue(props) {
  return (
    <Chip
      size="small"
      label={props.children}
      className={clsx(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused
      })}
      onDelete={props.removeProps.onClick}
    />
  );
}

MultiValue.propTypes = {
  children: PropTypes.node,
  isFocused: PropTypes.bool.isRequired,
  removeProps: PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    onMouseDown: PropTypes.func.isRequired,
    onTouchEnd: PropTypes.func.isRequired
  }).isRequired,
  selectProps: PropTypes.object.isRequired
};
