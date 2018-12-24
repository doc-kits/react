import hoistNonReactStatic from 'hoist-non-react-statics';
import * as React from 'react';

const withStyles = (styles: object) => (WrappedComponent: any): any => {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  class WithStyles extends React.Component {
    public render() {
      return <WrappedComponent {...this.props} wrappedStyles={styles} />;
    }
  }

  (WithStyles as any).displayName = `WithStyles(${displayName})`;
  hoistNonReactStatic(WithStyles, WrappedComponent);

  return WithStyles;
};

export default withStyles;
