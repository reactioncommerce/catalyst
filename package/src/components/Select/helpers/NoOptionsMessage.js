import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

/**
 * @name NoOptionsMessage
 * @param {Object} props Component props
 * @returns {React.Component} A React Component
 */
export default function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

NoOptionsMessage.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  /**
   * Props to be passed on to the wrapper.
   */
  innerProps: PropTypes.object,
  /**
   * Props passed to the select, which include classes for the no options message.
   */
  selectProps: PropTypes.object.isRequired
};
