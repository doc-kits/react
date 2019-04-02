import { darken } from 'polished';
import ColorBox from './ColorBox';
import base, { colors } from '../toolkit/theme';

const boxSizes = ['9.375em', '9.375em', '10.938em']; // 150px, 175px

const styles = (props: any) => {
  const hex = ColorBox.isValidHex.test(props.hex) ? props.hex : 'transparent';

  return {
    root: { ...base },
    wrapper: {
      backgroundColor: `${darken(0.0099, 'white')}`,
      boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
      color: colors.gray,
      display: 'flex',
      height: boxSizes,
      position: 'relative',
      width: boxSizes,
    },
    triangle: {
      borderColor: `transparent ${hex} transparent transparent`,
      borderStyle: 'solid',
      borderWidth: ['0 125px 125px 0', '0 125px 125px 0', '0 150px 150px 0'],
      height: '0',
      position: 'absolute',
      right: '0',
      width: '0',
    },
    text: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '0.5em',
      zIndex: '5',
    },
    icon: {
      color: colors.grayScale['200'],
      '& svg': {
        width: ['0.750em', '0.750em', '0.875em'],
        height: ['0.750em', '0.750em', '0.875em'],
      },
      cursor: 'pointer',
    },
    colorValue: {
      color: colors.grayScale['300'],
      cursor: 'pointer',
      fontSize: ['0.625rem', '0.625rem', '0.750rem'],
      marginBottom: '0.857em',
      maxWidth: '11.071em',
      textTransform: 'uppercase',
    },
    name: {
      fontSize: ['0.875rem', '0.875rem', '1rem'],
      fontWeight: '600',
      maxWidth: '9.375em',
    },
  };
};

export default styles;
