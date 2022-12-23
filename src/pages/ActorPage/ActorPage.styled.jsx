import styled from '@emotion/styled';

export const ActorName = styled.h2`
  margin-top: 0;
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.textTitle};
  text-align: center;
`;
export const ActorImg = styled.img`
  cursor: pointer;
`;

export const ActorDescr = styled.p`
  margin-top: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.textPrimary};
`;
