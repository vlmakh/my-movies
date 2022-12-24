import styled from '@emotion/styled';

export const MovieImg = styled.img`
  cursor: pointer;   
`;

export const MovieDescr = styled.p`
  margin-top: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.textPrimary};

  @media (max-width: 479.98px) {
    text-align: center;
  }
`;
