# Playground

Useful to render a component as an example. The Playground allows users to edit code and preview the changes live.

<p align="left">
  <img src="https://raw.githubusercontent.com/doc-kits/react/master/images/playground.png?raw=true" width="1000">
</p>

**[Demo](https://doc-kits.github.io/react/?selectedKind=Playground&selectedStory=default&full=0&addons=1&stories=1&panelRight=0&addonPanel=REACT_STORYBOOK%2Freadme%2Fpanel)**

## Features

- Live preview, code, and errors
- A resizable preview area to show responsiveness
- Set a `mode` to switch preview style
- Complete control over which actions are available
- Provide a link back to the original source code
- Set the preview alignment via Flexbox's `justify-content`
- Ability to render class and functional components as well as pure JSX

## Usage

**Import**:

`import { Playground } from '@doc-kits/react';`

**JSX**:

When passing a React component as children, the component must be passed to the `components` prop as context for the Playground.

```js
import { Button } from 'my-library';

<Playground components={{ Button }}>
  <Button>Click Me!</Button>
</Playground>
```

See [more examples](#examples) below.

## Props

| Property   | Type   | Required | Default    | Description                                                                                                                        |
| ---------- | ------ | -------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| components | object | yes*     | null       | The set of components the Playground will use as context for which components are being displayed                                  |
| mode       | string | no       | full       | A preset representation of the Playground. Possible values are: `full`, `handleOnly`, and `containerOnly`.                         |
| align      | string | no       | flex-start | Any valid value for Flexbox's `justify-content`                                                                                    |
| actions    | object | no       | true       | Set individual action icons to `false` to remove from the view. The possible actions are: `copy`, `code`, `refresh`, and `source`. |
| source     | string | no       | null       | An absolute URL to the original source code for the component being displayed in the Playground                                    |
| editor     | object | no       | null       | Any valid [CodeMirror options](https://codemirror.net/doc/manual.html#config) to be set on the code editor                         |

*Only required when passing a React component as `children`. If passing JSX or HTML directly, `components` is _not_ required.

## Styles

The default styles injected into `Playground` are shown below.

```js
const styles = {
  wrapper: {
    borderRadius: '3px',
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    border: '1px solid #d8d8d8',
    width: 'calc(100% - 18px)',
  },
  preview: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0.75em',
    '& > *': {
      margin: '0.5em',
    },
  },
  error: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
    fontSize: '0.875rem',
    padding: '0.25em 1em',
  },
  editor: {
    backgroundColor: '#fbfcfd',
    borderTop: '1px solid #d8d8d8',
    '& .CodeMirror': {
      backgroundColor: '#fbfcfd',
      fontFamily: "'Inconsolata', monospace",
      fontSize: '0.875em',
      height: 'auto',
    },
    '& .CodeMirror-lines': {
      padding: '1.5em 0',
    },
  },
  actions: {
    alignItems: 'center',
    backgroundColor: '#f7fbfa',
    display: 'flex',
    fontSize: ['0.625rem', '0.625rem', '0.688rem', '0.688rem', '0.750rem'],
    justifyContent: 'flex-end',
    paddingTop: '0.555em',
    paddingBottom: '0.355em',
  },
  action: {
    alignItems: 'center',
    animation: 'fadeIn 0.25s',
    appearance: 'none',
    background: 'none',
    border: 'none',
    color: '#a7b0ca',
    display: 'flex',
    lineHeight: 1,
    marginRight: '1em',
    opacity: 1,
    outline: 'none',
    padding: 0,
    '&:hover': {
      color: 'darken(0.1, #a7b0ca)',
      cursor: 'pointer',
    },
    '& a': {
      alignItems: 'center',
      color: 'inherit',
      display: 'flex',
      textDecoration: 'none',
    },
  },
  actionText: {
    marginLeft: '0.35em',
    textTransform: 'uppercase',
  },
  handle: {
    alignItems: 'center',
    backgroundColor: '#f9f7f3',
    borderBottomRightRadius: '3px',
    borderTopRightRadius: '3px',
    border: '1px solid #d8d8d8',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    width: '18px',
  },
  handleIcon: {
    opacity: '0.15',
    '&:last-child': {
      marginTop: '-0.250em',
    },
  },
};
```

## Examples

**Configuration**

This example shows how each of the available `props` might be configured to your desired state.

```js
import { Button } from 'my-library';

<Playground
  components={{ Button }}
  mode="containerOnly"
  align="center"
  actions={{ copy: false, refresh: false }}
  source="https://www.github.com/repo/button.js"
  editor={{ lineNumbers: true }}
>
  <Button>Click Me!</Button>
</Playground>
```

**Multiple Components**

When rendering multiple components into the Playground you must wrap them in a `<Fragment>` or `<div>` as you would need to in normal JSX.

```js
import { Fragment } from 'React';

<Playground>
  <Fragment>
    <Button>Copy</Button>
    <Button>Paste</Button>
    <Button>Clear</Button>
  </Fragment>
</Playground>
```

**Pure JSX**

If rendering simple JSX you do not need to pass any `props` to the Playground.

```js
<Playground>
  <div>Hello, World!</div>
</Playground>
```

## Notes

- The code editor that is part of the Playground uses a `font-family` of `Inconsolata` in the Storybook examples. If you would like to use the same font you must [inject](https://fonts.google.com/specimen/Inconsolata) `Inconsolata` into your application. Otherwise, you are free to override and use which ever font you desire for the editor.
- The Playground uses an open-source library called `react-live` under the hood. You can see more styles of JSX code that can be rendered into the Playground on their [demo site](https://react-live.kitten.sh/).
