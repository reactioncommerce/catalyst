import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactSelect from "react-select";
import AsyncSelect from "react-select/async";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  ValueContainer
} from "./helpers";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 290
  },
  input: {
    display: "flex",
    padding: theme.spacing(0.25),
    height: "auto",
    cursor: "pointer",
    fontSize: theme.typography.fontSize,
    background: theme.palette.colors.black02,
    border: `1px solid ${theme.palette.colors.black20}`,
    borderRadius: theme.shape.borderRadius
  },
  valueContainer: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    flex: 1,
    overflow: "hidden",
    paddingLeft: theme.spacing(0.5)
  },
  chip: {
    margin: theme.spacing(0.5, 0.25)
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2),
    color: theme.palette.colors.black20
  },
  placeholder: {
    position: "absolute",
    left: theme.spacing(1),
    fontSize: theme.typography.fontSize,
    color: theme.palette.colors.black20
  },
  paper: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0
  },
  divider: {
    height: theme.spacing(2)
  }
}));

// Custom components for various aspects of the select
const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  ValueContainer
};

/**
 * @name Select
 * @summary A Select component that supports selecting single or multiple option(s), and
 * loading options synchronously or asynchronously.
 * @param {Object} props - component props
 * @returns {React.Component} A React component
 */
const Select = React.forwardRef(function Select(props, ref) {
  const defaultClasses = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(null);
  const { classes, isAsync, onSelection, ...otherProps } = props;
  const SelectComponent = isAsync ? AsyncSelect : ReactSelect;

  /**
   *
   * @param {String} selectedValue The selected value
   * @returns {undefined} nothing
   */
  function handleChangeMulti(selectedValue) {
    setValue(selectedValue);
    onSelection && onSelection(selectedValue);
  }

  const selectStyles = {
    input: (base) => ({
      ...base,
      "color": theme.palette.text.primary,
      "& input": {
        font: "inherit"
      }
    })
  };

  return (
    <div className={defaultClasses.root}>
      <SelectComponent
        classes={{ ...defaultClasses, ...classes }}
        components={components}
        inputId="react-select-multiple"
        onChange={handleChangeMulti}
        ref={ref}
        styles={selectStyles}
        innerRef={ref}
        TextFieldProps={{
          InputLabelProps: {
            htmlFor: "react-select-multiple",
            shrink: true
          }
        }}
        value={value}
        {...otherProps}
      />
    </div>
  );
});

Select.defaultProps = {
  placeholder: "Select options"
};

Select.propTypes = {
  /**
   * When provided options will be cached
   */
  cacheOptions: PropTypes.bool, // eslint-disable-line react/boolean-prop-naming
  /**
   * Additional classes to customize the Select component
   */
  classes: PropTypes.string,
  /**
   * The defaultOptions prop determines "when" your remote request is initially fired.
   * There are two valid values for this property.
   * Providing an option array to this prop will populate the initial set of options
   * used when opening the select, at which point the remote load only occurs
   * when filtering the options (typing in the control).
   * Providing the prop by itself (or with 'true') tells the control to immediately
   * fire the remote request, described by your loadOptions,
   * to get those initial values for the Select.
   */
  defaultOptions: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.bool]),
  /**
   * Set to true if options will be fetched asynchronously.
   */
  isAsync: PropTypes.bool,
  /**
   * A function that returns a Promise which will load the options
   */
  loadOptions: PropTypes.func,
  /**
   * Function to call when the selected value changes
   */
  onSelection: PropTypes.func,
  /**
   * The select options
  */
  options: PropTypes.arrayOf(PropTypes.object),
  /**
   * The placeholder string
   */
  placeholder: PropTypes.string
};

export default Select;
