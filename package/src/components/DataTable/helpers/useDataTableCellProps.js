import PropTypes from "prop-types";

const propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    cellProps: PropTypes.shape({
      isClickDisabled: PropTypes.bool
    })
  }))
};

/**
 * useMain
 * @summary Hook used to add custom props to cells, and headers from the column definition
 * @param {Object} instance React Table instance
 * @returns {Object} React Table instance
 */
function useMain(instance) {
  PropTypes.checkPropTypes(propTypes, instance, "property", "useDataTableCellProps");

  const {
    hooks: {
      getHeaderProps,
      getCellProps
    }
  } = instance;

  // Add a helpers function to get additional headerProps from the column definition
  getHeaderProps.push((header) => {
    if (typeof header.headerProps === "function") {
      return header.headerProps(header, instance);
    }

    return {
      ...header.headerProps
    };
  });

  // Add a helpers function to get additional cellProps from the column definition
  getCellProps.push((cell) => {
    if (typeof cell.column.cellProps === "function") {
      return cell.column.cellProps(cell, instance);
    }

    return {
      ...cell.column.cellProps
    };
  });

  return instance;
}

/**
 * useDataTableCellProps
 * @param {Object} hooks Hooks object from react-table useTable
 * @returns {undefined} no return
 */
export default function useDataTableCellProps(hooks) {
  hooks.useMain.push(useMain);
}

useDataTableCellProps.pluginName = "useDataTableCellProps";
