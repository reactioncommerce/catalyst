import React from "react";
import PropTypes from "prop-types";
import { Chip as MuiChip, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  colorPrimary: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.colors.red
  },
  outlinedPrimary: {
    color: theme.palette.colors.red,
    border: `1px solid ${theme.palette.colors.red}`
  }
}));

/**
 * @name Chip
 * @param {Object} props Component props
 * @returns {React.Component} returns a React component
 */
const Chip = React.forwardRef(function Chip(props, ref) {
  const {
    color,
    ...otherProps
  } = props;

  const classes = useStyles();

  if (color === "error") {
    return (
      <MuiChip
        classes={{
          containedPrimary: classes.containedPrimary,
          outlinedPrimary: classes.outlinedPrimary,
          root: classes.root,
          sizeSmall: classes.sizeSmall
        }}
        color="primary"
        ref={ref}
        {...otherProps}
      />
    );
  }

  return (
    <MuiChip
      classes={{
        root: classes.root,
        sizeSmall: classes.sizeSmall
      }}
      color={color}
      ref={ref}
      {...otherProps}
    />
  );
});

Chip.propTypes = {
  /**
   * CSS Classes
   */
  classes: PropTypes.object,
  /**
   * The color of the component
   */
  color: PropTypes.oneOf(["default", "primary", "secondary", "error"]),
  /**
   * The variant to use
   */
  variant: PropTypes.oneOf(["default", "outlined"])
};

Chip.defaultProps = {
  color: "primary",
  variant: "outlined"
};

export default Chip;
