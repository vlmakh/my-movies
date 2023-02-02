import styled from '@emotion/styled';

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
