# Overriding & Extending Styles

There are 2 options to inject styles into Doc Kits: React components:

1. Locally via the `withStyles` HOC
2. Per instance via the `styles` prop

All of the Doc Kits: React default styles can be found [here](https://github.com/doc-kits/react/blob/master/src/toolkit/theme.ts).

## withStyles

The `withStyles` [higher-order component](https://reactjs.org/docs/higher-order-components.html) allows developers to inject their own styles, overriding and/or extending default styles.

The styles passed into the `withStyles` HOC are merged with the component's default styles which can be found in each individual component's `README.md` file. You can view the readme's on our [Storybook](https://doc-kits.github.io/react/).

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

The idea with this strategy would be to create a local component within your application. This newly created component would wrap the Doc Kits: React component with your own style properties.

You would then use this new component throughout your application, which now has your owns styles, instead of using the Doc Kits: React component directly.

## styles

A `styles` prop has been made available for those times when you just need to inject your own styles into a single instance of a Doc Kits: React component.

The style values from the `styles` prop will be merged with the default component styles.

This strategy of overriding takes the highest priority.

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
