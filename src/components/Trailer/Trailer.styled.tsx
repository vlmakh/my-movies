import styled from '@emotion/styled';
import Iframe from 'react-iframe';

export const IframeStyled = styled(Iframe)`
  width: 640px;
  height: 360px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  border: none;

  @media (max-width: 900px) {
    max-width: 100%;
    height: 360px;
  }
`;

export const Text = styled.p`
  margin-top: ${(p: { theme: { space: number[]; }; }) => p.theme.space[4]}px;
  font-size: ${(p: { theme: { fontSizes: { s: string; }; }; }) => p.theme.fontSizes.s};
  color: ${(p: { theme: { colors: { textPrimary: string; }; }; }) => p.theme.colors.textPrimary};
`;
