import { withStyles, ColorBox } from '@doc-kits/react';

export default withStyles({
  // Overriding 'wrapper' and 'name' styles
  wrapper: {
    color: 'black',
  },
  name: {
    fontWeight: '400',
    // Extending 'name' styles with 'text-transform'
    // 'textTransform' is not in default styles
    textTransform: 'lowercase',
  },
})(ColorBox);
