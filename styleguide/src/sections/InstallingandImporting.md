#### Install

```bash
npm install --save react@16 prop-types @reactioncommerce/components-context @reactioncommerce/catalyst
```

or

```bash
yarn add react@16 prop-types @reactioncommerce/components-context @reactioncommerce/catalyst
```

Note that the minimum required React version is 16.4.1 because this package uses newer APIs like `createContext` and `forwardRef`. The `react`, `prop-types`, and `@reactioncommerce/components-context` packages are peer dependencies, which means that you must install the proper versions in your app. They are not included with this package.

##### Verify Peer Dependencies

View the current list of `"peerDependencies"` in the `package.json` of the `@reactioncommerce/catalyst` package, and make sure that you have installed them all in your app.

##### Tell Webpack 4 How to Handle .mjs Files

The `@reactioncommerce/catalyst` package exports both CommonJS and EcmaScript modules. EcmaScript modules are newer and better in that they don't require transpiling for most newer browsers and they allow you to "tree shake" your app (remove unused package code while building).

Webpack 4 tries to use .mjs files, which are EcmaScript modules, if a package provides them. However, there is still mixed support for EcmaScript modules and when your app or a package mixes NPM packages with CommonJS and EcmaScript exports, errors can happen. If you see an error similar to `Can't import the named export 'Component' from non EcmaScript module` when building or starting your Webpack app, the solution is to add the following in your Webpack config `module.rules` array:

```jsx static
{
  test: /\.mjs$/,
  include: /node_modules/,
  type: "javascript/auto"
}
```

For a `create-react-app` app that hasn't been ejected, add `react-app-rewired` as a dev dependency, and in `package.json`, update the `start`, `build`, and `test` scripts to replace `react-scripts` with `react-app-rewired`:

```json
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test",
  "eject": "react-scripts eject"
},
```

Then paste this into a file in the project root directory named `config-overrides.js`:

```jsx static
module.exports = function override(webpackConfig) {
  webpackConfig.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto"
  });

  return webpackConfig;
}
```

For a NextJS app, you can add this to the exported object in your `next.config.js` file:

```jsx static
webpack(webpackConfig) {
  webpackConfig.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto"
  });

  return webpackConfig;
}
```

##### Provide the Components Context

Most components in this library do not directly import other components in this library. Instead, they rely on the components being injected through a `components` prop or through a central components React context. While this makes it slightly more work to get going, you'll find it to be much nicer in the long run because you can update to new releases of this library without any fear of pulling in component changes (potentially appearance or behavior changes) that you don't expect.

Component injection also allows you to, for example, use a Button component from another library while still using any of our components that render buttons for you.

Check out the [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context) package documentation for details about how to provide this context. To get started quickly, you may start by using the following object as the `value` of your app's `ComponentsProvider`. However, we recommend that you remove the imports for any components that aren't used by the components you use. (Refer to `components` prop documentation for each component you use.)

```jsx static
import Button from "@reactioncommerce/catalyst/Button";

export default {
  Button
};
```

#### Import

In your React component code:

```jsx static
import Button from "@reactioncommerce/catalyst/Button"
```

In your HTML:

```html
<!-- Font for display type -->
<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,600,700" rel="stylesheet">
```

#### Updating

In the future, when there are new releases of `@reactioncommerce/catalyst`, you will need to:

1. `npm update` the package
2. Update your components context with any new components that are now shown in the base example.
3. As you have time and need, update your components context to pull in newer versions of individual components.
