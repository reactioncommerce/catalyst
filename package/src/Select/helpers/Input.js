import React from "react";
import PropTypes from "prop-types";

/**
 * @name Input
 * @param {Function } inputRef Input reference
 * @param {Object} props Component props
 * @returns {React.Component} A React Component
 */
export default function Input({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

Input.propTypes = {
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired
    })
  ])
};
