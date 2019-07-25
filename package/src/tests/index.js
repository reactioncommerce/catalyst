import React from "react";
import PropTypes from "prop-types";
import { render } from "react-testing-library";
import { ThemeProvider } from "@material-ui/styles";
import { defaultTheme } from "../../theme/defaultTheme";

/**
 * Component that wraps components with mock providers during testing.
 * @return {Component} - Component wrapped with mock providers
 */
const TestProviders = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    {children}
  </ThemeProvider>
);

TestProviders.propTypes = {
  /** React Component */
  children: PropTypes.element.isRequired,
  /** Material-UI theme object */
  theme: PropTypes.object
};

/**
 * Custom test renderer that wraps all components with the appropriate mock providers.
 * @param {Component} component - React component to render.
 * @param {Object} options - Options.
 * @return {Object} - @see {@link https://testing-library.com/docs/react-testing-library/api#render-result|react-testing-library}
 */
const renderWithProviders = async (component, options) => {
  render({ wrapper: TestProviders, ...options });
};

export * from "react-testing-library";
export { renderWithProviders as render };
