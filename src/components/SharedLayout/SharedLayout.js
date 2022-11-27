import { Outlet } from 'react-router-dom';
import {
  StyledSwitch,
  Layout,
  Header,
  HeaderLink,
  Nav,
} from './SharedLayout.styled';
import { Suspense } from 'react';
import { Box } from 'components/Box/Box';
import logo from 'images/logo.png';
import { ThreeCircles } from 'react-loader-spinner';

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

      <Suspense
        fallback={
          <Box width="100vw" display="flex" justifyContent="center" pt={7}>
            <ThreeCircles
              height="120"
              width="120"
              color="#bcc3ce"
              ariaLabel="Three-Circles-rotating"
              visible={true}
            />
          </Box>
        }
      >
        <Outlet />
      </Suspense>
    </Layout>
  );
};
