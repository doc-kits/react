# Option List

Useful to render options, parameters, or arguments in a stylish list structure.

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
  wrapper: {
    borderBottom: '1px solid #cbd8de',
    color: '#4a6271',
    fontSize: ['0.875rem', '1rem'],
    lineHeight: '1.5',
  },
  title: {
    color: '#4a6271',
    fontSize: 'inherit',
    borderBottom: '1px solid #cbd8de',
    paddingBottom: '0.313em',
    textTransform: 'uppercase',
  },
  option: {
    borderTop: '1px solid #edf3f3',
    padding: '1.143em 0',
  },
  key: {
    color: '#334049',
    fontSize: 'inherit',
    fontWeight: '500',
  },
  optional: {
    color: '#939da3',
    fontSize: '1em',
  },
  required: {
    color: '#ffae54',
    fontSize: '0.857em',
    border: '1px solid #ffae54',
    borderRadius: '10px',
    padding: '0 0.571em',
    textTransform: 'uppercase',
  },
  type: {
    color: '#939da3',
    fontSize: 'inherit',
  },
  description: {
    color: 'inherit',
    fontSize: 'inherit',
    margin: '1em 0 0 0',
  },
  values: {
    color: '#939da3',
  },
  code: {
    backgroundColor: '#fafcfc',
    borderRadius: '3px',
    border: `1px solid ${darken(0.05, '#fafcfc')}`,
    color: '#b93d6a',
    padding: '0 0.4em',
    fontFamily: 'inherit',
  },
  palette: {
    link: '#0099e5',
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
