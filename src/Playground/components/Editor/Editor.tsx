import React, { Component } from 'react';
import { ClassNames } from '@emotion/core';
import { EditorChange } from 'codemirror';
import { Controlled as BaseEditor, IInstance } from 'react-codemirror2';
import warning from 'warning';
import withStyles from '../../../toolkit/withStyles';
import styles from '../../styles';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/jsx/jsx.js';
import 'codemirror/lib/codemirror.css';

interface Props {
  handleChange: (code: string) => void;
  code: string;
  options?: object;
  readonly classes: {
    [propName: string]: object;
  };
  mq: (styles: object) => any;
}

interface State {
  code: string;
}

class Editor extends Component<Props, State> {
  public static readonly styles = styles;
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
    const { classes, mq } = this.props;
    const { code } = this.state;

    return (
      <ClassNames>
        {({ css }) => {
          const c = (style: object) => css(mq(style));

          return (
            <BaseEditor
              value={code}
              className={c(classes.editor)}
              onBeforeChange={this.handleChange}
              options={this.options}
            />
          );
        }}
      </ClassNames>
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

export default withStyles(styles)(Editor);
