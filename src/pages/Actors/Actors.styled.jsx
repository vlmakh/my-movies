import styled from '@emotion/styled';
import bcgImage from 'images/bcg-actors01.jpg';

export const Background = styled.div`
  margin: ${p => p.theme.space[4]}px auto 0;
  max-width: 1280px;
  height: 720px;
  background-image: radial-gradient(
      at center,
      rgba(59, 67, 81, 0.2),
      ${p => p.theme.colors.bcgMain} 70%
    ),
    url(${bcgImage});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const SearchForm = styled.form`
  display: flex;
  margin: 0 auto;
  max-width: 400px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 4px 8px;

  &:hover + button {
    color: ${p => p.theme.colors.bcgBtn};
  }
`;
