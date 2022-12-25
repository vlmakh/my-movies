import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ThemeBtn = styled.button`
  padding: 8px 0;
  border: none;
  background-color: transparent;
  color: ${p => p.theme.colors.bcgBtn};
  cursor: pointer;

  transition: color 250ms linear;

  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;

export const ClearBtn = styled.button`
  position: absolute;
  padding: 0 4px;
  top: 4px;
  right: 0;
  border: none;
  color: transparent;
  background-color: transparent;

  cursor: pointer;

  transition: color 250ms linear;

  :hover {
    color: ${p => p.theme.colors.bcgBtn};
  }
`;

export const SearchBtn = styled.button`
  font-weight: 700;
  padding: 4px 8px;
  color: ${p => p.theme.colors.textSecondary};
  background-color: ${p => p.theme.colors.bcgBtn};
  border-color: ${p => p.theme.colors.bcgBtn};
  cursor: pointer;

  transition: color 250ms linear;

  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;

export const StyledBtn = styled.button`
  padding: 4px 8px;
  color: ${p =>
    p.saved ? p.theme.colors.accent : p.theme.colors.textSecondary};
  background-color: ${p => p.theme.colors.bcgBtn};
  font-size: 16px;
  font-weight: 700;
  border: none;
  cursor: pointer;

  transition: color 250ms linear;

  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;

export const StyledLinkBtn = styled(NavLink)`
  display: inline-block;
  padding: 4px 8px;
  color: ${p => p.theme.colors.textSecondary};
  background-color: ${p => p.theme.colors.bcgBtn};
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;

  &.active {
    color: ${p => p.theme.colors.accent};
  }

  transition: color 250ms linear;

  :hover, :focus {
    color: ${p => p.theme.colors.accent};
  }
`;


