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
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

export const PageWrap = styled.div`
  margin: 48px auto 0;

  @media (max-width: 479.98px) {
    padding: ${p => p.theme.space[3]}px;
  }

  @media (min-width: 480px) {
    padding: ${p => p.theme.space[4]}px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

export const Main = styled.div`
  margin-top: ${p => p.theme.space[4]}px;

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

  @media (max-width: 479.98px) {
    justify-content: center;
  }
`;

export const ImgThumb = styled.div`
  width: 200px;
  height: 300px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);

  @media (max-width: 479.98px) {
    margin: 0 auto;
  }

  @media (min-width: 480px) {
    margin: 0;
  }
`;
