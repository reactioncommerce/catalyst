import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

/**
 * @name IndicatorSeparator
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */
export default function IndicatorSeparator(props) {
  const theme = useTheme();
  const indicatorSeparatorStyle = {
    alignSelf: "stretch",
    backgroundColor: theme.palette.colors.black20,
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
