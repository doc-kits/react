import React from 'react';
import { shallow } from 'enzyme';
import Source from '../Source';

describe('<Source />', () => {
  it('should render with icon and text', () => {
    const wrapper = shallow(<Source />);

    expect(wrapper.find('a').children().length).toEqual(2);
    expect(wrapper.find('Styled(div)').text()).toEqual('Source');
  });
});
