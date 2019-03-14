import styled from '@emotion/styled';
import React, { Component, Fragment } from 'react';
import copy from 'copy-text-to-clipboard';
import { FiCopy, FiCheck } from 'react-icons/fi';
import { ICON_SIZE } from '../../styles';

interface Props {
  code: string;
  show: boolean;
  inProgress: boolean;
  toggle: (toggle: string, options?: { withTimeout?: boolean }) => void;
}

const Action = styled.button`
  ${p => p.theme.mq(p.theme.action)};
`;

const ActionText = styled.div`
  ${p => p.theme.mq(p.theme.actionText)};
`;

class Copy extends Component<Props, {}> {
  public render() {
    const { inProgress, show } = this.props;

    return (
      <Fragment>
        {show && (
          <Action onClick={this.copyContent} disabled={inProgress}>
            {inProgress ? <FiCheck /> : <FiCopy size={ICON_SIZE} />}
            <ActionText>Copy</ActionText>
          </Action>
        )}
      </Fragment>
    );
  }

  private copyContent = () => {
    const { toggle, code } = this.props;

    copy(code);
    toggle('copying', { withTimeout: true });
  };
}

export default Copy;
