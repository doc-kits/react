# Overriding & Extending Styles

There are 2 options to inject styles into Doc Kits: React components:

1. Locally via the `withStyles` higher-order component (HOC)
2. Per instance via the native `style` prop

## withStyles

The `withStyles` [higher-order component](https://reactjs.org/docs/higher-order-components.html) allows developers to inject their own styles, overriding and/or extending default styles.

The styles passed into the `withStyles` HOC are merged with the component's default styles which can be found in each individual component's `README.md` file. You can view the readme's on our [Storybook](https://doc-kits.github.io/react/).

**Integrated**

```js
// A local OptionList.js file in your app

import { withStyles, OptionList } from '@doc-kits/react';

const styles = {
  type: {
    color: '#ff00cc',
  },
  description: {
    color: 'green',
    fontSize: ['0.5em', '1em', '1.5em'],
    margin: '1em',
    // Extending 'description' with a padding property
    padding: '0.5em',
  },
};

const MyOptionList = props => (
  <div className="container">
    <h1>Arguments</h1>
    <OptionList tableTitle={false} />
  </div>
);

export default withStyles(styles)(MyOptionList);
```

**Shorthand**

```js
// A local OptionList.js file in your app

import { withStyles, OptionList } from '@doc-kits/react';

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

**With Props**

You may pass a function that returns an object of styles as the first argument of `withStyles` instead of an plain object. The function will give you access to the components `props`.

```js
// A local OptionList.js file in your app

import { withStyles, OptionList } from '@doc-kits/react';

const MyOptionList = withStyles(props => ({
  type: {
    color: '#ff00cc',
  },
  description: {
    color: props.color,
    fontSize: ['0.5em', '1em', '1.5em'],
    margin: '1em',
  },
}))(OptionList);

export default MyOptionList;
```

The idea with this strategy would be to create a local component within your application. This newly created component would wrap the Doc Kits: React component with your own style properties.

You would then use this new component throughout your application, which now has your owns styles, instead of using the Doc Kits: React component directly.

## styles

A `styles` prop has been made available when you need to inject your own styles into a _single instance_ of a Doc Kits: React component. The style values from the `styles` prop will be merged with the default component styles. This strategy of overriding takes the highest precedence.

This is a convenience prop.

```js
import { OptionList } from '@doc-kits/react';

<OptionList
  tableTitle="Arguments"
  definitions={[
    {
      key: 'cancellation_reason',
      type: 'string',
    },
  ]}
  styles={{
    type: {
      color: '#ff00cc',
    },
    description: {
      color: 'green',
      fontSize: ['0.5em', '1em', '1.5em'],
      margin: '1em',
    },
  }}
/>;
```

## props

All extra props not used by Doc Kits: React will be passed through to the _root_ of the component which is the outer most `<div>`.
