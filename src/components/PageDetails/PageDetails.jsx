import styled from '@emotion/styled';

export const Name = styled.h1`
  margin-top: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.textTitle};
  text-align: center;
`;

export const PageTitle = styled.h2`
  color: ${p => p.theme.colors.textPrimary};
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: ${p => p.theme.space[4]}px;
  gap: ${p => p.theme.space[3]}px;
  list-style: none;
`;

export const Item = styled.li`
  box-shadow: none;
  cursor: pointer;

  transition: box-shadow 250ms linear;

  :hover,
  :focus {
    box-shadow: ${p => p.theme.shadows.blackShadow};
  }
`;

export const DetailsImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

export const DetailsDescr = styled.p`
  margin-top: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.textPrimary};

  @media (max-width: 479.98px) {
    text-align: center;
  }
`;

export const DetailsHomePage = styled.a`
  margin-top: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.textPrimary};
  text-decoration: none;

  transition: color 250ms linear;

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
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
