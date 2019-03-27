import React from 'react';
import { mount } from 'enzyme';
import Source from '../Source';

describe('<Source />', () => {
  it('should render with icon and text', () => {
    const wrapper = mount(<Source />);

    expect(wrapper.find('a').children().length).toEqual(2);
    expect(wrapper.find('div').text()).toEqual('Source');
  });
});
