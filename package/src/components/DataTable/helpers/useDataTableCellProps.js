/**
 * useDataTableCellProps
 * @summary Hook used to add custom props to cells, and headers from the column definition
 * @param {Object} hooks React Table hook object
 * @returns {Undefined} No return value
 */
export default function useDataTableCellProps(hooks) {
  // Add a helpers function to get additional headerProps from the column definition
  hooks.getHeaderProps.push((props, { column }) => {
    if (typeof column.headerProps === "function") {
      return [
        props,
        {
          ...column.headerProps(column)
        }
      ];
    }

    return [
      props,
      {
        ...column.headerProps
      }
    ];
  });

  // Add a helpers function to get additional cellProps from the column definition
  hooks.getCellProps.push((props, { cell }) => {
    if (typeof cell.column.cellProps === "function") {
      return [
        props,
        {
          ...cell.column.cellProps(cell)
        }
      ];
    }

    return [
      props,
      {
        ...cell.column.cellProps
      }
    ];
  });
}

useDataTableCellProps.pluginName = "useDataTableCellProps";
