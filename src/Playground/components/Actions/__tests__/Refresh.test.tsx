import React from 'react';
import { shallow, mount } from 'enzyme';
import Refresh from '../Refresh';

describe('<Refresh />', () => {
  it('should render with icon and text', () => {
    const wrapper = mount(
      <Refresh inProgress={false} toggle={() => undefined} />
    );

    expect(wrapper.find('button').children().length).toEqual(2);
    expect(
      wrapper
        .find('div')
        .at(1)
        .text()
    ).toEqual('Refresh');
  });

  it('should update the refreshRotation when clicked', () => {
    const wrapper = mount(
      shallow(<Refresh inProgress={false} toggle={() => undefined} />).get(0)
    );

    wrapper.find('button').simulate('click');
    expect(wrapper.state('refreshRotation')).toEqual(1);
  });
});
