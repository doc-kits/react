# Emotion & Facepaint

Doc UI uses both Emotion and Facepaint under the hood to provide a dynamic API for developers to override the component styles.

## Emotion

[Emotion](https://emotion.sh/) is a popular CSS in JS library whereby providing a JavaScript object developers are able to pass in CSS Property key, value pairs in a natural fashion.

## Facepaint

In conjuction with Emotion, [Facepaint](https://github.com/emotion-js/facepaint), part of the Emotion family, adds even more value be providing a smooth API whereby developers are able to first create a set of media queries to be used by the Doc UI components and then pass values for each media query to an Array which is set on a CSS Property.

### Creating Facepaint Media Queries

In the [theme options](#theme-options) section above, you will notice in each example that a custom set of media queries are being passed in the `mq` key, created by the `facepaint` function. Again, that looks like this:

```js
import { facepaint } from '@shockits/doc-ui';

const mq = facepaint([`@media(min-width: 768px)`, `@media(min-width: 1440px)`]);
```

By passing in your own media queries to the `mq` key, you've overwritten the [defaults](https://github.com/shockits/doc-ui/blob/master/src/toolkit/theme.ts) provided by Doc UI.

### Setting Values

Whether you are using your own media queries or using the Doc UI default media queries, you have the ability to pass an array of values for a _any_ component property to create a different style for that property at the set media query breakpoints.

```js
/* Breakpoints: 768px, 1440px */
const styles = {
  type: {
    color: ['blue', 'lightblue', 'darkblue'],
  },
  description: {
    fontSize: ['0.5em', '1em', '1.5em'],
  },
};
```

Index 0 in the array is your **"mobile first"** value. The values that follow in the array in this example correspond to the default Doc UI breakpoints, 768px and 1440px respectively.

If you had passed your own media queries, the following N-number of values in the array would correspond to each of the breakpoints you've defined.
