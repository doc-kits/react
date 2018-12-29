<p align="center">
  <img src="https://raw.githubusercontent.com/shockits/doc-ui/dev/images/logo.png?raw=true" width="500">
</p>

<p align="center">
  <img src="https://badgen.net/npm/v/shockits/doc-ui" alt="Version">
  <img src="https://badgen.net/badge/license/MIT/blue" alt="License">
  <img src="https://badgen.net/david/dep/shockits/doc-ui" alt="Dependencies">
  <img src="https://badgen.net/packagephobia/publish/shockits/doc-ui" alt="Package Size">
  <img src="https://badgen.net/travis/shockits/doc-ui" alt="CI Build">
</p>

## 💅 Features

- Components can be used in isolation.
- Components can easily be integrated into documentation frameworks like [Docz](https://www.docz.site/), [Styleguidist](https://react-styleguidist.js.org/), and more.
- Fully customizable styles via CSS in JS.

## ⬇️ Install

Via Yarn or NPM:

`yarn add @shockits/doc-ui`

`npm install @shockits/doc-ui`

## 📚 Usage

Each UI component can be destructured from the library.

`import { OptionList } from '@shockits/doc-ui';`

For more information on the usage of individual components, refer to their individual README files or pop open our [Storybook](https://shockits.github.io/doc-ui/). You may also review our integration [examples](https://github.com/shockits/doc-ui/tree/master/examples).

### Overriding Component Styles

You currently have two options to modify the styles of a `doc-ui` component: **(i)** utilize a `ThemeProvider` or **(ii)** wrap the component in the `withStyles` HOC.

**ThemeProvider**

You may wrap the root of your React application in the `ThemeProvider` exported from `doc-ui`.

ThemeProvider works by passing the contents of the `theme` prop down into the children of the application thereby giving all `doc-ui` components access to the `theme` object.

By passing a `theme` object with the appropriate overriding keys & values for a particular component, you have complete control over styling.

This would be considered a **global approach** to overriding styles. See the `withStyles` HOC below for a more individualized approach.

```js
import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from '@shockits/doc-ui';
import App from './App';

const theme = {
  optionList: { title: { color: '#0099ff' } },
};

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('app')
);
```

**withStyles**

Another option to override the styles of `doc-ui` components is a more localized approach. Doc UI provides a `withStyles` higher-order component to override styles on a per-component basis.

You may create a local component within your project called `OptionList.js`, import the `doc-ui` OptionList and wrap it with new styles.

You would then use your newly created local `OptionList` throughout your application.

```js
import { withStyles, OptionList } from '@shockits/doc-ui';

const StyledOptionList = withStyles({
  type: {
    color: '#ff00cc',
  },
  description: {
    color: 'green',
    fontSize: ['0.5em', '1em', '1.5em'],
    margin: '1em',
  },
})(OptionList);

export default StyledOptionList;
```

## 🔩 Nuts & Bolts

The sections below explain some core concepts relating to how `doc-ui` was constructed along with 3rd party integration steps.

### Under the Hood

Doc UI is constructed using [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Emotion](https://emotion.sh/), and [Facepaint](https://github.com/emotion-js/facepaint). To utilize `doc-ui` your project must be using React, as we've set a peer dependency on it.

**Emotion**

By using Emotion under the hood, we are able to provide a nice style overriding API consisting of a global `theme` object and a more local `withTheme` higher-order component.

**Facepaint**

Facepaint provides a nice API to create responsive styles based on user-defined breakpoints.

By using `doc-ui` you are able to set breakpoints appropriate for your documentation project and when overriding styles for `doc-ui` components, Facepaint gives you the ability to pass in a different style for each of your defined breakpoints via an Array. It would look something like this:

```js
/* Breakpoints: 768px, 1440px */
const styles = {
  fontSize: ['0.875em', '1em', '1.5em'],
};
```

Index 0 in the array is your "mobile first" value. Each of the next two values correspond to your breakpoints at 768px and 1440px.

## Integration with Documentation Engines

The most popular documentation engines take advantage of React components by providing easy ways to integrate your own custom components.

### Docz

[Docz](https://www.docz.site/) is a popular open-source documentation engine that allows you to start writing documentation right away. It has some built-in components, but customizing your documentation [with your own components](https://www.docz.site/introduction/writing-mdx) is exactly what Docz was built for.

That means utilizing `doc-ui` `in the Docz engine is simple and straight forward.

**Integrate into Docz:**

In one of your Docz `.mdx` files simply import the Doc UI component in the same ol' fashion way.

`import { OptionList } from '@shockits/doc-ui';`

That is it! You can run the `docs:dev` command from Docz to see your newly integrated component live. You can see a simple integration example [here](FILL-ME-IN).

### Styleguidist

Coming soon.

### Other Documentation Engines

As long as the documentation engine has the ability to integrate React components you will be able to use Doc UI.

## 🔑 Why?

It seems that more recently there has been an emphasis on documentation not only in the open-source community, but at corporate companies small and large.

In the past, documentation seemed to be a second-hand thought, but now, more than ever, it is increasingly important to document our systems for easier comprehension by our end users.

The React component ecosystem has given rise to full-fledged documentation engines like [Docz](https://www.docz.site/) and [Styleguidist](https://react-styleguidist.js.org/).

**The problem is** there has yet to be a React component library centered around documentation that can be integrated into these engines or used for custom documentation projects.

**The solution is** `doc-ui` 😊

Doc UI has documentation related components you didn't even know you wanted!

## Integration Notes

- Currently only React is supported by the components.
- You should have both `react` and `react-dom` installed in your application as they are listed as `peerDependencies` in Doc UI.
