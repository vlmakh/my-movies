import styled from '@emotion/styled';
import {bcgMovies, bcgActors} from 'images';

export const BcgMovies = styled.div`
  margin: ${(p: { theme: { space: number[]; }; }) => p.theme.space[4]}px auto 0;
  max-width: 1280px;
  height: 720px;
  background-image: radial-gradient(
      at center,
      rgba(59, 67, 81, 0.2),
      ${(p: { theme: { colors: { bcgMain: string; }; }; }) => p.theme.colors.bcgMain} 70%
    ),
    url(${bcgMovies});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const BcgActors = styled.div`
  margin: ${(p: { theme: { space: number[]; }; }) => p.theme.space[4]}px auto 0;
  max-width: 1280px;
  height: 720px;
  background-image: radial-gradient(
      at center,
      rgba(59, 67, 81, 0.2),
      ${(p: { theme: { colors: { bcgMain: string; }; }; }) => p.theme.colors.bcgMain} 70%
    ),
    url(${bcgActors});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;
