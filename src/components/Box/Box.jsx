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
  margin: 48px auto 0;

  @media screen and (max-width: 479.98px) {
    padding: ${p => p.theme.space[3]}px;
    width: 100%;
  }

  @media screen and (min-width: 480px) and (max-width: 1279.98px)  {
    padding: ${p => p.theme.space[4]}px;
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    padding: ${p => p.theme.space[4]}px;
    width: 1280px;
  }
`;

export const MainInfo = styled.div`
  margin-top: ${p => p.theme.space[4]}px;

  @media screen and (min-width: 480px) {
    display: flex;
    gap: ${p => p.theme.space[4]}px;
  }
`;

export const BtnContainer = styled.div`
  margin-top: ${p => p.theme.space[4]}px;
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[2]}px;

  @media screen and (max-width: 479.98px) {
    justify-content: center;
  }
`;

export const ImgThumb = styled.div`
  width: 200px;
  height: 300px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);

  @media screen and (max-width: 479.98px) {
    margin: 0 auto;
  }

  @media screen and (min-width: 480px) {
    margin: 0;
  }
`;
