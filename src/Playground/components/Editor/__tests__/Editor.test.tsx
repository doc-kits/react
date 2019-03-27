import React from 'react';
import { shallow, mount } from 'enzyme';
// import { Controlled as BaseEditor } from 'react-codemirror2';
import Editor from '../Editor';

// const mock = {
//   importThemeCss: jest.spyOn(Editor.prototype as any, 'importThemeCss'),
// };

describe('<Editor />', () => {
  it('should render the editor', () => {
    const wrapper = mount(
      <Editor code="<div />" handleChange={() => undefined} />
    );

    console.log('XX', wrapper.debug());
    console.log('XY', wrapper.find('Editor'));
    expect(wrapper.find('BaseEditor')).toHaveLength(1);
  });

  it('should override default options with prop options', () => {
    const wrapper = mount(
      <Editor
        code="<div />"
        handleChange={() => undefined}
        options={{ lineNumbers: true }}
      />
    );

    expect(wrapper.props().options.lineNumbers).toBeTruthy();
  });

  it('should merge any valid CodeMirror option with defaults', () => {
    const wrapper = mount(
      <Editor
        code="<div />"
        handleChange={() => undefined}
        options={{ smartIndent: false }}
      />
    );

    expect(wrapper.props().options).toMatchObject({ smartIndent: false });
  });

  it('should import theme css if a theme was passed', () => {
    // const wrapper = mount(
    //   <Editor
    //     code="<div />"
    //     handleChange={() => undefined}
    //     options={{ theme: 'material' }}
    //   />
    // );

    const wrapper = shallow(
      <Editor
        code="<div />"
        handleChange={() => undefined}
        options={{ theme: 'material' }}
      />
    ).get(0);

    // const instance = wrapper.instance();
    jest.spyOn((wrapper.type as any).prototype, 'importThemeCss');
    // wrapper.instance().forceUpdate();
    mount(wrapper);
    expect((wrapper.type as any).prototype.importThemeCss).toHaveBeenCalled();
  });

  it('should not import theme css if no theme was passed', () => {
    const wrapper = shallow(
      <Editor code="<div />" handleChange={() => undefined} />
    ).get(0);

    jest.spyOn((wrapper.type as any).prototype, 'importThemeCss');
    mount(wrapper);
    // console.log('XX', Editor.prototype);
    // wrapper.instance().forceUpdate();
    expect(
      (wrapper.type as any).prototype.importThemeCss
    ).not.toHaveBeenCalled();
  });
});
