# Media Queries

Doc Kits: React uses both Emotion and Facepaint under the hood to provide a dynamic API for developers to override the component styles.

## Emotion

[Emotion](https://emotion.sh/) is a popular CSS in JS library which provides a JavaScript API for developers to pass CSS properties. Doc Kits: React uses the CSS object notation for simplicity and familiarity.

## Facepaint

In conjunction with Emotion, [Facepaint](https://github.com/emotion-js/facepaint), part of the Emotion family, adds even more value be providing a smooth API for media queries. Developers are able to first create a set of media queries to be used by the Doc Kits: React components and then pass an array of values for a CSS property aligning to those queries.

### Breakpoints

Doc Kits: React provides a set of media queries that you can utilize. The breakpoints are set as `min-width` media queries with the following values:

```scss
480px // phone large
600px // tablet small
768px // tablet medium
1024px // tablet large
1280px // desktop small
1440px // desktop medium
```

### Utilizing Media Queries

Doc Kits: React takes advantage of Facepaint to provide an interface which gives developers the ability to pass an array of values for _any_ component style property. Each value in the array will correspond to the set breakpoints. For example, the `color` and `fontSize` properties below are passing an array of values to set a different value at a couple of the defined breakpoints.

```js
/* Breakpoints: mobile, 480px, 600px */
const styles = {
  type: {
    color: ['blue', 'lightblue', 'darkblue'],
  },
  description: {
    fontSize: ['0.5em', '1em', '1.5em'],
  },
};
```

Index 0 in the array is your **"mobile first"** value. The values that follow in the array in this example correspond to the first two default Doc Kits: React breakpoints, 480px and 600px respectively.

> **Note:** When passing an array of values for a property you are not able to "skip" certain breakpoints. If you wish to have the same value as the previous for a certain breakpoint, duplicate the value in the array.
