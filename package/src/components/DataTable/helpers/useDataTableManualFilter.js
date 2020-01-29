/**
 * useDataTableManualFilter hook
 * Based on the `useFilters` hook from react-table https://github.com/tannerlinsley/react-table/blob/master/src/plugin-hooks/useFilters.js
 * This hook provides a methods for setting a set of manual filters, that aren't restricted by columns
 */
import {
  actions,
  useMountedLayoutEffect,
  functionalUpdate,
  useGetLatest
} from "react-table";

// Actions
actions.resetManualFilters = "resetManualFilters";
actions.setManualFilters = "setManualFilters";
actions.setAllManualFilters = "setAllManualFilters";

const useManualFilters = (hooks) => {
  hooks.stateReducers.push(reducer);
  hooks.useInstance.push(useInstance);
};

useManualFilters.pluginName = "useManualFilters";

/**
 * State reducer
 * @param {Object} state State
 * @param {String} action Action name
 * @param {Object} previousState Previous state object
 * @param {Object} instance Table instance
 * @returns {Object} New state
 */
function reducer(state, action, previousState, instance) {
  if (action.type === actions.init) {
    return {
      manualFilters: [],
      ...state
    };
  }

  if (action.type === actions.resetManualFilters) {
    return {
      ...state,
      manualFilters: instance.initialState.manualFilters || []
    };
  }

  if (action.type === actions.setManualFilters) {
    const { manualFilterId, manualFilterValue } = action;

    const previousManualFilter = state.manualFilters.find((filter) => filter.id === manualFilterId);

    const newManualFilterValue = functionalUpdate(
      manualFilterValue,
      previousManualFilter && previousManualFilter.value
    );

    if (previousManualFilter) {
      return {
        ...state,
        manualFilters: state.manualFilters.map((filter) => {
          if (filter.id === manualFilterId) {
            return { id: manualFilterId, value: newManualFilterValue };
          }
          return filter;
        }).filter(({ value }) => (
          typeof value !== "undefined" && value !== null
        ))
      };
    }

    return {
      ...state,
      manualFilters: [...state.manualFilters, { id: manualFilterId, value: newManualFilterValue }]
    };
  }

  if (action.type === actions.setAllManualFilters) {
    const { manualFilters } = action;

    return {
      ...state,
      manualFilters: functionalUpdate(manualFilters, state.manualFilters).filter(({ value }) => (
        typeof value !== "undefined" && value !== null
      ))
    };
  }

  return state;
}

/**
 *
 * @param {Object} instance Table instance
 * @returns {undefined} No return value
 */
function useInstance(instance) {
  const {
    data,
    manualFilters,
    dispatch,
    autoResetManualFilters = true
  } = instance;

  const setManualFilters = (manualFilterId, manualFilterValue) => {
    dispatch({ type: actions.setManualFilters, manualFilterId, manualFilterValue });
  };

  const setAllManualFilters = (manualFiltersParam) => {
    dispatch({
      type: actions.setAllManualFilters,
      manualFilters: manualFiltersParam
    });
  };

  const getAutoResetManualFilters = useGetLatest(autoResetManualFilters);

  useMountedLayoutEffect(() => {
    if (getAutoResetManualFilters()) {
      dispatch({ type: actions.resetManualFilters });
    }
  }, [dispatch, manualFilters ? null : data]);

  Object.assign(instance, {
    setManualFilters,
    setAllManualFilters
  });
}

export default useManualFilters;
