import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ColorBox from '../ColorBox';

jest.mock('../../toolkit/constructTheme', () => {
  return () => ({
    ui: { text: {} },
    mq: () => undefined,
  });
});

const mock = {
  componentDidUpdate: jest.spyOn(ColorBox.prototype, 'componentDidUpdate'),
};

describe('<ColorBox />', () => {
  it('should render with minimum requirements', () => {
    const tree = renderer
      .create(<ColorBox colorName="Red Barn" hexValue="#F00000" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call componentDidUpdate if hexValue prop changed', () => {
    const wrapper = shallow(
      <ColorBox colorName="Red Barn" hexValue="#F00000" />
    );

    wrapper.setProps({ hexValue: '#000000' });
    expect(mock.componentDidUpdate).toHaveBeenCalled();
  });

  it('should update the state and display value when cycleValues triggered', () => {
    const wrapper = shallow(
      <ColorBox colorName="Red Barn" hexValue="#F00000" />
    );

    wrapper
      .find('Styled(div)')
      .at(2)
      .simulate('click');

    expect(
      wrapper
        .find('Styled(div)')
        .at(4)
        .text()
    ).toEqual('rgb(240, 0, 0)');
  });
});
