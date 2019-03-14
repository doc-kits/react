import styled from '@emotion/styled';
import React, { Component } from 'react';
import { FiCode } from 'react-icons/fi';

interface Props {
  onClick: () => void;
}

const Action = styled.button`
  ${p => p.theme.mq(p.theme.action)};
`;

const ActionText = styled.div`
  ${p => p.theme.mq(p.theme.actionText)};
`;

class Code extends Component<Props, {}> {
  public render() {
    const { onClick } = this.props;

    return (
      <Action onClick={onClick}>
        <FiCode size="1.15em" />
        <ActionText>Code</ActionText>
      </Action>
    );
  }
}

export default Code;
