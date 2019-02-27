import styled from '@emotion/styled';
import React from 'react';
import { MdApps } from 'react-icons/md';

const StyledHandle = styled.div`
  ${p => p.theme.mq(p.theme.handle)};
`;

const Icon = styled(MdApps)`
  ${p => p.theme.mq(p.theme.handleIcon)};
`;

const Handle = () => (
  <StyledHandle>
    <Icon />
    <Icon />
  </StyledHandle>
);

export default Handle;
