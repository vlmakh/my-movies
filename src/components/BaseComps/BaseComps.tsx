import styled from '@emotion/styled';

export const PageTitle = styled.h2`
  color: ${(p: { theme: { colors: { textPrimary: string; }; }; }) => p.theme.colors.textPrimary};
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: ${(p: { theme: { space: number[]; }; }) => p.theme.space[4]}px;
  gap: ${(p: { theme: { space: number[]; }; }) => p.theme.space[3]}px;
  list-style: none;
`;

export const Item = styled.li`
  box-shadow: none;
  cursor: pointer;

  transition: box-shadow 250ms linear;

  :hover,
  :focus {
    box-shadow: ${(p: { theme: { shadows: { blackShadow: string; }; }; }) => p.theme.shadows.blackShadow};
  }
`;
