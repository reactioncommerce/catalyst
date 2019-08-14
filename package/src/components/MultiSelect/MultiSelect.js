import React, { useState } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
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
    height: 250,
    minWidth: 290
  },
  input: {
    display: "flex",
    padding: 0,
    height: "auto"
  },
  valueContainer: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    flex: 1,
    overflow: "hidden",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  chip: {
    margin: theme.spacing(0.5, 0.25)
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2)
  },
  placeholder: {
    position: "absolute",
    left: theme.spacing(1),
    fontSize: theme.typography.fontSize
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

// Rather than pass through all props to react-select, we'll keep a whitelist
// to better control the usage and appearance of this component.
const supportedPassthroughProps = [
  "async",
  "cacheOptions",
  "classes",
  "defaultOptions",
  "loadOptions",
  "placeholder",
  "onSelection",
  "options"
];

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
 * @name MultiSelect
 * @summary A Select component that supports selecting multiple options, and
 * loading options asynchronously and synchronously.
 * @param {Object} props - component props
 * @returns {React.Component} A React component
 */
const MultiSelect = React.forwardRef(function MultiSelect(props, ref) {
  const defaultClasses = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(null);

  const passThroughProps = {};
  supportedPassthroughProps.forEach((supportedProp) => {
    passThroughProps[supportedProp] = props[supportedProp];
  });

  const { classes, isAsync, onSelection } = props;
  const SelectComponent = isAsync ? AsyncSelect : Select;

  /**
   *
   * @param {String} selectedValue The selected value
   * @returns {undefined} nothing
   */
  function handleChangeMulti(selectedValue) {
    setValue(selectedValue);
    onSelection(selectedValue);
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
        isMulti={true}
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
        {...props}
      />
    </div>
  );
});

MultiSelect.defaultProps = {
  placeholder: "Select options"
};

MultiSelect.propTypes = {
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

export default MultiSelect;
