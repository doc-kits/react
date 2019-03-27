import React, { Component } from 'react';
import { ClassNames } from '@emotion/core';
import posed from 'react-pose';
import { FiRefreshCw } from 'react-icons/fi';
import withStyles from '../../../toolkit/withStyles';
import styles, { ICON_SIZE } from '../../styles';

interface Props {
  toggle: (toggle: string, options?: { withTimeout?: boolean }) => void;
  inProgress: boolean;
  readonly classes: {
    [propName: string]: object;
  };
  mq: (styles: object) => any;
}

interface State {
  refreshRotation: number;
}

interface PoseProps {
  rotation: number;
}

const ActionIcon = posed.div({
  stop: {
    transform: ({ rotation }: PoseProps) => `rotate(${rotation * 360}deg)`,
  },
  start: {
    transform: ({ rotation }: PoseProps) => `rotate(${rotation * 360}deg)`,
  },
});

class Refresh extends Component<Props, State> {
  public static readonly styles = styles;

  public state = {
    refreshRotation: 0,
  };

  public render() {
    const { inProgress, classes, mq } = this.props;
    const { refreshRotation } = this.state;

    return (
      <ClassNames>
        {({ css }) => {
          const c = (style: object) => css(mq(style));

          return (
            <button
              className={c(classes.action)}
              onClick={this.refresh}
              disabled={inProgress}
            >
              <ActionIcon
                rotation={refreshRotation}
                pose={inProgress ? 'start' : 'stop'}
              >
                <FiRefreshCw size={ICON_SIZE} />
              </ActionIcon>
              <div className={c(classes.actionText)}>Refresh</div>
            </button>
          );
        }}
      </ClassNames>
    );
  }

  private refresh = () => {
    const { toggle } = this.props;

    toggle('refreshing', { withTimeout: true });
    this.forceUpdate(); // Applies the refresh
    this.setState(prevState => ({
      refreshRotation: prevState.refreshRotation + 1,
    }));
  };
}

export default withStyles(styles)(Refresh);
