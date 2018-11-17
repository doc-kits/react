import { storiesOf } from '@storybook/react';
import * as React from 'react';
import OptionsList from './OptionsList';

storiesOf('OptionsList', module).add('', () => (
  <OptionsList
    definitions={[
      {
        default: 'true',
        description: 'A test argument',
        key: 'grid',
        required: true,
        type: 'string',
        values: ['inline-flex', 'flex'],
      },
    ]}
  />
));
