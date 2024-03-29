import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Layout = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
  padding-top: ${(p: { theme: { space: number[] } }) => p.theme.space[1]}px;
  background-color: ${(p: { theme: { colors: { bcgMain: string } } }) =>
    p.theme.colors.bcgMain};

  transition: background-color 250ms linear;
`;

export const Header = styled.div`
  border-bottom: 1px solid grey;
  position: fixed;
  width: 100%;
  height: 48px;
  top: 0;
  background: ${(p: { theme: { colors: { bcgHeader: string } } }) =>
    p.theme.colors.bcgHeader};
  z-index: 100;
  box-shadow: ${(p: { theme: { shadows: { headerShadow: string } } }) =>
    p.theme.shadows.headerShadow};

  transition: background-color 250ms linear;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: ${(p: { theme: { space: number[] } }) => p.theme.space[4]}px;
  padding-right: ${(p: { theme: { space: number[] } }) => p.theme.space[4]}px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 479.98px) {
    padding: ${(p: { theme: { space: number[] } }) => p.theme.space[2]}px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

export const HeaderLink = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: ${(p: { theme: { fontSizes: { s: string } } }) =>
    p.theme.fontSizes.s};
  font-weight: 700;
  color: ${(p: { theme: { colors: { textPrimary: string } } }) =>
    p.theme.colors.textPrimary};
  text-decoration: none;

  transition: color 250ms linear;

  &.active {
    color: ${(p: { theme: { colors: { accent: string } } }) =>
      p.theme.colors.accent};
  }

  :hover {
    color: ${(p: { theme: { colors: { accent: string } } }) =>
      p.theme.colors.accent};
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 48px;
  gap: ${(p: { theme: { space: number[] } }) => p.theme.space[4]}px;

  @media (max-width: 479.98px) {
    display: none;
  }
`;

export const NavMobile = styled.nav`
  display: flex;
  align-items: center;
  height: 48px;
  gap: ${(p: { theme: { space: number[] } }) => p.theme.space[3]}px;

  @media (min-width: 480px) {
    display: none;
  }
`;

export const LangBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: ${(p: { theme: { fontSizes: { s: string } } }) =>
    p.theme.fontSizes.s};
  font-weight: 700;
  cursor: ${(p: { disabled: string }) => (p.disabled ? 'default' : 'pointer')};
  color: ${(p: { theme: { colors: { textPrimary: string } } }) =>
    p.theme.colors.textPrimary};

  transition: color 250ms linear;

  :disabled {
    color: ${(p: { theme: { colors: { accent: string } } }) =>
      p.theme.colors.accent};
  }

  :hover:not(:disabled) {
    color: ${(p: { theme: { colors: { accent: string } } }) =>
      p.theme.colors.accent};
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(p: { theme: { space: number[] } }) => p.theme.space[4]}px;
  border-top: 1px solid grey;
  width: 100%;
  height: 36px;
  background: ${(p: { theme: { colors: { bcgHeader: string } } }) =>
    p.theme.colors.bcgHeader};
  font-size: ${(p: { theme: { fontSizes: { s: string } } }) =>
    p.theme.fontSizes.s};
  color: ${(p: { theme: { colors: { textPrimary: string } } }) =>
    p.theme.colors.textPrimary};
  z-index: 100;
  box-shadow: ${(p: { theme: { shadows: { footerShadow: string } } }) =>
    p.theme.shadows.footerShadow};

  transition: background-color 250ms linear;
`;

export const MyMailLink = styled.a`
  color: ${(p: { theme: { colors: { textPrimary: string } } }) =>
    p.theme.colors.textPrimary};
  font-size: ${(p: { theme: { fontSizes: { s: string } } }) =>
    p.theme.fontSizes.s};
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;

  transition: color 250ms linear;

  :hover,
  :focus {
    color: ${(p: { theme: { colors: { accent: string } } }) =>
      p.theme.colors.accent};
  }
`;
