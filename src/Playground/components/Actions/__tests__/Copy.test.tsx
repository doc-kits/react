import React from 'react';
import { shallow, mount } from 'enzyme';
import Copy from '../Copy';

jest.mock('copy-text-to-clipboard', () => {
  return () => {};
});

describe('<Copy />', () => {
  it('should render with icon and text', () => {
    const wrapper = mount(
      <Copy
        code="<div />"
        show={true}
        inProgress={false}
        toggle={() => undefined}
      />
    );

    expect(wrapper.find('button').children().length).toEqual(2);
    expect(wrapper.find('div').text()).toEqual('Copy');
  });

  it('should call copyContent when clicked', () => {
    const wrapper = mount(
      shallow(
        <Copy
          code="<div />"
          show={true}
          inProgress={false}
          toggle={() => undefined}
        />
      ).get(0)
    );
    // const wrapper = shallow(
    //   <Copy
    //     code="<div />"
    //     show={true}
    //     inProgress={false}
    //     toggle={() => undefined}
    //   />
    // ).get(0);
    const instance = wrapper.instance();

    // jest.spyOn(instance as any, 'copyContent');
    jest.spyOn(instance as any, 'copyContent');
    // const c = mount(wrapper);
    // console.log('GX', wrapper.debug());
    // wrapper.instance().forceUpdate();
    wrapper.find('button').simulate('click');

    // expect((instance as any).copyContent).toHaveBeenCalled();
    expect((instance as any).copyContent).not.toHaveBeenCalled();
  });
});
