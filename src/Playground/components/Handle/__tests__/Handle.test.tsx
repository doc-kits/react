import React from 'react';
import { mount } from 'enzyme';
import Handle from '../Handle';

describe('<Handle />', () => {
  it('should render the handle with an icon', () => {
    const wrapper = mount(<Handle />);

    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.children().length).toBeGreaterThan(0);
  });
});
