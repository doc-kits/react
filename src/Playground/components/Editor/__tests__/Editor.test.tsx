import React from 'react';
import { shallow } from 'enzyme';
import Editor from '../Editor';

const mock = {
  importThemeCss: jest.spyOn(Editor.prototype as any, 'importThemeCss'),
};

describe('<Editor />', () => {
  it('should render the editor', () => {
    const wrapper = shallow(
      <Editor code="<div />" handleChange={() => undefined} />
    );

    expect(wrapper.find('Styled(BaseEditor)')).toHaveLength(1);
  });

  it('should override default options with prop options', () => {
    const wrapper = shallow(
      <Editor
        code="<div />"
        handleChange={() => undefined}
        options={{ lineNumbers: true }}
      />
    );

    expect(wrapper.props().options.lineNumbers).toBeTruthy();
  });

  it('should merge any valid CodeMirror option with defaults', () => {
    const wrapper = shallow(
      <Editor
        code="<div />"
        handleChange={() => undefined}
        options={{ smartIndent: false }}
      />
    );

    expect(wrapper.props().options).toMatchObject({ smartIndent: false });
  });

  it('should import theme css if a theme was passed', () => {
    const wrapper = shallow(
      <Editor
        code="<div />"
        handleChange={() => undefined}
        options={{ theme: 'material' }}
      />
    );

    wrapper.instance();
    expect(mock.importThemeCss).toHaveBeenCalled();
  });

  it('should not import theme css if no theme was passed', () => {
    const wrapper = shallow(
      <Editor code="<div />" handleChange={() => undefined} />
    );

    wrapper.instance();
    expect(mock.importThemeCss).not.toHaveBeenCalled();
  });
});
