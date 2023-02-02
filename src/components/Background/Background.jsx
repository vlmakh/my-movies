import styled from '@emotion/styled';
import bcgMovies from 'images/bcg-movies01.jpg';
import bcgActors from 'images/bcg-actors01.jpg';

export const BcgMovies = styled.div`
  margin: ${p => p.theme.space[4]}px auto 0;
  max-width: 1280px;
  height: 720px;
  background-image: radial-gradient(
      at center,
      rgba(59, 67, 81, 0.2),
      ${p => p.theme.colors.bcgMain} 70%
    ),
    url(${bcgMovies});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const BcgActors = styled.div`
  margin: ${p => p.theme.space[4]}px auto 0;
  max-width: 1280px;
  height: 720px;
  background-image: radial-gradient(
      at center,
      rgba(59, 67, 81, 0.2),
      ${p => p.theme.colors.bcgMain} 70%
    ),
    url(${bcgActors});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;
