import { withStyles, OptionList } from '@doc-kits/react';

export default withStyles({
  // Overriding 'wrapper' and 'title' styles
  wrapper: {
    lineHeight: 1.68,
  },
  title: {
    color: 'black',
    fontSize: ['0.875rem', '1rem', '1.5rem'],
  },
  // Extending 'type' styles with 'text-decoration'
  // 'textDecoration' is not in default styles
  type: {
    textDecoration: 'underline',
  },
})(OptionList);