import React from "react";
import PropTypes from "prop-types";
import defaultTheme from "../../../theme/defaultTheme";

/**
 * @name IndicatorSeparator
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */
export default function IndicatorSeparator(props) {
  const indicatorSeparatorStyle = {
    alignSelf: "stretch",
    backgroundColor: defaultTheme.palette.colors.black20,
    marginBottom: 8,
    marginTop: 8,
    width: 1
  };

  return (
    <span style={indicatorSeparatorStyle} {...props} />
  );
}

IndicatorSeparator.propTypes = {
  props: PropTypes.object.isRequired
};
