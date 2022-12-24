import styled from '@emotion/styled';
import Iframe from 'react-iframe';

export const IframeStyled = styled(Iframe)`
  width: 640px;
  height: 360px;

  @media (max-width: 900px) {
    max-width: 100%;
    height: 360px;
  }
`;

export const Text = styled.p`
  margin-top: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.textPrimary};
`;
