import React from "react";
import PropTypes from "prop-types";
import { render } from "@testing-library/react";
import { MuiThemeProvider } from "@material-ui/styles";
import defaultTheme from "../theme/defaultTheme";

/**
 * Component that wraps components with mock providers during testing.
 * @return {Component} - Component wrapped with mock providers
 */
const TestProviders = ({ children }) => (
  <MuiThemeProvider theme={defaultTheme}>
    {children}
  </MuiThemeProvider>
);

TestProviders.propTypes = {
  /** React Component */
  children: PropTypes.element.isRequired
};

/**
 * Custom test renderer that wraps all components with the appropriate mock providers.
 * @param {Component} component - React component to render.
 * @param {Object} options - Options.
 * @return {Object} - @see {@link https://testing-library.com/docs/react-testing-library/api#render-result|react-testing-library}
 */
const renderWithProviders = async (component, options) => {
  render(component, { wrapper: TestProviders, ...options });
};

export * from "@testing-library/react";
export { renderWithProviders as render };
