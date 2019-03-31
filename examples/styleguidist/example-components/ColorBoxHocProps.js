import { withStyles, ColorBox } from '@doc-kits/react';

const styles = props => ({
  wrapper: {
    backgroundColor: props.mode === 'dark' ? 'gray' : 'white',
    color: props.mode === 'dark' ? 'white' : 'black',
  },
});

export default withStyles(styles)(ColorBox);
