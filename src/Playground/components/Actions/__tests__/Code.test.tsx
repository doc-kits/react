import React from 'react';
import { mount } from 'enzyme';
import Code from '../Code';

describe('<Code />', () => {
  it('should render with icon and text', () => {
    const wrapper = mount(<Code onClick={() => undefined} />);

    expect(wrapper.find('button').children().length).toEqual(2);
    expect(wrapper.find('div').text()).toEqual('Code');
  });
});
