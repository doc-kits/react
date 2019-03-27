/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Component } from 'react';
import { FiRefreshCw } from 'react-icons/fi';
import { getRgb, hexToRgb, rgbToHsl } from './utils/color-conversions';
import withStyles from '../toolkit/withStyles';
import defaultStyles from './styles';

interface Props {
  name: string;
  hex: string;
  readonly classes: {
    [propName: string]: object;
  };
  readonly mq: (styles: object) => any;
  readonly styles: object;
  [propName: string]: any;
}

interface State {
  clicks: number;
  value: string;
}

class ColorBox extends Component<Props, State> {
  public static defaultProps = {
    hex: '',
    name: '',
  };

  public static isValidHex = /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i;
  public static readonly styles = defaultStyles;

  public readonly state = {
    clicks: 1,
    value: this.props.hex,
  };

  public componentDidUpdate(prevProps: Props) {
    const { hex } = this.props;

    if (hex !== prevProps.hex && ColorBox.isValidHex.test(hex)) {
      this.setState({ value: hex, clicks: 1 });
    }
  }

  public render() {
    const { name, hex, classes, mq, styles, ...restOfProps } = this.props;
    const { value } = this.state;

    const rootClass = css(mq(classes.root));
    const wrapperClass = css(mq(classes.wrapper));
    const triangleClass = css(mq(classes.triangle));
    const textClass = css(mq(classes.text));
    const iconClass = css(mq(classes.icon));
    const colorValueClass = css(mq(classes.colorValue));
    const nameClass = css(mq(classes.name));

    return (
      <div css={rootClass} {...restOfProps}>
        <div css={wrapperClass}>
          <div css={triangleClass} />
          <div css={textClass} onClick={this.cycleValues}>
            <div css={iconClass}>
              <FiRefreshCw />
            </div>
            <div css={colorValueClass}>{value}</div>
            <div css={nameClass}>{name}</div>
          </div>
        </div>
      </div>
    );
  }

  private cycleValues = () => {
    const { hex } = this.props;
    const { clicks } = this.state;
    const clickCycle = clicks % 3;
    const [r, g, b] = getRgb(hex);

    this.setState(
      {
        clicks: clicks + 1,
      },
      () => {
        switch (clickCycle) {
          case 1:
            return this.setState({
              value: hexToRgb(hex),
            });
          case 2:
            return this.setState({
              value: rgbToHsl(r, g, b),
            });
          default:
            return this.setState({
              value: this.props.hex,
            });
        }
      }
    );
  };
}

export default withStyles(defaultStyles)(ColorBox);
