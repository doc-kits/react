import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import withStyles from '../withStyles';

describe('withStyles', () => {
  it('should render a wrapped component from the HOC', () => {
    interface Props {
      withStyles: {
        color: string;
      };
    }

    class NewComponent extends Component<Props> {
      render() {
        return this.props.withStyles.color;
      }
    }

    const ComponentWithStyles = withStyles({ color: 'blue' })(NewComponent);
    const wrapper = renderer.create(<ComponentWithStyles />).toJSON();

    expect(wrapper).toBe('blue');
  });

  it('should hoist non-react static class properties', () => {
    class NewComponent extends Component {
      public static displayName = 'foo';
      public static someSpecialStatic = 'bar';
    }

    const ComponentWithStyles = withStyles({})(NewComponent);

    expect(ComponentWithStyles.displayName).toBe('WithStyles(foo)');
    expect(ComponentWithStyles.someSpecialStatic).toBe(
      NewComponent.someSpecialStatic
    );
  });

  it('should forward ref from original component onto WrappedComponent', () => {
    class NewComponent extends Component {
      render() {
        return <div>Test</div>;
      }
    }

    const ComponentWithStyles = withStyles({})(NewComponent);
    const ref = React.createRef();

    renderer.create(<ComponentWithStyles ref={ref} />);

    expect(ref.current).toBeInstanceOf(NewComponent);
  });
});
