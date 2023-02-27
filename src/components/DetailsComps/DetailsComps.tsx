import styled from '@emotion/styled';

export const DetailsName = styled.h1`
  margin-top: ${(p: { theme: { space: number[]; }; }) => p.theme.space[4]}px;
  font-size: ${(p: { theme: { fontSizes: { l: string; }; }; }) => p.theme.fontSizes.l};
  color: ${(p: { theme: { colors: { textTitle: string; }; }; }) => p.theme.colors.textTitle};
  text-align: center;
`;

export const DetailsImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

export const DetailsDescr = styled.p`
  margin-top: ${(p: { theme: { space: number[]; }; }) => p.theme.space[4]}px;
  color: ${(p: { theme: { colors: { textPrimary: string; }; }; }) => p.theme.colors.textPrimary};
  

  @media (max-width: 479.98px) {
    text-align: center;
  }
`;

export const Bold = styled.span`
  font-weight: ${(p: {bold: string}) => p.bold ? '700' : '400'};
`;

export const DetailsHomePage = styled.a`
  margin-top: ${(p: { theme: { space: number[]; }; }) => p.theme.space[4]}px;
  color: ${(p: { theme: { colors: { textPrimary: string; }; }; }) => p.theme.colors.textPrimary};
  text-decoration: none;

  transition: color 250ms linear;

  :hover,
  :focus {
    color: ${(p: { theme: { colors: { accent: string; }; }; }) => p.theme.colors.accent};
  }
`;
