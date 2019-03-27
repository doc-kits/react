import { stripUnit } from 'polished';
import React, { Component } from 'react';
import { ClassNames } from '@emotion/core';
import { FiCode } from 'react-icons/fi';
import withStyles from '../../../toolkit/withStyles';
import styles, { ICON_SIZE } from '../../styles';

interface Props {
  readonly classes: {
    [propName: string]: object;
  };
  mq: (styles: object) => any;
  onClick: () => void;
}

class Code extends Component<Props, {}> {
  public static readonly styles = styles;

  public render() {
    const { classes, mq, onClick } = this.props;
    const iconSize = (stripUnit(ICON_SIZE) as any) * 1.17;

    return (
      <ClassNames>
        {({ css }) => {
          const c = (style: object) => css(mq(style));

          return (
            <button className={c(classes.action)} onClick={onClick}>
              <FiCode size={`${iconSize}em`} />
              <div className={c(classes.actionText)}>Code</div>
            </button>
          );
        }}
      </ClassNames>
    );
  }
}

export default withStyles(styles)(Code);
