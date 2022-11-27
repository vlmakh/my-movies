import { Outlet } from 'react-router-dom';
import {
  StyledSwitch,
  Layout,
  Header,
  HeaderLink,
} from './SharedLayout.styled';
import { Suspense } from 'react';
import { Box } from 'theme-ui';

export const SharedLayout = ({ toggleTheme }) => {
  return (
    <Layout>
      <Header>
        <nav>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/movies">Movies</HeaderLink>
          <HeaderLink to="/actors">Actors</HeaderLink>
        </nav>
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
