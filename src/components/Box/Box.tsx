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

  @media screen and (max-width: 480px) {
    padding: ${(p: { theme: { space: number[] } }) => p.theme.space[3]}px;
    width: 100%;
  }

  @media screen and (min-width: 481px) and (max-width: 1280px) {
    padding: ${(p: { theme: { space: number[] } }) => p.theme.space[4]}px;
    width: 100%;
  }

  @media screen and (min-width: 1281px) {
    padding: ${(p: { theme: { space: number[] } }) => p.theme.space[4]}px;
    width: 1280px;    
  }
`;

export const BackDrop = styled.div`
  background-repeat: no-repeat;
  background-position: 50% 48px;
  background-size: cover;
  background-attachment: fixed;
  

  @media screen and (min-width: 481px) and (max-width: 780px) {
    background-image: linear-gradient(
      to bottom,
      rgba(59, 67, 81, 0.8),
      ${(p: { theme: { colors: { bcgMain: string; }; }; }) => p.theme.colors.bcgMain} 80%
    ),
    url(${(p: { backdrop: string; }) => `https://image.tmdb.org/t/p/w1280${p.backdrop}`});
  }

  @media screen and (min-width: 781px) and (max-width: 1280px) {
    
    background-image: linear-gradient(
      to bottom,
      rgba(59, 67, 81, 0.8),
      ${(p: { theme: { colors: { bcgMain: string; }; }; }) => p.theme.colors.bcgMain} 80%
    ),
    url(${(p: { backdrop: string; }) => `https://image.tmdb.org/t/p/w1280${p.backdrop}`});
  }

  @media screen and (min-width: 1281px) {
    background-image: linear-gradient(
      to bottom,
      rgba(59, 67, 81, 0.8),
      ${(p: { theme: { colors: { bcgMain: string; }; }; }) => p.theme.colors.bcgMain} 80%
    ),
    url(${(p: { backdrop: string; }) => `https://image.tmdb.org/t/p/original${p.backdrop}`});
  }
`;

export const MainInfo = styled.div`
  margin-top: ${(p: { theme: { space: number[] } }) => p.theme.space[4]}px;

  @media screen and (min-width: 480px) {
    display: flex;
    gap: ${(p: { theme: { space: number[] } }) => p.theme.space[4]}px;
  }
`;

export const BtnContainer = styled.div`
  margin-top: ${(p: { theme: { space: number[] } }) => p.theme.space[4]}px;
  display: flex;
  flex-wrap: wrap;
  gap: ${(p: { theme: { space: number[] } }) => p.theme.space[2]}px;

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
