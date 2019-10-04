import React from "react";
import PropTypes from "prop-types";
import { Chip as MuiChip, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  success: {
    color: theme.palette.colors.coolGrey500,
    backgroundColor: theme.palette.colors.forestGreen100
  },
  info: {
    color: theme.palette.colors.coolGrey500,
    backgroundColor: theme.palette.colors.darkBlue100
  },
  danger: {
    color: theme.palette.colors.coolGrey500,
    backgroundColor: theme.palette.colors.red100
  },
  colorPrimaryError: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.colors.red
  },
  outlinedPrimaryError: {
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
  const { color, variant, ...otherProps } = props;
  const classes = useStyles();

  const colorVariants = clsx({
    [classes.success]: color === "success",
    [classes.info]: color === "info",
    [classes.danger]: color === "danger"
  });

  let errorClasses = {};
  let errorColorProp = {};
  if (color === "error") {
    errorClasses = {
      colorPrimary: clsx({ [classes.colorPrimaryError]: variant === "default" }),
      outlinedPrimary: clsx({ [classes.outlinedPrimaryError]: variant === "outlined" })
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
      variant={variant}
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
  color: PropTypes.oneOf(["default", "primary", "secondary", "success", "info", "danger", "error"]),
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
