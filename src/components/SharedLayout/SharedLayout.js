import { Outlet } from 'react-router-dom';
import {
  StyledSwitch,
  Layout,
  Header,
  HeaderLink,
  Nav,
} from './SharedLayout.styled';
import { Suspense } from 'react';
import { Box } from 'theme-ui';
import logo from 'images/logo.png';

export const SharedLayout = ({ toggleTheme }) => {
  return (
    <Layout>
      <Header>
        <Nav>
          <HeaderLink to="/">
            <img src={logo} alt="logo" width="32" height="32" />
          </HeaderLink>
          <HeaderLink to="/movies">Movies</HeaderLink>
          <HeaderLink to="/actors">Actors</HeaderLink>
        </Nav>
        <Box width="40px">
          <StyledSwitch onClick={toggleTheme} />
        </Box>
      </Header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Layout>
  );
};
