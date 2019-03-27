import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import merge from 'deepmerge';
import facepaint from 'facepaint';
import { breakpoints } from '../toolkit/theme';

interface Props {
  styles: object;
}

const withStyles = (styles: any) => (WrappedComponent: any): any => {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const WithStyles = React.forwardRef((props: Props, ref) => {
    const derivedStyles = typeof styles === 'function' ? styles(props) : styles;
    const classes = merge(WrappedComponent.styles, derivedStyles, props.styles);
    const mq = facepaint(breakpoints);

    return <WrappedComponent {...props} ref={ref} classes={classes} mq={mq} />;
  });

  (WithStyles as any).displayName = `WithStyles(${displayName})`;
  return hoistNonReactStatic(WithStyles, WrappedComponent);
};

export default withStyles;
