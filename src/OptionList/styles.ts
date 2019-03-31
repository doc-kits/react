import { darken } from 'polished';
import base, { colors } from '../toolkit/theme';

const palette = {
  codeBg: '#fafcfc',
};

const styles = (props: any) => ({
  root: { ...base },
  wrapper: {
    borderBottom: `1px solid ${colors.grayScale['200']}`,
    color: colors.gray,
    fontSize: ['0.875rem', '0.875rem', '1rem'],
    '& a': {
      color: colors.blue,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
      '&:active': {
        color: colors.blue,
      },
    },
  },
  title: {
    borderBottom: `1px solid ${colors.grayScale['200']}`,
    color: colors.gray,
    fontSize: 'inherit',
    paddingBottom: '0.313em',
    textTransform: 'uppercase',
  },
  option: {
    borderTop: `1px solid ${colors.grayScale['100']}`,
    padding: '1.143em 0',
  },
  info: {
    alignItems: 'baseline',
    display: 'flex',
    '& div': {
      marginRight: '0.357em',
      '& last-of-type': {
        marginRight: 0,
      },
    },
  },
  key: {
    color: '#334049',
    fontSize: 'inherit',
    fontWeight: '600',
  },
  optional: {
    border: 'none',
    color: colors.grayScale['400'],
    fontSize: '1em',
    padding: 0,
    textTransform: 'none',
  },
  required: {
    border: `1px solid ${colors.orange}`,
    borderRadius: '10px',
    color: colors.orange,
    fontSize: '0.813em',
    padding: '0 0.571em',
    textTransform: 'uppercase',
  },
  type: {
    color: colors.grayScale['400'],
    fontSize: 'inherit',
  },
  description: {
    color: 'inherit',
    fontSize: 'inherit',
    margin: '1em 0 0 0',
  },
  values: {
    color: colors.grayScale['400'],
    'span:not(:first-of-type)::before': {
      content: '", "',
    },
    'span:nth-last-of-type(2):not(:first-of-type)::after': {
      content: '","',
    },
    'span:last-child:not(:only-of-type)::before': {
      content: '" or "',
      color: colors.gray,
    },
    'div:nth-of-type(1)': {
      marginBottom: '0.25em',
    },
  },
  code: {
    backgroundColor: palette.codeBg,
    border: `1px solid ${darken(0.05, palette.codeBg)}`,
    borderRadius: '3px',
    color: colors.red,
    fontFamily: 'inherit',
    padding: '0 0.4em',
  },
});

export default styles;
