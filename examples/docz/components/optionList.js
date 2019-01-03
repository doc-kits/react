import { withStyles, OptionList } from '@shockits/doc-ui';

export default withStyles({
  // Overriding 'wrapper' and 'title' styles
  wrapper: {
    lineHeight: 1.68,
  },
  title: {
    color: 'black',
    fontSize: ['0.875rem', '1rem', '1.5rem'],
  },
  // Extending code styles. boxShadow is not a default.
  code: {
    boxShadow: '1px 1px 2px 0px rgba(0,0,0,0.75)',
  },
})(OptionList);
