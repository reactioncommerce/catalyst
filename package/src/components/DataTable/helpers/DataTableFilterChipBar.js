import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import Chip from "../../Chip";

/**
 * @name getFilterLabel
 * @summary Get the filter label from the labels object
 * @param {Object} labels Filter labels
 * @param {String|Number} filterValue Simple value to match with a label if available
 * @returns {String} A label to display in the chip
 */
function getFilterLabel(labels, filterValue) {
  if (!labels) return filterValue;
  return labels[`filterChipValue.${filterValue}`] || filterValue;
}

/**
 * @name DataTableFilterDisplay
 * @summary Component to display chips for the DataTable
 * @param {Object} props Component props
 * @returns {PropTypes.elementType} React component
 */
function DataTableFilterDisplay(props) {
  const { filters, labels, onRemove } = props;
  const { globalFilter, ...customFilters } = filters;
  const filterKeyArray = Object.keys(customFilters);

  // Don't show the component if there aren't any filters to show
  if (filterKeyArray.length === 0) return null;

  // Show filters as chips
  const chips = filterKeyArray.map((key) => {
    const filterValue = customFilters[key];

    if (Array.isArray(filterValue)) {
      return filterValue.map((multiSelectValue) => (
        <Box
          key={`multi_${multiSelectValue}`}
          paddingRight={0.5}
          paddingBottom={0.5}
        >
          <Chip
            color="primary"
            label={getFilterLabel(labels, multiSelectValue)}
            onDelete={() => onRemove(key, multiSelectValue)}
            style={{ marginRight: "4px" }}
          />
        </Box>
      ));
    }

    return (
      <Box
        key={`single_${filterValue}`}
        paddingRight={0.5}
        paddingBottom={0.5}
      >
        <Chip
          color="primary"
          label={getFilterLabel(labels, filterValue)}
          onDelete={() => onRemove(key)}
          style={{ marginRight: "4px" }}
        />
      </Box>
    );
  });

  return (
    <Box
      paddingBottom={1}
      paddingLeft={1}
      paddingRight={1}
      display="flex"
      flexWrap="wrap"
    >
      {chips}
    </Box>
  );
}

DataTableFilterDisplay.propTypes = {
  filters: PropTypes.object,
  labels: PropTypes.object,
  onRemove: PropTypes.func
};

DataTableFilterDisplay.defaultProps = {
  onRemove: () => { }
};

export default DataTableFilterDisplay;
