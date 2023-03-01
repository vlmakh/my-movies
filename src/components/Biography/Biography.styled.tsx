import styled from '@emotion/styled';

export const OverviewText = styled.p`
  margin-top: ${(p: { theme: { space: number[]; }; }) => p.theme.space[4]}px;
  font-size: ${(p: { theme: { fontSizes: { s: string; }; }; }) => p.theme.fontSizes.s};
  color: ${(p: { theme: { colors: { textPrimary: string; }; }; }) => p.theme.colors.textPrimary};
`;
