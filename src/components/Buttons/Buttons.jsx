import styled from '@emotion/styled';

export const ClearBtn = styled.button`
  position: absolute;
  padding: 0 4px;
  top: 4px;
  right: 0;
  border: none;
  color: transparent;
  background-color: transparent;

  cursor: pointer;

  transition: color 250ms linear;

  :hover {
    color: ${p => p.theme.colors.bcgBtn};
  }
`;

export const SearchBtn = styled.button`
  /* margin-left: ${p => p.theme.space[1]}px; */
  font-weight: 700;
  padding: 4px 8px;
  color: ${p => p.theme.colors.textSecondary};
  background-color: ${p => p.theme.colors.bcgBtn};
  border-color: ${p => p.theme.colors.bcgBtn};
  cursor: pointer;

  transition: color 250ms linear;

  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;

export const LoadMoreBtn = styled.button`
  margin-top: ${p => p.theme.space[4]}px;

  padding: 4px 8px;
  color: ${p => (p.disabled ? 'grey' : p.theme.colors.textSecondary)};
  background-color: ${p => p.theme.colors.bcgBtn};
  text-decoration: none;
  font-weight: 700;
  border-color: ${p => p.theme.colors.bcgBtn};
  cursor: ${p => (p.disabled ? 'default' : 'pointer')};

  transition: color 250ms linear;

  :hover:not(:disabled) {
    color: ${p => p.theme.colors.accent};
  }
`;