import styled from '@emotion/styled';

export const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  /* justify-content: center; */
  margin-top: 16px;
  gap: ${p => p.theme.space[3]}px;
`;

export const MoviesItem = styled.li`
  box-shadow: none;

  transition: box-shadow 250ms linear;

  :hover,
  :focus {
    box-shadow: ${p => p.theme.shadows.blackShadow};
  }
`;

export const SearchBtn = styled.button`
  font-weight: 700;
  padding: 4px 8px;
`;

export const SearchInput = styled.input`
  padding: 4px 8px;
`;

export const LoadMoreBtn = styled.button`
  margin-top: 16px;
  padding: 4px 8px;
  color: #333;
  background-color: #bcc3ce;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;
