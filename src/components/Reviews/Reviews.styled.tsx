import styled from '@emotion/styled';

export const ReviewList = styled.ul`
  margin-top: ${(p: { theme: { space: number[]; }; }) => p.theme.space[4]}px;
  list-style: none;
`;

export const ReviewAuthor = styled.h4`
  margin-top: ${(p: { theme: { space: number[]; }; }) => p.theme.space[3]}px;
  color: ${(p: { theme: { colors: { textPrimary: string; }; }; }) => p.theme.colors.textPrimary};
`;

export const ReviewText = styled.p`
  margin-top: ${(p: { theme: { space: number[]; }; }) => p.theme.space[3]}px;
  font-size: ${(p: { theme: { fontSizes: { xs: string; }; }; }) => p.theme.fontSizes.xs};
  color:  ${(p: { theme: { colors: { textPrimary: string; }; }; }) => p.theme.colors.textPrimary};
`;

export const ReviewNot = styled.p`
  padding-top: ${(p: { theme: { space: number[]; }; }) => p.theme.space[4]}px;
  color: ${(p: { theme: { colors: { textPrimary: string; }; }; }) => p.theme.colors.textPrimary};
`;
