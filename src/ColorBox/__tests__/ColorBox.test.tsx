import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import ColorBox from '../ColorBox';

describe('<ColorBox />', () => {
  it('should render with minimum requirements', () => {
    const tree = renderer
      .create(<ColorBox name="Red Barn" hex="#F00000" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call componentDidUpdate if hex prop changed', () => {
    const wrapper = shallow(<ColorBox name="Red Barn" hex="#F00000" />).get(0);
    const render = mount(wrapper);

    jest.spyOn((wrapper.type as any).prototype, 'componentDidUpdate');
    render.setProps({ hex: '#000000' });

    expect(
      (wrapper.type as any).prototype.componentDidUpdate
    ).toHaveBeenCalled();
  });

  it('should update the state and display value when cycleValues triggered', () => {
    const wrapper = mount(<ColorBox name="Red Barn" hex="#F00000" />);

    wrapper
      .find('div')
      .at(4)
      .simulate('click')
      .simulate('click');

    expect(
      wrapper
        .find('div')
        .at(5)
        .text()
    ).toEqual('hsl(0, 100%, 47%)');
  });

  it('should show a transparent triangle color if a invalid hex is passed', () => {
    const wrapper = shallow(<ColorBox name="Red Barn" hex="#F0000" />).get(0);

    expect(wrapper.props.classes.triangle.borderColor).toEqual(
      'transparent transparent transparent transparent'
    );
  });
});
