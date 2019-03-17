import { darken } from 'polished';
import { base, palette, ui } from '../toolkit/theme';

const codeBg = '#fafcfc';

const styles = {
  wrapper: {
    ...base,
    borderBottom: `1px solid ${palette.grayScale['200']}`,
    color: ui.text.color,
    fontSize: ['0.875rem', '0.875rem', '1rem'],
    lineHeight: '1.5',
  },
  title: {
    borderBottom: `1px solid ${palette.grayScale['200']}`,
    color: ui.text.color,
    fontSize: 'inherit',
    paddingBottom: '0.313em',
    textTransform: 'uppercase',
  },
  option: {
    borderTop: `1px solid ${palette.grayScale['100']}`,
    padding: '1.143em 0',
  },
  key: {
    color: '#334049',
    fontSize: 'inherit',
    fontWeight: '600',
  },
  optional: {
    color: palette.grayScale['400'],
  },
  required: {
    border: `1px solid ${palette.primary.orange}`,
    borderRadius: '10px',
    color: palette.primary.orange,
    fontSize: '0.875em',
    padding: '0 0.571em',
    textTransform: 'uppercase',
  },
  type: {
    color: palette.grayScale['400'],
    fontSize: 'inherit',
  },
  description: {
    color: 'inherit',
    fontSize: 'inherit',
    margin: '1em 0 0 0',
  },
  values: {
    color: palette.grayScale['400'],
  },
  code: {
    backgroundColor: codeBg,
    border: `1px solid ${darken(0.05, codeBg)}`,
    borderRadius: '3px',
    color: palette.primary.red,
    fontFamily: 'inherit',
    padding: '0 0.4em',
  },
};

export default styles;
