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

export const PageWrap = styled.div`
  margin-top: 48px;

  @media (max-width: 479.98px) {
    padding: ${p => p.theme.space[3]}px;
  }

  @media (min-width: 480px) {
    padding: ${p => p.theme.space[4]}px;
  }
`;

export const Container = styled.div`
margin-top: ${p => p.theme.space[4]}px;

  @media (min-width: 768px) {
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
