import styled from '@emotion/styled';

export const ActorImg = styled.img`
  cursor: pointer;
`;

export const ActorDescr = styled.p`
  margin-top: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.textPrimary};

  @media (max-width: 479.98px) {
    text-align: center;
  }
`;

export const ActorHomePage = styled.a`
  margin-top: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.textPrimary};
  text-decoration: none;
  
  transition: color 250ms linear;

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;
