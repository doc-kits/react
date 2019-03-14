# Color Box

Useful to render a gallery of available colors belonging to a palette or scheme.

## Features

- Click / tap on the color value to cycle through other formats of the same value.

## Usage

**Import**:

`import { ColorBox } from '@doc-kits/react';`

**JSX**:

```js
<ColorBox colorName="Red Barn" hexValue="#F00000" />
```

## Props

| Property  | Type   | Required | Default | Description                    |
| --------- | ------ | -------- | ------- | ------------------------------ |
| colorName | string | yes      | null    | A nickname for the color shown |
| hexValue  | string | yes      | null    | A valid hex color value        |

## Styles

The default styles injected into `ColorBox` are shown below.

```js
const styles = {
  wrapper: {
    backgroundColor: 'white',
    boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
    color: '#4a6271',
    display: 'flex',
    fontSize: '1rem',
    height: ['9.375em', '10.938em', '12.500em'], // 150px, 175px, 200px
    lineHeight: '1.5',
    position: 'relative',
    width: ['9.375em', '10.938em', '12.500em'], // 150px, 175px, 200px
  },
  triangle: {
    borderStyle: 'solid',
    borderWidth: ['0 125px 125px 0', '0 150px 150px 0', '0 170px 170px 0'],
    height: '0',
    position: 'absolute',
    right: '0',
    width: '0',
  },
  text: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '0.5em',
    zIndex: '5',
  },
  icon: {
    color: '#a8a8a8',
    '& svg': {
      width: ['0.750em', '0.875em'],
      height: ['0.750em', '0.875em'],
    },
  },
  colorValue: {
    color: '#a8a8a8',
    fontSize: ['0.625em', '0.750rem', '0.875rem'],
    marginBottom: '0.857em',
    maxWidth: '11.071em',
    textTransform: 'uppercase',
  },
  name: {
    fontSize: ['0.875rem', '1rem', '1.125rem'],
    fontWeight: '600',
    maxWidth: '9.375em',
  },
};
```

## Notes

- You will get the best visual appearance of the component when the `colorName` is kept to a single line of text at all breakpoints.
