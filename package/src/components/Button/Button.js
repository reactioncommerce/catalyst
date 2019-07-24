import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import MuiButton from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  buttonProgress: {
    marginLeft: theme.spacing.unit
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
 * @returns {React.Component} returns a React component
 */
function Button(props) {
  const {
    children,
    color,
    disabled,
    isWaiting,
    ...otherProps
  } = props;

  const classes = useStyles();

  if (color === "danger") {
    return (
      <MuiButton
        classes={{
          containedPrimary: classes.containedPrimary,
          outlinedPrimary: classes.outlinedPrimary
        }}
        color="primary"
        disabled={disabled || isWaiting}
        {...otherProps}
      >
        {children}
        {isWaiting && <CircularProgress size={16} className={classes.buttonProgress} />}
      </MuiButton>
    );
  }

  return (
    <MuiButton
      color={color}
      disabled={disabled || isWaiting}
      {...otherProps}
    >
      {children}
      {isWaiting && <CircularProgress size={16} className={classes.buttonProgress} />}
    </MuiButton>
  );
}

Button.propTypes = {
  /**
   * What goes here?
   */
  children: PropTypes.node,
  /**
   * CSS Classes
   */
  classes: PropTypes.object,
  /**
   * Options: `default` | `inherit` | `primary` | `secondary` | `danger`
   */
  color: PropTypes.enum,
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool, // eslint-disable-line
  /**
   * If `true`, the CircularProgress will be displayed.
   */
  isWaiting: PropTypes.bool,
  /**
   * onClick callback
   */
  onClick: PropTypes.func
};

export default Button;
