import React, { Component } from 'react';
import { ClassNames } from '@emotion/core';
import { MdApps } from 'react-icons/md';
import withStyles from '../../../toolkit/withStyles';
import styles from '../../styles';

interface Props {
  readonly classes: {
    [propName: string]: object;
  };
  mq: (styles: object) => any;
}

class Handle extends Component<Props, {}> {
  public static readonly styles = styles;

  public render() {
    const { classes, mq } = this.props;

    return (
      <ClassNames>
        {({ css }) => {
          const c = (style: object) => css(mq(style));

          return (
            <div className={c(classes.handle)}>
              <MdApps className={c(classes.handleIcon)} />
              <MdApps className={c(classes.handleIcon)} />
            </div>
          );
        }}
      </ClassNames>
    );
  }
}

export default withStyles(styles)(Handle);
