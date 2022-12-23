import styled from '@emotion/styled';

export const MovieTitle = styled.h2`
  margin-top: 0;
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.textTitle};
  text-align: center;
`;
export const MovieImg = styled.img`
  cursor: pointer;   
`;

export const MovieDescr = styled.p`
  margin-top: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.textPrimary};
`;
