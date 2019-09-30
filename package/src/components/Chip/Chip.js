import React from "react";
import PropTypes from "prop-types";
import { Chip as MuiChip, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  new: {
    color: theme.palette.colors.coolGrey500,
    backgroundColor: theme.palette.colors.forestGreen100
  },
  processing: {
    color: theme.palette.colors.coolGrey500,
    backgroundColor: theme.palette.colors.darkBlue100
  },
  canceled: {
    color: theme.palette.colors.coolGrey500,
    backgroundColor: theme.palette.colors.red100
  },
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
  const { color, ...otherProps } = props;
  const classes = useStyles();

  const colorVariants = clsx({
    [classes.new]: color === "new",
    [classes.processing]: color === "processing",
    [classes.canceled]: color === "canceled"
  });

  let errorClasses = {};
  let errorColorProp = {};
  if (color === "error") {
    errorClasses = {
      containedPrimary: classes.containedPrimary,
      outlinedPrimary: classes.outlinedPrimary
    };
    errorColorProp = { color: "primary" };
  }

  let colorProp = {};
  // Only add props accepted by MUI Chip
  if (["default", "primary", "secondary"].includes(color)) {
    colorProp = { color };
  }

  return (
    <MuiChip
      {...colorProp}
      classes={{
        ...errorClasses,
        root: colorVariants
      }}
      {...errorColorProp}
      ref={ref}
      // eslint-disable-next-line react/jsx-indent-props
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
  color: PropTypes.oneOf(["default", "primary", "secondary", "new", "processing", "canceled", "error"]),
  /**
   * The variant to use
   */
  variant: PropTypes.oneOf(["default", "outlined"])
};

Chip.defaultProps = {
  color: "primary",
  variant: "default"
};

export default Chip;
