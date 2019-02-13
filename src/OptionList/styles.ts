import { darken } from 'polished';
import { colors, ui } from '../toolkit/theme';

const codeBg = '#fafcfc';

const styles = {
  wrapper: {
    borderBottom: `1px solid ${colors.grayScale['200']}`,
    color: ui.text.color,
    fontSize: ['0.875rem', '1rem'],
    lineHeight: '1.5',
  },
  title: {
    borderBottom: `1px solid ${colors.grayScale['200']}`,
    color: ui.text.color,
    fontSize: 'inherit',
    paddingBottom: '0.313em',
    textTransform: 'uppercase',
  },
  option: {
    borderTop: `1px solid ${colors.grayScale['100']}`,
    padding: '1.143em 0',
  },
  key: {
    color: '#334049',
    fontSize: 'inherit',
    fontWeight: '600',
  },
  optional: {
    color: colors.grayScale['400'],
    fontSize: '1rem',
  },
  required: {
    border: `1px solid ${colors.primary.orange}`,
    borderRadius: '10px',
    color: colors.primary.orange,
    fontSize: '0.857rem',
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
  },
  code: {
    backgroundColor: codeBg,
    border: `1px solid ${darken(0.05, codeBg)}`,
    borderRadius: '3px',
    color: colors.primary.red,
    fontFamily: 'inherit',
    padding: '0 0.4em',
  },
};

export default styles;
