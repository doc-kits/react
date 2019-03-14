import { darken } from 'polished';
import { ui, palette } from '../toolkit/theme';

const styles = {
  wrapper: {
    backgroundColor: `${darken(0.0099, 'white')}`,
    boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
    color: ui.text.color,
    display: 'flex',
    fontSize: '1rem',
    height: ['9.375em', '10.938em', '12.500em'], // 150px, 175px, 200px
    lineHeight: '1.5',
    position: 'relative',
    width: ['9.375em', '10.938em', '12.500em'], // 150px, 175px, 200px
  },
  triangle: {
    borderStyle: 'solid',
    borderWidth: ['0 125px 125px 0', '0 150px 150px 0', '0 170px 170px 0'],
    height: '0',
    position: 'absolute',
    right: '0',
    width: '0',
  },
  text: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '0.5em',
    zIndex: '5',
  },
  icon: {
    color: palette.grayScale['300'],
    '& svg': {
      width: ['0.750em', '0.875em'],
      height: ['0.750em', '0.875em'],
    },
  },
  colorValue: {
    color: palette.grayScale['300'],
    fontSize: ['0.625em', '0.750rem', '0.875rem'],
    marginBottom: '0.857em',
    maxWidth: '11.071em',
    textTransform: 'uppercase',
  },
  name: {
    fontSize: ['0.875rem', '1rem', '1.125rem'],
    fontWeight: '600',
    maxWidth: '9.375em',
  },
};

export default styles;
