import React from "react";
import PropTypes from "prop-types";
import {
  TextField as MuiTextField,
  makeStyles
} from "@material-ui/core";
import { refType } from "@material-ui/utils";

// Styles for the base input component
const useInputStyles = makeStyles((theme) => ({
  root: {
    "position": "relative",
    "borderRadius": theme.shape.borderRadius,
    "&:hover $notchedOutline": {
      borderColor: theme.palette.colors.black40
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      "&:hover $notchedOutline": {
        borderColor: theme.palette.colors.black20
      }
    },
    "&$focused $notchedOutline": {
      borderColor: theme.palette.colors.reactionBlue400,
      borderWidth: 2
    },
    "&$error $notchedOutline": {
      borderColor: theme.palette.error.main
    },
    "&$disabled $notchedOutline": {
      borderColor: theme.palette.action.disabled
    },
    "&$disabled $input": {
      backgroundColor: theme.palette.colors.black10
    }
  },
  /* Styles applied to the root element if the component is focused. */
  focused: {},
  /* Styles applied to the root element if `error={true}`. */
  error: {},
  /* Styles applied to the root element if `disabled={true}`. */
  disabled: {},
  /* Styles applied to the `input` element if `margin="dense"`. */
  marginDense: {},
  /* Styles applied to the root element if `startAdornment` is provided. */
  multiline: {
    "padding": 0,
    "backgroundColor": theme.palette.colors.black02,
    "&$marginDense": {
      padding: 0
    }
  },
  /* Styles applied to the `NotchedOutline` element. */
  notchedOutline: {
    borderColor: theme.palette.colors.black20,
    padding: "0"

  },
  input: {
    backgroundColor: theme.palette.colors.black02,
    padding: "11.5px 6px",
    ...theme.typography.body2
  }
}));

// Styles for the label above the field
const useInputLabelStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
    ...theme.typography.h5
  },
  formControl: {
    position: "static",
    left: 0,
    top: 0,
    transform: "none"
  },
  shrink: {
    transform: "none",
    transformOrigin: "top left"
  },
  outlined: {
    "transform": "none",
    "&$shrink": {
      transform: "none"
    }
  }
}));

// Styles for the helper text below the field
const useFormHelperTextStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.body2,
    color: theme.palette.colors.black55
  },
  contained: {
    marginLeft: 0,
    marginRight: 0
  }
}));

/**
 * @name TextField
 * @param {Object} props Component props
 * @returns {React.Component} returns a React component
 */
const TextField = React.forwardRef(function TextField(props, ref) {
  const inputClasses = useInputStyles();
  const inputLabelClasses = useInputLabelStyles();
  const formHelperTextClasses = useFormHelperTextStyles();

  return (
    <MuiTextField
      FormHelperTextProps={{
        classes: formHelperTextClasses
      }}
      InputProps={{
        classes: inputClasses,
        disableUnderline: true,
        notched: false,
        dense: true
      }}
      InputLabelProps={{
        shrink: true,
        classes: inputLabelClasses
      }}
      fullWidth
      variant="outlined"
      {...props}
      ref={ref}
    />
  );
});

/* eslint-disable react/boolean-prop-naming */
/**
 *
 * The following prop-type definitions are copied from the Material UI TextField component to aide in documentation generation.
 * Source: [@material-ui/core/TextField](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/TextField/TextField.js)
 */
TextField.propTypes = {
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  FormHelperTextProps: PropTypes.object,
  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  InputLabelProps: PropTypes.object,
  /**
   * @ignore
   */
  InputProps: PropTypes.object,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  SelectProps: PropTypes.object,
  /**
   * @ignore
   */
  autoComplete: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  autoFocus: PropTypes.bool,
  /**
   * The default value of the `input` element.
   */
  children: PropTypes.node,
  /**
   * If `true`, the `input` element will be disabled.
   */
  className: PropTypes.string,
  /**
   * If `true`, the label will be displayed in an error state.
   */
  classes: PropTypes.object,
  /**
   * Props applied to the [`FormHelperText`](/api/form-helper-text/) element.
   */
  color: PropTypes.oneOf(["primary", "secondary"]),
  /**
   * If `true`, the input will take up the full width of its container.
   */
  defaultValue: PropTypes.any,
  /**
   * The helper text content.
   */
  disabled: PropTypes.bool,
  /**
   * @ignore
   */
  error: PropTypes.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  fullWidth: PropTypes.bool,
  /**
   * Props applied to the [`InputLabel`](/api/input-label/) element.
   */
  helperText: PropTypes.node,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/api/filled-input/),
   * [`OutlinedInput`](/api/outlined-input/) or [`Input`](/api/input/)
   * component depending on the `variant` prop value.
   */
  hiddenLabel: PropTypes.bool,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  id: PropTypes.string,
  /**
   * Pass a ref to the `input` element.
   */
  inputProps: PropTypes.object,
  /**
   * The label content.
   */
  inputRef: refType,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  label: PropTypes.node,
  /**
   * If `true`, a textarea element will be rendered instead of an input.
   */
  margin: PropTypes.oneOf(["none", "dense", "normal"]),
  /**
   * Name attribute of the `input` element.
   */
  multiline: PropTypes.bool,
  /**
   * @ignore
   */
  name: PropTypes.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onBlur: PropTypes.func,
  /**
   * @ignore
   */
  onChange: PropTypes.func,
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  onFocus: PropTypes.func,
  /**
   * If `true`, the label is displayed as required and the `input` element` will be required.
   */
  placeholder: PropTypes.string,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  required: PropTypes.bool,
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Render a [`Select`](/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   */
  rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Props applied to the [`Select`](/api/select/) element.
   */
  select: PropTypes.bool,
  /**
   * The size of the text field.
   */
  size: PropTypes.oneOf(["small", "medium"]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: PropTypes.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: PropTypes.any,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(["standard", "outlined", "filled"])
};
/* eslint-enable react/boolean-prop-naming */

export default TextField;
