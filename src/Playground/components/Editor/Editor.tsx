import styled from '@emotion/styled';
import React, { Component } from 'react';
import { EditorChange } from 'codemirror';
import { Controlled as BaseEditor, IInstance } from 'react-codemirror2';
import warning from 'warning';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/jsx/jsx.js';
import 'codemirror/lib/codemirror.css';

interface Props {
  handleChange: (code: string) => void;
  code: string;
  options?: object;
}

interface State {
  code: string;
}

const CodeMirror = styled(BaseEditor)`
  ${p => p.theme.mq(p.theme.editor)};

  & .CodeMirror-lines {
    padding: ${p => p.options && !p.options.lineNumbers && '1.5em'};
  }
`;

class Editor extends Component<Props, State> {
  public state = { code: this.props.code };

  private options = Object.assign(
    {},
    {
      lineNumbers: false,
      lineWrapping: true,
      mode: 'jsx',
      scrollbarStyle: null,
      tabSize: 2,
      viewportMargin: Infinity,
    },
    this.props.options
  );

  public componentDidMount() {
    const theme = (this.options as any).theme;

    if (theme) {
      this.importThemeCss(theme);
    }
  }

  public render() {
    const { code } = this.state;

    return (
      <CodeMirror
        value={code}
        onBeforeChange={this.handleChange}
        options={this.options}
      />
    );
  }

  private importThemeCss(theme: string) {
    return import(`codemirror/theme/${theme}.css`)
      .then()
      .catch(error =>
        warning(
          false,
          'The theme you have chosen could not be found by CodeMirror. Please ensure you have passed a valid theme: https://github.com/codemirror/CodeMirror/tree/master/theme'
        )
      );
  }

  private handleChange = (
    editor: IInstance,
    data: EditorChange,
    code: string
  ) => {
    const { handleChange } = this.props;

    handleChange(code);
    this.setState({ code });
  };
}

export default Editor;
