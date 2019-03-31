import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import merge from 'deepmerge';
import facepaint from 'facepaint';
import { breakpoints } from '../toolkit/theme';

interface Props {
  styles: object;
  classes: object;
}

const withStyles = (styles: any) => (WrappedComponent: any): any => {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const WithStyles = React.forwardRef((props: Props, ref) => {
    const mq = facepaint(breakpoints);
    const derivedStyles = typeof styles === 'function' ? styles(props) : styles;
    const classes = merge.all([
      WrappedComponent.styles,
      derivedStyles,
      { ...props.classes },
      { ...props.styles },
    ]);

    return <WrappedComponent {...props} ref={ref} classes={classes} mq={mq} />;
  });

  (WithStyles as any).displayName = `WithStyles(${displayName})`;
  return hoistNonReactStatic(WithStyles, WrappedComponent);
};

export default withStyles;
