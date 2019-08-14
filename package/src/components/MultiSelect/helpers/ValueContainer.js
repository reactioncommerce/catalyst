import React from "react";
import PropTypes from "prop-types";

/**
 * @name ValueContainer
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */
export default function ValueContainer(props) {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  );
}

ValueContainer.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  selectProps: PropTypes.object.isRequired
};
