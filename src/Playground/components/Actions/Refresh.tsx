import styled from '@emotion/styled';
import React, { Component } from 'react';
import posed from 'react-pose';
import { FiRefreshCw } from 'react-icons/fi';
import { ICON_SIZE } from '../../styles';

interface Props {
  toggle: (toggle: string, options?: { withTimeout?: boolean }) => void;
  inProgress: boolean;
}

interface State {
  refreshRotation: number;
}

interface PoseProps {
  rotation: number;
}

const Action = styled.button`
  ${p => p.theme.mq(p.theme.action)};
`;

const ActionText = styled.div`
  ${p => p.theme.mq(p.theme.actionText)};
`;

const ActionIcon = posed.div({
  stop: {
    transform: ({ rotation }: PoseProps) => `rotate(${rotation * 360}deg)`,
  },
  start: {
    transform: ({ rotation }: PoseProps) => `rotate(${rotation * 360}deg)`,
  },
});

class Refresh extends Component<Props, State> {
  public state = {
    refreshRotation: 0,
  };

  public render() {
    const { inProgress } = this.props;
    const { refreshRotation } = this.state;

    return (
      <Action onClick={this.refresh} disabled={inProgress}>
        <ActionIcon
          rotation={refreshRotation}
          pose={inProgress ? 'start' : 'stop'}
        >
          <FiRefreshCw size={ICON_SIZE} />
        </ActionIcon>
        <ActionText>Refresh</ActionText>
      </Action>
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

export default Refresh;
