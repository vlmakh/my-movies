import styled from '@emotion/styled';
import { NavLink} from 'react-router-dom';

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${p => p.theme.space[4]}px;
  gap: ${p => p.theme.space[3]}px;
  list-style: none;
`;

export const MovieCard = styled.li`
  width: 100px;
  padding-bottom: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.textPrimary};
`;

export const MovieImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MovieName = styled.p`
  padding-top: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.textSecondary};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: 700;
  text-align: center;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`