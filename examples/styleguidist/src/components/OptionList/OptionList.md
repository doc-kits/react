Shown in this example is the [OptionList](https://github.com/doc-kits/react/tree/master/src/OptionList) component
from [Doc Kits: React](https://github.com/doc-kits/react) being integrated into the Styleguidist documentation engine.

```jsx noeditor
import { OptionList } from '@doc-kits/react';
// import OptionList from './OptionList.js';

<OptionList
  definitions={[
    {
      key: 'product_returned',
      required: false,
      type: 'boolean',
      description:
        'Whether or not the product has been returned by the customer.',
      default: 'false',
    },
    {
      key: 'status',
      required: true,
      type: 'string',
      description: [
        'Determines the current ',
        <a href="#" key="link">
          activity status
        </a>,
        ' of the account holder.',
      ],
      default: 'active',
      values: ['active', 'inactive'],
    },
  ]}
/>;
```
