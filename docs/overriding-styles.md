# Overriding Styles

There are 3 options to inject styles into Doc UI components:

1. Globally via the `ThemeProvider`
2. Locally via the `withStyles` HOC
3. Per instance via the `localStyles` prop

All of the Doc UI default styles can be found [here](https://github.com/shockits/doc-ui/blob/master/src/toolkit/theme.ts).

## ThemeProvider

You may wrap the root of your React application in the `ThemeProvider` exported from `doc-ui`.

The `ThemeProvider` is passed a `theme` prop consisting of an object with the `docUi` key. This key is used to namespace the Doc UI settings inside of a potentially larger theme object.

The `ThemeProvider` component is re-exported in Doc UI from Emotion. You can see further documentation about this component in the Emotion docs [here](https://emotion.sh/docs/emotion-theming#themeprovider-reactcomponenttype).

```js
import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from '@shockits/doc-ui';
import App from './App';

const theme = {
  docUi: {
    optionList: {
      type: {
        color: '#ff00cc',
      },
      description: {
        color: 'green',
        fontSize: ['0.5em', '1em', '1.5em'],
        margin: '1em',
      },
    },
  },
};

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('app')
);
```

You can find all the available options for the `docUi` key [here](#theme-options). The options from the `docUi` key are merged with the Doc UI [defaults](#theme-options).

## withStyles

The `withStyles` HOC is a local overriding strategy. The strategy entails wrapping a Doc UI component with your own style values.

The styles passed into the `withStyles` HOC are merged with the component's default styles which can be found in each individual component's `README.md` file. You can view the readme's on our [Storybook](https://shockits.github.io/doc-ui/).

```js
// A local OptionList.js file in your app

import { withStyles, OptionList } from '@shockits/doc-ui';

const MyOptionList = withStyles({
  type: {
    color: '#ff00cc',
  },
  description: {
    color: 'green',
    fontSize: ['0.5em', '1em', '1.5em'],
    margin: '1em',
  },
})(OptionList);

export default MyOptionList;
```

The idea with this strategy would be to create a local component within your application. This newly created component would wrap the Doc UI component with your own style values.

You would then use this new component throughout your application, which has your owns styles, instead of using the Doc UI component directly.

This strategy of overriding takes a higher priority than the global `ThemeProvider` strategy.

## localStyles

A `localStyles` prop has been made available for those times when you just need to inject your own styles into a single instance of a Doc UI component.

The style values from the `localStyles` prop will be merged with the default component styles.

This strategy of overriding takes the highest priority.

```js
import { OptionList } from '@shockits/doc-ui';

<OptionList
  tableTitle="Arguments"
  localStyles={{
    type: {
      color: '#ff00cc',
    },
    description: {
      color: 'green',
      fontSize: ['0.5em', '1em', '1.5em'],
      margin: '1em',
    },
  }}
  definitions={[
    {
      key: 'cancellation_reason',
      type: 'string',
    },
  ]}
/>;
```
