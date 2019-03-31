import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import withStyles from '../withStyles';

describe('withStyles', () => {
  it('should render a wrapped component from the HOC', () => {
    interface Props {
      classes: {
        wrapper: object;
      };
      mq: (styles: object) => any;
    }

    const styles = { root: { color: 'blue' } };

    class NewComponent extends Component<Props> {
      public static readonly styles = styles;
      public render() {
        return <div style={this.props.classes.wrapper} />;
      }
    }

    const ComponentWithStyles = withStyles(styles)(NewComponent);
    const wrapper = shallow(<ComponentWithStyles />);

    expect(wrapper.props().classes.root).toMatchObject({ color: 'blue' });
  });

  it('should hoist non-react static class properties', () => {
    class NewComponent extends Component {
      public static displayName = 'Foo';
      public static someSpecialStatic = 'bar';
    }

    const ComponentWithStyles = withStyles({})(NewComponent);

    expect(ComponentWithStyles.displayName).toBe('WithStyles(Foo)');
    expect(ComponentWithStyles.someSpecialStatic).toBe(
      NewComponent.someSpecialStatic
    );
  });

  it('should forward ref from original component onto WrappedComponent', () => {
    class NewComponent extends Component {
      public static readonly styles = {};
      public render() {
        return <div>Test</div>;
      }
    }

    const ComponentWithStyles = withStyles({})(NewComponent);
    const ref = React.createRef();

    renderer.create(<ComponentWithStyles ref={ref} />);

    expect(ref.current).toBeInstanceOf(NewComponent);
  });
});
