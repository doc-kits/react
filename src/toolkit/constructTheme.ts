import merge from 'deepmerge';
import defaultTheme from '../toolkit/theme';

const constructTheme = (
  defaultStyles: object,
  withStyles: object = {},
  styles: object = {}
): object => {
  return merge.all([
    { ...defaultTheme },
    { ...defaultStyles },
    { ...withStyles },
    { ...styles },
  ]);
};

export default constructTheme;
