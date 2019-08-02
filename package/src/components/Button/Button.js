import React from "react";
import PropTypes from "prop-types";
import { CircularProgress, Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  normalPadding: {
    "padding": "10px 20px"
  },
  shortPadding: {
    "padding": "5px 20px"
  },
  buttonProgress: {
    marginLeft: theme.spacing()
  },
  containedPrimary: {
    "color": theme.palette.primary.contrastText,
    "backgroundColor": theme.palette.colors.red,
    "&:hover": {
      "backgroundColor": theme.palette.colors.redHover,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.palette.colors.redHover
      }
    }
  },
  outlinedPrimary: {
    "color": theme.palette.colors.red,
    "border": `1px solid ${theme.palette.colors.red}`,
    "&:hover": {
      "border": `1px solid ${theme.palette.colors.redBorder}`,
      "backgroundColor": theme.palette.colors.redBackground,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }
  }
}));

/**
 * @name Button
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */
const Button = React.forwardRef(function Button(props, ref) {
  const { children, color, disabled, isWaiting, isShortHeight, ...otherProps } = props;
  const classes = useStyles();

  let componentClasses = {};
  if (isShortHeight) {
    componentClasses.root = classes.shortPadding;
  } else {
    componentClasses.root = classes.normalPadding;
  }

  if (color === "error") {
    componentClasses.containedPrimary = classes.containedPrimary;
    componentClasses.outlinedPrimary = classes.outlinedPrimary;

    return (
      <MuiButton
        classes={componentClasses}
        color="primary"
        disabled={disabled || isWaiting}
        ref={ref}
        {...otherProps}
      >
        {children}
        {isWaiting && <CircularProgress size={16} className={classes.buttonProgress} />}
      </MuiButton>
    );
  }

  return (
    <MuiButton
      classes={componentClasses}
      color={color}
      disabled={disabled || isWaiting}
      ref={ref}
      {...otherProps}
    >
      {children}
      {isWaiting && <CircularProgress size={16} className={classes.buttonProgress} />}
    </MuiButton>
  );
});

Button.propTypes = {
  /**
   * The content of the Button
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * Options: `default` | `inherit` | `primary` | `secondary` | `error`
   */
  color: PropTypes.string,
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool, // eslint-disable-line
  /**
   * If `true`, the CircularProgress will be displayed and the button will be disabled.
   */
  isWaiting: PropTypes.bool,
  /**
   * onClick callback
   */
  onClick: PropTypes.func,
  /**
   * Use short vertical padding? (5px instead of 10px)
   */
  isShortHeight: PropTypes.bool
};

export default Button;
