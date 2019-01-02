import merge from 'deepmerge';
import defaultTheme from '../toolkit/theme';

const constructTheme = (
  defaultStyles: object,
  withStyles: object = {},
  localStyles: object = {}
): object => {
  return merge.all([
    { ...defaultTheme },
    { ...defaultStyles },
    { ...withStyles },
    { ...localStyles },
  ]);
};

export default constructTheme;
