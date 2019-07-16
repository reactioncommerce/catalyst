As mentioned in the installation instructions, many of the components in this library require that you provide the components they render by either passing them in as props or setting up a components context provider.

But why, you might be wondering, is that extra work necessary?

> A developer using the library must be able to easily swap in their own compatible component

For example, if you have a different Select component you really like, you should be able to import that somewhere and all of the Reaction Catalyst form components will use that instead.

With this requirement in mind, we decided that the best solution is to pass all component dependencies as props, specifically in an object prop named `components`. This gives full control to the app developers to import and pass in whatever they choose, as long as it conforms to the expected props and methods API.

Adding the components context provider is an extra step and potentially confusing to some developers, but initially it's simply a copy-paste of one file, and the maintenance of adding new components whenever you update the package is minimal. We feel the tradeoff is worth it for the freedom to replace components as you need.

Lastly, if you're wondering why we don't just have a default components context built into the library package, it's for this reason:
> Importing all the components anywhere in the library codebase would mean that you are no longer able to tree-shake them out of your app. You would be stuck with all of the components code, even if you provided your own components context in which you were only using a few of them.

By giving full control to the app developer, it allows you greater flexibility to customize and extend Catalyst for your needs.
