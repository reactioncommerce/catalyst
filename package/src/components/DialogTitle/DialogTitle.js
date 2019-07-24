import React from "react";
import PropTypes from "prop-types";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";

/**
 * @name DialogTitle
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */
const DialogTitle = React.forwardRef(function DialogTitle(props, ref) {
  const { children, ...other } = props;

  return (
    <MuiDialogTitle
      disableTypography
      ref={ref}
      {...other}
    >
      <Typography component="h2" variant="h4">{children}</Typography>
    </MuiDialogTitle>
  );
});


DialogTitle.propTypes = {
  /**
   * Children
   */
  children: PropTypes.node
};

export default DialogTitle;
