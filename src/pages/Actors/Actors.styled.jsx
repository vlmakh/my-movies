import styled from '@emotion/styled';
import bcgImage from 'images/bcg-actors01.jpg';
import ReactPaginate from 'react-paginate';

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

export const ActorsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  margin-top: 16px;
  gap: ${p => p.theme.space[3]}px;
`;

export const ActorsPerson = styled.li`
  box-shadow: none;

  transition: box-shadow 250ms linear;

  :hover,
  :focus {
    box-shadow: ${p => p.theme.shadows.blackShadow};
  }
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

export const PaginationStyled = styled(ReactPaginate)`
  display: flex;
  /* flex-wrap: wrap; */
  list-style: none;
  justify-content: center;
  margin-top: 16px;
  /* gap: ${p => p.theme.space[3]}px; */
  font-weight: 600;

  & a {
    padding: 0 8px;
    cursor: pointer;
    color: ${p => p.theme.colors.textPrimary};

    transition: color 250ms linear;

    :hover:not(.disabled) {
      color: ${p => p.theme.colors.accent};
    }
  }
`;
