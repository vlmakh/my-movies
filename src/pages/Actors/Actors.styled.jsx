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
  margin-left: ${p => p.theme.space[1]}px;
  font-weight: 700;
  padding: 4px 8px;
  color: ${p => p.theme.colors.textSecondary};
  background-color: ${p => p.theme.colors.bcgBtn};
  border-color: ${p => p.theme.colors.bcgBtn};
  cursor: pointer;
`;

export const SearchInput = styled.input`
  padding: 4px 8px;
`;

export const LoadMoreBtn = styled.button`
  margin-top: ${p => p.theme.space[4]}px;

  padding: 4px 8px;
  color: ${p => (p.disabled ? 'grey' : p.theme.colors.textSecondary)};
  background-color: ${p => p.theme.colors.bcgBtn};
  text-decoration: none;
  /* font-size: 16px; */
  font-weight: 700;
  border-color: ${p => p.theme.colors.bcgBtn};
  cursor: ${p => (p.disabled ? 'default' : 'pointer')};
`;
