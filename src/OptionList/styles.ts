import { darken } from 'polished';

const styles = {
  wrapper: {
    borderBottom: '1px solid #cbd8de',
    color: '#4a6271',
    fontSize: ['0.875rem', '1rem'],
    lineHeight: '1.5',
  },
  title: {
    color: '#4a6271',
    fontSize: 'inherit',
    borderBottom: '1px solid #cbd8de',
    paddingBottom: '0.313em',
    textTransform: 'uppercase',
  },
  option: {
    borderTop: '1px solid #edf3f3',
    padding: '1.143em 0',
  },
  key: {
    color: '#334049',
    fontSize: 'inherit',
    fontWeight: '500',
  },
  optional: {
    color: '#939da3',
    fontSize: '1em',
  },
  required: {
    color: '#ffae54',
    fontSize: '0.857em',
    border: '1px solid #ffae54',
    borderRadius: '10px',
    padding: '0 0.571em',
    textTransform: 'uppercase',
  },
  type: {
    color: '#939da3',
    fontSize: 'inherit',
  },
  description: {
    color: 'inherit',
    fontSize: 'inherit',
    margin: '1em 0 0 0',
  },
  values: {
    color: '#939da3',
  },
  code: {
    backgroundColor: '#fafcfc',
    borderRadius: '3px',
    border: `1px solid ${darken(0.05, '#fafcfc')}`,
    color: '#b93d6a',
    padding: '0 0.4em',
    fontFamily: 'inherit',
  },
};

export default styles;
