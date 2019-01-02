import hoistNonReactStatic from 'hoist-non-react-statics';
import React from 'react';

const withStyles = (styles: object) => (WrappedComponent: any): any => {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const WithStyles = React.forwardRef((props, ref) => {
    return <WrappedComponent {...props} ref={ref} withStyles={styles} />;
  });

  (WithStyles as any).displayName = `WithStyles(${displayName})`;
  return hoistNonReactStatic(WithStyles, WrappedComponent);
};

export default withStyles;
