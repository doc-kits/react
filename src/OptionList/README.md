# Option List

Useful to render options, parameters, or arguments in a stylish list structure.

<p align="left">
  <img src="https://raw.githubusercontent.com/doc-kits/react/master/images/option-list.png?raw=true" width="1000">
</p>

**[Demo](https://doc-kits.github.io/react/?selectedKind=OptionList&selectedStory=default&full=0&addons=1&stories=1&panelRight=0&addonPanel=REACT_STORYBOOK%2Freadme%2Fpanel)**

## Features

- Automatically builds the sentence format for the option based on the props passed into the component.
- Accepts pattern to allow HTML such as links to be built into the description sentence.

## Usage

**Import**:

`import { OptionList } from '@doc-kits/react';`

**JSX**:

```js
<OptionList
  tableTitle="Arguments",
  definitions={[
    {
      key: "cancellation_reason",
      required: true,
      type: "string",
      description: "The reason given for the cancellation."
      default: "null",
      values: [
        "duplicate",
        "fraudulent",
        "requested_by_customer",
      ],
    },
    {...},
  ]}
/>
```

## Props

| Property               | Type                                | Required | Default | Description                              |
| ---------------------- | ----------------------------------- | -------- | ------- | ---------------------------------------- |
| tableTitle             | string                              | no       | Options | Sets the title for the table             |
| definitions            | Array[Objects]                      | yes      | null    | A list of option properties              |
| definition.key         | string                              | yes      | null    | A name for the key of the option         |
| definition.required    | boolean                             | no       | false   | Set true if this option is required      |
| definition.type        | string                              | yes      | null    | The type for the option                  |
| definition.description | string, Array[string / HTMLElement] | no       | null    | A description for the option             |
| definition.default     | string                              | no       | null    | The default value of the option          |
| definition.values      | Array[string]                       | no       | null    | A list of possible values for the option |

## Styles

The default styles injected into `OptionList` are shown below.

```js
const styles = {
  root: {
    boxSizing: 'border-box',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Muli',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.5,
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  wrapper: {
    borderBottom: '1px solid #d8d8d8',
    color: '#4a6271',
    fontSize: ['0.875rem', '0.875rem', '1rem'],
    '& a': {
      color: '#0099e5',
      textDecoration: 'none',
      '& hover': {
        textDecoration: 'underline',
      },
      '& active': {
        color: '#0099e5',
      },
    },
  },
  title: {
    borderBottom: '1px solid #d8d8d8',
    color: '#4a6271',
    fontSize: 'inherit',
    paddingBottom: '0.313em',
    textTransform: 'uppercase',
  },
  option: {
    borderTop: '1px solid #f0f0f0',
    padding: '1.143em 0',
  },
  info: {
    alignItems: 'baseline',
    display: 'flex',
    '& div': {
      marginRight: '0.357em',
      '& last-of-type': {
        marginRight: 0,
      },
    },
  },
  key: {
    color: '#334049',
    fontSize: 'inherit',
    fontWeight: '600',
  },
  optional: {
    border: 'none',
    color: '#989898',
    fontSize: '1rem',
    padding: 0,
    textTransform: 'none',
  },
  required: {
    border: '1px solid #eb742c',
    borderRadius: '10px',
    color: '#eb742c',
    fontSize: '0.875em',
    padding: '0 0.571em',
    textTransform: 'uppercase',
  },
  type: {
    color: '#989898',
    fontSize: 'inherit',
  },
  description: {
    color: 'inherit',
    fontSize: 'inherit',
    margin: '1em 0 0 0',
  },
  values: {
    color: '#989898',
    'span:not(:first-of-type)::before': {
      content: '", "',
    },
    'span:nth-last-of-type(2):not(:first-of-type)::after': {
      content: '","',
    },
    'span:last-child:not(:only-of-type)::before': {
      content: '" or "',
      color: '#4a6271',
    },
    'div:nth-of-type(1)': {
      marginBottom: '0.25em',
    },
  },
  code: {
    backgroundColor: codeBg,
    border: '1px solid #eaf2f2',
    borderRadius: '3px',
    color: '#d73347',
    fontFamily: 'inherit',
    padding: '0 0.4em',
  },
};
```

## Notes

- You will _almost always_ want to add a punctuation period at the end of your `description` as it will be entered as a sentence.

- You may want to add a link into the description. To do so, you must use a mixed Array of strings and an `a` HTMLElement. It would look like the following: <br><br>

  ```js
  {
    description: [
      'The reason given for the ',
      <a href="#" key="link">cancellation</a>,
      ' by the member support employee.',
    ],
  }
  ```
