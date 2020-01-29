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
 * @name DataTableFilterChipBar
 * @summary Component to display chips for the DataTable
 * @param {Object} props Component props
 * @returns {PropTypes.elementType} React component
 */
function DataTableFilterChipBar(props) {
  const { filters, manualFilters, labels, onRemove, onRemoveManualFilter } = props;

  // Don't show the component if there aren't any filters to show
  if (filters.length === 0 && manualFilters.length === 0) return null;

  const manualFilterChips = manualFilters.map(({ id }) => (
    <Box
      key={`single_${id}`}
      paddingRight={0.5}
      paddingBottom={0.5}
    >
      <Chip
        color="primary"
        label={id}
        onDelete={() => onRemoveManualFilter(id)}
        style={{ marginRight: "4px" }}
      />
    </Box>
  ));

  // Show filters as chips
  const chips = filters.map(({ id, value }) => {
    const filterValue = value;

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
            onDelete={() => onRemove(id, filterValue, multiSelectValue)}
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
          onDelete={() => onRemove(id)}
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
      {manualFilterChips}
      {chips}
    </Box>
  );
}

DataTableFilterChipBar.propTypes = {
  filters: PropTypes.array,
  labels: PropTypes.object,
  manualFilters: PropTypes.array,
  onRemove: PropTypes.func,
  onRemoveManualFilter: PropTypes.func
};

DataTableFilterChipBar.defaultProps = {
  onRemove: () => { },
  onRemoveManualFilter: () => { }
};

export default DataTableFilterChipBar;
