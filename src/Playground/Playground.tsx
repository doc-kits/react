import React, { Component, ReactNode } from 'react';
import posed from 'react-pose';
import { LiveProvider, LiveError, LivePreview } from 'react-live';
import { ClassNames } from '@emotion/core';
// import { transform } from '@babel/core';
// @ts-ignore
import * as Babel from '@babel/standalone';
import Resizable from 're-resizable';
// import reactElementToJSXString from 'react-element-to-jsx-string';
import merge from 'deepmerge';
import Editor from './components/Editor';
import Handle from './components/Handle';
import { Copy, Code, Refresh, Source } from './components/Actions';
import withStyles from '../toolkit/withStyles';
import styles from './styles';
// @ts-ignore

interface Props {
  children: ReactNode;
  components?: object;
  mode?: string;
  actions?: {
    copy?: boolean;
    code?: boolean;
    refresh?: boolean;
    source?: boolean;
  };
  source?: string;
  editor?: object;
  readonly classes: {
    [propName: string]: object;
  };
  mq: (styles: object) => any;
  [propName: string]: any;
}

interface State {
  code: string;
  toggles: {
    showing: boolean;
    copying: boolean;
    refreshing: boolean;
  };
}

interface ToggleOptions {
  withTimeout: boolean;
}

const EditorWrapper = posed.div({
  closed: { height: 0, overflow: 'hidden' },
  open: { height: 'auto' },
});

class Playground extends Component<Props, State> {
  public static readonly styles = styles;
  private static defaultProps = {
    mode: 'full',
    align: 'flex-start',
    actions: {
      copy: true,
      code: true,
      refresh: true,
      source: true,
    },
  };

  public raw = require(`!raw-loader!./raw-test.js`);

  public state = {
    code: this.raw.default,
    // code: reactElementToJSXString(this.props.children, {
    //   useFragmentShortSyntax: false,
    //   showDefaultProps: false,
    // }),
    toggles: {
      showing: false,
      refreshing: false,
      copying: false,
    },
  };

  private resizableProps = {
    minWidth: 360,
    maxWidth: '100%',
    enable: {
      bottom: false,
      bottomLeft: false,
      bottomRight: false,
      left: false,
      right: this.props.mode !== 'containerOnly' && true,
      top: false,
      topLeft: false,
      topRight: false,
    },
    handleComponent: {
      right: () => this.props.mode !== 'containerOnly' && <Handle />,
    },
    handleStyles: {
      right: {
        right: 8,
      },
    },
  };

  public render() {
    // console.log('RAW', raw);
    const toggle = this.toggle;
    const { code, toggles } = this.state;
    const {
      components,
      mode,
      align,
      actions,
      editor,
      source,
      classes,
      mq,
      ...restOfProps
    } = merge(Playground.defaultProps, this.props);
    const disableActions = mode !== 'full' || (!actions.code && !source);

    return (
      <ClassNames>
        {({ css }) => {
          const c = (style: object) => css(mq(style));

          return (
            <div className={c(classes.root)} {...restOfProps}>
              <Resizable {...this.resizableProps}>
                <LiveProvider
                  className={c(classes.wrapper)}
                  mode={mode}
                  code={code}
                  scope={components}
                  // noInline={true}
                  // transformCode={this.transformCode}
                  {...restOfProps}
                >
                  <LivePreview className={c(classes.preview)} />

                  {!disableActions && (
                    <div className={c(classes.actions)}>
                      {actions.copy && (
                        <Copy
                          code={code}
                          show={toggles.showing}
                          inProgress={toggles.copying}
                          toggle={toggle}
                        />
                      )}

                      {actions.code && <Code onClick={this.toggleCode} />}

                      {actions.refresh && (
                        <Refresh
                          inProgress={toggles.refreshing}
                          toggle={toggle}
                        />
                      )}

                      {source && actions.source && <Source link={source} />}
                    </div>
                  )}

                  <LiveError className={c(classes.error)} />
                  <EditorWrapper pose={toggles.showing ? 'open' : 'closed'}>
                    <Editor
                      code={code}
                      options={editor}
                      handleChange={this.handleChange}
                    />
                  </EditorWrapper>
                </LiveProvider>
              </Resizable>
            </div>
          );
        }}
      </ClassNames>
    );
  }

  // private transformCode = (code: any) => {
  //   const output = Babel.transform(code, {
  //     presets: ['es2015', 'react'],
  //   }).code;
  //   console.log(output);
  //   return output;
  // };

  private handleChange = (code: string) => {
    this.setState({ code });
  };

  private toggleCode = () => {
    this.toggle('showing');
  };

  private toggle = (
    toggle: string,
    options: ToggleOptions = { withTimeout: false }
  ) => {
    const { toggles } = this.state;

    this.setState(
      prevState => ({
        toggles: { ...toggles, [toggle]: !prevState.toggles[toggle] },
      }),
      () => {
        if (options.withTimeout) {
          setTimeout(() => {
            this.setState(prevState => ({
              toggles: {
                ...prevState.toggles,
                [toggle]: !prevState.toggles[toggle],
              },
            }));
          }, 1000);
        }
      }
    );
  };
}

export default withStyles(styles)(Playground);
