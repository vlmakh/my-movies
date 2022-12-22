import styled from '@emotion/styled';
import {
  space,
  layout,
  border,
  position,
  typography,
  background,
  flexbox,
  shadow,
} from 'styled-system';

export const Box = styled('div')(
  space,
  layout,
  border,
  position,
  typography,
  background,
  flexbox,
  shadow
);

export const Container = styled.div`
  @media (min-width: 480px) {
    display: flex;
    gap: ${p => p.theme.space[4]}px;
  }
`;

export const BtnContainer = styled.div`
  margin-top: ${p => p.theme.space[4]}px;
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[2]}px;
`;
