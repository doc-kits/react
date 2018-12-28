import { array, boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { withReadme } from 'storybook-readme';
import OptionList from './OptionList';

// tslint:disable-next-line no-var-requires
const readme = require('./README.md');

storiesOf('OptionList', module)
  .addDecorator(withReadme(readme))
  .add('default', () => (
    <OptionList
      definitions={[
        {
          key: text('key', 'cancellation_reason'),
          required: boolean('required', false),
          type: text('type', 'string'),
          description: [
            'The reason given for the ',
            <a href="#" key="link">
              cancellation
            </a>,
            ' by the member support employee.',
          ],
          default: text('default value', 'null'),
          values: array('possible values', [
            'duplicate',
            'fraudulent',
            'requested_by_customer',
          ]),
        },
      ]}
    />
  ))
  .add('multiple options', () => (
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
    />
  ));
