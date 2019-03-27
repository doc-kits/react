import React, { Component, Fragment } from 'react';
import { ClassNames } from '@emotion/core';
import copy from 'copy-text-to-clipboard';
import { FiCopy, FiCheck } from 'react-icons/fi';
import withStyles from '../../../toolkit/withStyles';
import styles, { ICON_SIZE } from '../../styles';

interface Props {
  code: string;
  show: boolean;
  inProgress: boolean;
  toggle: (toggle: string, options?: { withTimeout?: boolean }) => void;
  readonly classes: {
    [propName: string]: object;
  };
  mq: (styles: object) => any;
}

class Copy extends Component<Props, {}> {
  public static readonly styles = styles;

  public render() {
    const { inProgress, show, classes, mq } = this.props;

    return (
      <ClassNames>
        {({ css }) => {
          const c = (style: object) => css(mq(style));

          return (
            <Fragment>
              {show && (
                <button
                  className={c(classes.action)}
                  onClick={this.copyContent}
                  disabled={inProgress}
                >
                  {inProgress ? <FiCheck /> : <FiCopy size={ICON_SIZE} />}
                  <div className={c(classes.actionText)}>Copy</div>
                </button>
              )}
            </Fragment>
          );
        }}
      </ClassNames>
    );
  }

  private copyContent = () => {
    const { toggle, code } = this.props;

    copy(code);
    toggle('copying', { withTimeout: true });
  };
}

export default withStyles(styles)(Copy);
