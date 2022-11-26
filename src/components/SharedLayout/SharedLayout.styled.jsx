import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Switch } from 'theme-ui';

export const StyledSwitch = styled(Switch)`

  background-color: #bcc3ce;
  // This will not be visible since the input is hidden
  // '&:checked': {
  //   backgroundColor: 'primary'
  // },
  // This will be visible
  input:checked ~ & {
    background-color: #333;
  }
`;

export const Layout = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  padding-right: ${p => p.theme.space[4]}px;
  background: ${p => p.theme.colors.bcgMain};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
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
