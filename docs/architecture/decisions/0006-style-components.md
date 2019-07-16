# 6. Style Components

Date: 2018-02-23

## Status

2019-07-12 accepted

## Context

These are our requirements for component styling:

- A component has baked-in styles that make it look good out of the box. These are used in the Style Guide app.
- Try as much as possible to isolate components from any generic app styles. For example, when rendered in an app that pulls in all Bootstrap CSS, it should still appear as expected. Conversely, no styles included with the component should affect the appearance of any other component in an app.

## Decision

Use [@material-ui/styles](https://material-ui.com/styles/basics/)

This is the best and most integrated styling solution for Material UI as it was built for the library itself.
