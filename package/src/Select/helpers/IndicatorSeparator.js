import React from "react";
import { useTheme } from "@material-ui/core/styles";

/**
 * @name IndicatorSeparator
 * @returns {React.Component} A React component
 */
export default function IndicatorSeparator() {
  const theme = useTheme();
  const indicatorSeparatorStyle = {
    alignSelf: "stretch",
    backgroundColor: theme.palette.colors.black20,
    marginBottom: 8,
    marginTop: 8,
    width: 1
  };

  return (
    <span style={indicatorSeparatorStyle} />
  );
}
