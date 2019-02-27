import React from 'react';
import { shallow } from 'enzyme';
import Code from '../Code';

describe('<Code />', () => {
  it('should render with icon and text', () => {
    const wrapper = shallow(<Code onClick={() => undefined} />);

    expect(wrapper.children().length).toEqual(2);
    expect(wrapper.find('Styled(div)').text()).toEqual('Code');
  });
});
