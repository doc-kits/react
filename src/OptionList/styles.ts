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
    color: ui.text.color,
    fontSize: 'inherit',
    borderBottom: `1px solid ${colors.grayScale['200']}`,
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
    color: colors.grayScale['300'],
    fontSize: '1em',
  },
  required: {
    color: colors.primary.orange,
    fontSize: '0.857em',
    border: `1px solid ${colors.primary.orange}`,
    borderRadius: '10px',
    padding: '0 0.571em',
    textTransform: 'uppercase',
  },
  type: {
    color: colors.grayScale['300'],
    fontSize: 'inherit',
  },
  description: {
    color: 'inherit',
    fontSize: 'inherit',
    margin: '1em 0 0 0',
  },
  values: {
    color: colors.grayScale['300'],
  },
  code: {
    backgroundColor: codeBg,
    borderRadius: '3px',
    border: `1px solid ${darken(0.05, codeBg)}`,
    color: colors.primary.red,
    padding: '0 0.4em',
    fontFamily: 'inherit',
  },
};

export default styles;
