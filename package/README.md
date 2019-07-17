# @reactioncommerce/catalyst

## Getting Started

```bash
npm install --save react@16.8.6 prop-types@15.6.2 styled-components@3.3.3 @reactioncommerce/components-context@1.2.0 @reactioncommerce/catalyst
```

or

```bash
yarn add react@6.8.6 prop-types@15.6.2 styled-components@3.3.3 @reactioncommerce/components-context@1.2.0 @reactioncommerce/catalyst
```

Note that the minimum required React version is 16.8.6 because this package uses newer APIs like `hooks`, `createContext` and `forwardRef`. The `react`, `prop-types`, and `@reactioncommerce/components-context` packages are peer dependencies, which means that you must install the proper versions in your app. They are not included with this package.

Then import a component:

```js
import Button from "@reactioncommerce/catalyst/Button";
```

In your HTML:

```html
// Font for display type
<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,600,700" rel="stylesheet">
```

## Icons

Several components in this library use the [Material Design Icons](https://materialdesignicons.com/) [React components](https://github.com/TeamWertarbyte/mdi-material-ui), which are distributed under the [WTFPL License](https://github.com/TeamWertarbyte/mdi-material-ui/blob/master/LICENSE). The icons themselves are distributed under the [SIL OPEN FONT LICENSE Version 1.1](https://github.com/Templarian/MaterialDesign/blob/master/LICENSE).