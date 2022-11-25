import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Layout = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  padding-right: ${p => p.theme.space[4]}px;
  background: ${p => p.theme.colors.bcgMain};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${p => p.theme.space[4]}px;
  border-bottom: 1px solid grey;
  position: fixed;
  width: 100%;
  height: 48px;
  top: 0;
  background: ${p => p.theme.colors.bcgHeader};
  z-index: 100;
`;

export const HeaderLink = styled(NavLink)`
  margin-right: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: 700;
  color: ${p => p.theme.colors.textPrimary};
  text-decoration: none;
`;
