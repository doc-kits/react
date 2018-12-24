import * as React from 'react';
import * as renderer from 'react-test-renderer';
import OptionList from './OptionList';

jest.mock('../toolkit/responsive', () => ({
  mq: () => {} /* tslint:disable-line no-empty */,
}));

describe('<OptionList />', () => {
  it('should render with min requirements', () => {
    const tree = renderer
      .create(
        <OptionList
          definitions={[
            {
              key: 'align-content',
              type: 'string',
            },
          ]}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render with all available passed in options', () => {
    const tree = renderer
      .create(
        <OptionList
          tableTitle="Arguments"
          localStyles={{ title: { color: 'green' } }}
          definitions={[
            {
              key: 'align-content',
              type: 'string',
              required: true,
              description: [
                'The reason given for the ',
                <a href="#" key="link">
                  cancellation
                </a>,
                ' by the member support employee.',
              ],
              default: 'stretch',
              values: ['stretch', 'start', 'end'],
            },
          ]}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
