import styled from '@emotion/styled';
import React, { Component, ReactNode } from 'react';
import posed from 'react-pose';
import { ThemeProvider } from 'emotion-theming';
import { LiveProvider, LiveError, LivePreview } from 'react-live';
import Resizable from 're-resizable';
import reactElementToJSXString from 'react-element-to-jsx-string';
import merge from 'deepmerge';
import Editor from './components/Editor';
import Handle from './components/Handle';
import { Copy, Code, Refresh, Source } from './components/Actions';
import constructTheme from '../toolkit/constructTheme';
import defaultStyles from './styles';

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
  readonly withStyles?: object;
  styles?: object;
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

interface WrapperProps {
  code: string;
  mode: string;
  scope?: object;
}

interface PreviewProps {
  align: string;
}

const Wrapper = styled(LiveProvider)<WrapperProps>`
  ${p => p.theme.mq(p.theme.wrapper)};

  border: ${p => p.mode === 'containerOnly' && 'none'};
  width: ${p => p.mode === 'containerOnly' && '100%'};
`;

const StyledPreview = styled(LivePreview)<PreviewProps>`
  ${p => p.theme.mq(p.theme.preview)};

  justify-content: ${p => p.align};
`;

const StyledError = styled(LiveError)`
  ${p => p.theme.mq(p.theme.error)};
`;

const Actions = styled.div`
  ${p => p.theme.mq(p.theme.actions)};
`;

const EditorWrapper = posed.div({
  closed: { height: 0, overflow: 'hidden' },
  open: { height: 'auto' },
});

class Playground extends Component<Props, State> {
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

  public state = {
    code: reactElementToJSXString(this.props.children, {
      useFragmentShortSyntax: false,
      showDefaultProps: false,
    }),
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
    const toggle = this.toggle;
    const { code, toggles } = this.state;
    const {
      components,
      mode,
      align,
      actions,
      editor,
      source,
      withStyles,
      styles,
      ...restOfProps
    } = merge(Playground.defaultProps, this.props);

    const disableActions = mode !== 'full' || (!actions.code && !source);
    const componentTheme = () =>
      constructTheme(defaultStyles, withStyles, styles);

    return (
      <ThemeProvider theme={componentTheme}>
        <Resizable {...this.resizableProps}>
          <Wrapper mode={mode} code={code} scope={components} {...restOfProps}>
            <StyledPreview align={align} />

            {!disableActions && (
              <Actions>
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
                  <Refresh inProgress={toggles.refreshing} toggle={toggle} />
                )}

                {source && actions.source && <Source link={source} />}
              </Actions>
            )}

            <StyledError />
            <EditorWrapper pose={toggles.showing ? 'open' : 'closed'}>
              <Editor
                code={code}
                options={editor}
                handleChange={this.handleChange}
              />
            </EditorWrapper>
          </Wrapper>
        </Resizable>
      </ThemeProvider>
    );
  }

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

export default Playground;
