import React from "react";
import DefaultWrapper from "react-styleguidist/lib/client/rsg-components/Wrapper/Wrapper";
import { ComponentsProvider } from "@reactioncommerce/components-context";
import appComponents from "../appComponents";

/**
 * @name Wrapper
 * @summary wraps example components with ComponentsProvider
 * @returns {Object} with wrapped component(s)
 */
function Wrapper() {
  return (
    <ComponentsProvider value={appComponents}>
      <DefaultWrapper {...this.props} />
    </ComponentsProvider>
  );
}

export default Wrapper;
