import styled from '@emotion/styled';
import React, { Component } from 'react';
import { FiFileText } from 'react-icons/fi';
import { ICON_SIZE } from '../../styles';

interface Props {
  link?: string;
}

const Action = styled.button`
  ${p => p.theme.mq(p.theme.action)};
`;

const ActionText = styled.div`
  ${p => p.theme.mq(p.theme.actionText)};
`;

class Source extends Component<Props, {}> {
  public render() {
    const { link } = this.props;

    return (
      <Action>
        <a href={link} target="_blank">
          <FiFileText size={ICON_SIZE} />
          <ActionText>Source</ActionText>
        </a>
      </Action>
    );
  }
}

export default Source;
