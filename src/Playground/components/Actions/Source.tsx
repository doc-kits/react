import React, { Component } from 'react';
import { ClassNames } from '@emotion/core';
import { FiFileText } from 'react-icons/fi';
import withStyles from '../../../toolkit/withStyles';
import styles, { ICON_SIZE } from '../../styles';

interface Props {
  link?: string;
  readonly classes: {
    [propName: string]: object;
  };
  mq: (styles: object) => any;
}

class Source extends Component<Props, {}> {
  public static readonly styles = styles;

  public render() {
    const { link, classes, mq } = this.props;

    return (
      <ClassNames>
        {({ css }) => {
          const c = (style: object) => css(mq(style));

          return (
            <button className={c(classes.action)}>
              <a href={link} target="_blank">
                <FiFileText size={ICON_SIZE} />
                <div className={c(classes.actionText)}>Source</div>
              </a>
            </button>
          );
        }}
      </ClassNames>
    );
  }
}

export default withStyles(styles)(Source);
