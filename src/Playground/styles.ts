import { keyframes } from '@emotion/core';
import { darken } from 'polished';
import base, { colors } from '../toolkit/theme';

const HANDLE_SIZE = '18px';
const ICON_SIZE = '1.15em';

const palette = {
  editor: '#fbfcfd',
  actions: '#f7fbfa',
  handle: '#f9f7f3',
  icon: '#a7b0ca',
  error: {
    background: '#f8d7da',
    text: '#721c24',
  },
};

const fadeIn = keyframes`
  0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

const styles = (props: any) => {
  const { options = {} } = props;

  return {
    root: { ...base },
    wrapper: {
      borderRadius: '3px',
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
      border:
        props.mode === 'containerOnly'
          ? 'none'
          : `1px solid ${colors.grayScale['200']}`,
      width:
        props.mode === 'containerOnly' ? '100%' : `calc(100% - ${HANDLE_SIZE})`,
    },
    preview: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: props.align || 'flex-start',
      padding: '0.75em',
      '& > *': {
        margin: '0.5em',
      },
    },
    error: {
      backgroundColor: palette.error.background,
      color: palette.error.text,
      fontSize: '0.875rem',
      padding: '0.25em 1em',
    },
    editor: {
      backgroundColor: palette.editor,
      borderTop: `1px solid ${colors.grayScale['200']}`,
      '& .CodeMirror': {
        backgroundColor: palette.editor,
        fontFamily: 'monospace',
        fontSize: '0.875em',
        height: '100%',
      },
      '& .CodeMirror-lines': {
        padding: options.lineNumbers ? '1.5em 0' : '1.5em',
      },
    },
    actions: {
      alignItems: 'center',
      backgroundColor: palette.actions,
      display: 'flex',
      justifyContent: 'flex-end',
      paddingTop: '0.925em',
      paddingBottom: '0.725em',
    },
    action: {
      alignItems: 'center',
      animation: `${fadeIn} 0.25s`,
      appearance: 'none',
      background: 'none',
      border: 'none',
      color: palette.icon,
      display: 'flex',
      fontSize: ['0.625rem', '0.625rem', '0.688rem', '0.688rem', '0.750rem'],
      lineHeight: 1,
      marginRight: '1.75em',
      opacity: 1,
      outline: 'none',
      padding: 0,
      '&:hover': {
        color: `${darken(0.1, palette.icon)}`,
        cursor: 'pointer',
      },
      '& a': {
        alignItems: 'center',
        color: 'inherit',
        display: 'flex',
        textDecoration: 'none',
      },
    },
    actionText: {
      marginLeft: '0.35em',
      textTransform: 'uppercase',
    },
    handle: {
      alignItems: 'center',
      backgroundColor: palette.handle,
      borderBottomRightRadius: '3px',
      borderTopRightRadius: '3px',
      border: `1px solid ${colors.grayScale['200']}`,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
      width: `${HANDLE_SIZE}`,
    },
    handleIcon: {
      opacity: '0.15',
      '&:last-child': {
        marginTop: '-0.250em',
      },
    },
  };
};

export default styles;
export { ICON_SIZE };
