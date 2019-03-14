import React from 'react';
import { shallow } from 'enzyme';
import Copy from '../Copy';

jest.mock('copy-text-to-clipboard', () => {
  return () => {};
});

describe('<Copy />', () => {
  it('should render with icon and text', () => {
    const wrapper = shallow(
      <Copy
        code="<div />"
        show={true}
        inProgress={false}
        toggle={() => undefined}
      />
    );

    expect(wrapper.children().children().length).toEqual(2);
    expect(wrapper.find('Styled(div)').text()).toEqual('Copy');
  });

  it('should call copyContent when clicked', () => {
    const wrapper = shallow(
      <Copy
        code="<div />"
        show={true}
        inProgress={false}
        toggle={() => undefined}
      />
    );
    const instance = wrapper.instance();

    jest.spyOn(instance as any, 'copyContent');
    wrapper.instance().forceUpdate();
    wrapper.find('Styled(button)').simulate('click');

    expect((instance as any).copyContent).toHaveBeenCalled();
  });
});
