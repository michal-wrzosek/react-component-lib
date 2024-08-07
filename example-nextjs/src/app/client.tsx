'use client';

import { TestComponent } from '@/reactComponentLib';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 10px;
  background-color: blue;
  color: white;
`;

export const Client = () => (
  <div>
    <TestComponent text="Styled Component from React library" />
    <StyledDiv>Example App styled component</StyledDiv>
  </div>
);
