import styled from '@emotion/styled';
import { stripUnit } from 'polished';
import React, { Component } from 'react';
import { FiCode } from 'react-icons/fi';
import { ICON_SIZE } from '../../styles';

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
    const iconSize = (stripUnit(ICON_SIZE) as any) * 1.17;

    return (
      <Action onClick={onClick}>
        <FiCode size={`${iconSize}em`} />
        <ActionText>Code</ActionText>
      </Action>
    );
  }
}

export default Code;
