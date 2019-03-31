/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Component } from 'react';
import withStyles from '../toolkit/withStyles';
import defaultStyles from './styles';

interface Definition {
  key: string;
  required?: boolean;
  type: string;
  description?: string | Array<string | any>;
  default?: string;
  values?: string[];
}

interface Props {
  tableTitle?: string;
  definitions: Definition[];
  readonly classes: {
    [propName: string]: object;
  };
  readonly mq: (styles: object) => any;
  readonly styles: object;
  [propName: string]: any;
}

class OptionList extends Component<Props, {}> {
  public static defaultProps = {
    tableTitle: 'Options',
    definitions: {
      required: false,
    },
  };

  public static readonly styles = defaultStyles;

  public render() {
    const {
      tableTitle,
      definitions,
      classes,
      mq,
      styles,
      ...restOfProps
    } = this.props;

    const rootClass = css(mq(classes.root));
    const wrapperClass = css(mq(classes.wrapper));
    const titleClass = css(mq(classes.title));
    const optionClass = css(mq(classes.option));
    const infoClass = css(mq(classes.info));
    const keyClass = css(mq(classes.key));
    const typeClass = css(mq(classes.type));
    const descriptionClass = css(mq(classes.description));
    const codeClass = css(mq(classes.code));
    const valuesClass = css(mq(classes.values));

    return (
      <div css={rootClass} {...restOfProps}>
        <div css={wrapperClass}>
          <div css={titleClass}>{tableTitle}</div>

          {definitions.map(argument => {
            const requiredText = argument.required ? 'required' : 'optional';
            const requiredClass = css(mq(classes[requiredText]));

            return (
              <div key={argument.key} css={optionClass}>
                <div css={infoClass}>
                  <div css={keyClass}>{argument.key}</div>
                  <div css={requiredClass}>{requiredText}</div>
                  <div css={typeClass}>{argument.type}</div>
                </div>
                <p css={descriptionClass}>
                  <span>{argument.description} </span>
                  {argument.default && (
                    <span>
                      The default value is{' '}
                      <code css={codeClass}>{argument.default}</code>.
                    </span>
                  )}
                  {argument.values && <span> Possible values are </span>}
                  {argument.values && (
                    <span css={valuesClass}>
                      {argument.values.map((value: string, index: number) => (
                        <span key={index.toString()}>
                          <code css={codeClass}>{value}</code>
                        </span>
                      ))}
                      .
                    </span>
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withStyles(defaultStyles)(OptionList);
