import React from 'react';
import { shallow } from 'enzyme';
import Handle from '../Handle';

describe('<Handle />', () => {
  it('should render the handle with an icon', () => {
    const wrapper = shallow(<Handle />);

    expect(wrapper.find('Styled(div)')).toHaveLength(1);
    expect(wrapper.children().length).toBeGreaterThan(0);
  });
});
