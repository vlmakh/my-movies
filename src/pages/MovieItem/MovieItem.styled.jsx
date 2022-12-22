import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

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

export const GobackLink = styled(NavLink)`
  display: inline-block;
  /* margin-right: ${p => p.theme.space[2]}px; */
  padding: 4px 8px;
  color: ${p => p.theme.colors.textSecondary};
  background-color: ${p => p.theme.colors.bcgBtn};
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;

  transition: color 250ms linear;

  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;
