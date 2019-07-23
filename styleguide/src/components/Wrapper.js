import React from "react";
import DefaultWrapper from "react-styleguidist/lib/client/rsg-components/Wrapper/Wrapper";
import { ComponentsProvider } from "@reactioncommerce/components-context";
import { MuiThemeProvider } from "@material-ui/core/styles";
import appComponents from "../appComponents";
import { defaultTheme } from "../../../package/src";

/**
 * @name Wrapper
 * @summary wraps example components with ComponentsProvider
 * @param {Object} props Component props
 * @returns {Object} with wrapped component(s)
 */
function Wrapper(props) {
  return (
    <ComponentsProvider value={appComponents}>
      <MuiThemeProvider theme={defaultTheme}>
        <DefaultWrapper {...props} />
      </MuiThemeProvider>
    </ComponentsProvider>
  );
}

export default Wrapper;
