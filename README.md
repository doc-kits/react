<div style="text-align: center;">
  <img src="https://raw.githubusercontent.com/meebix/files/master/logo.png" width="500">
</div>

## ⬇️ Install

Via Yarn or NPM:

`yarn add @shockits/doc-ui`

`npm install @shockits/doc-ui`

## 📚 Usage

`import { OptionList } from '@shockits/doc-ui';`

Each UI component can be destructured from the library. For more information on the usage of individual components, refer to their individual [README files]() or pop open our [Storybook]().

You may also review our [examples]().

## 💅 Features

- Components can be used in isolation.
- Components can easily be integrated into documentation frameworks like [Docz](https://www.docz.site/), [Styleguidist](https://react-styleguidist.js.org/), and more.
- Fully customizable styles via CSS in JS.

## 🔑 Why?

It seems that more recently there has been an emphasis on documentation not only in the open-source community, but at corporate companies small and large.

In the past, documentation seemed to be a second-hand thought, but now, more than ever, it is increasingly important to document our systems for easier comprehension by our end users.

The React component ecosystem has given rise to full-fledged documentation engines like [Docz](https://www.docz.site/) and [Styleguidist](https://react-styleguidist.js.org/).

**The problem is** there has yet to be a React component library centered around documentation that can be integrated into these engines or used for custom documentation projects.

**The solution is** `doc-ui` 😊

## 🔩 Nuts & Bolts

The sections below explain some core concepts relating to how `doc-ui` was constructed along with 3rd party integration steps.

### Under the Hood

Doc UI is constructed using React, TypeScript, [Emotion](https://emotion.sh/), and [Facepaint](https://github.com/emotion-js/facepaint). To utilize `doc-ui` your project must be using React, as we've set a peer dependency on it.

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

### Overriding Styles

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

### Integration with Documentation Engines

The most popular documentation engines utilize React components as well and have a way of importing your own React components into these systems.

**Docz**

Coming soon.

**Styleguidist**

Coming soon.

### Support

The `doc-ui` components are meant to support the following environments:

- Must be used with React
- ES6 modules (import / export)
- Last 2 browsers versions of all major browsers
