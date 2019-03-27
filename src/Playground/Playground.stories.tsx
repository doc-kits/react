import { text, boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';
import { withReadme } from 'storybook-readme';
import Playground from './Playground';
import ColorBox from '../ColorBox';
import OptionList from '../OptionList';

// tslint:disable-next-line no-var-requires
const readme = require('./README.md');

storiesOf('Playground', module)
  .addDecorator(withReadme(readme))
  .add('default', () => (
    <Playground
      components={{ OptionList }}
      mode={select(
        'mode',
        {
          full: 'full',
          handleOnly: 'handleOnly',
          containerOnly: 'containerOnly',
        },
        'full'
      )}
      source={text('source', 'http://www.mysite.com')}
      align={text('align', 'flex-start')}
      actions={{
        copy: boolean('copy icon', true),
        code: boolean('code icon', true),
        refresh: boolean('refresh icon', true),
        source: boolean('source icon', true),
      }}
    >
      <OptionList
        definitions={[
          {
            key: 'cancellation_reason',
            required: false,
            type: 'string',
            description: [
              'The reason given for the ',
              <a href="#" key="link">
                cancellation
              </a>,
              ' by the member support employee.',
            ],
            default: 'null',
            values: ['duplicate', 'fraudulent', 'requested_by_customer'],
          },
        ]}
      />
    </Playground>
  ))
  .add('multiple components', () => (
    <Playground
      components={{ ColorBox }}
      mode={select(
        'mode',
        {
          full: 'full',
          handleOnly: 'handleOnly',
          containerOnly: 'containerOnly',
        },
        'full'
      )}
      align={text('align', 'flex-start')}
      actions={{
        copy: boolean('copy icon', true),
        code: boolean('code icon', true),
        refresh: boolean('refresh icon', true),
      }}
      editor={{ lineNumbers: true }}
    >
      <Fragment>
        <ColorBox name="Red Barn" hex="#F00000" />
        <ColorBox name="Cream Popsicle" hex="#F09320" />
        <ColorBox name="Sky Blue" hex="#00AAE5" />
        <ColorBox name="Lavender" hex="#977BB6" />
      </Fragment>
    </Playground>
  ));
