import React from 'react';
import { shallow } from 'enzyme';
import Refresh from '../Refresh';

describe('<Refresh />', () => {
  it('should render with icon and text', () => {
    const wrapper = shallow(
      <Refresh inProgress={false} toggle={() => undefined} />
    );

    expect(wrapper.children().length).toEqual(2);
    expect(wrapper.find('Styled(div)').text()).toEqual('Refresh');
  });

  it('should update the refreshRotation when clicked', () => {
    const wrapper = shallow(
      <Refresh inProgress={false} toggle={() => undefined} />
    );

    wrapper.find('Styled(button)').simulate('click');
    expect(wrapper.state('refreshRotation')).toEqual(1);
  });
});
