import { Outlet } from 'react-router-dom';
import { Layout, Header, HeaderLink } from './SharedLayout.styled';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <Layout>
      <Header>
        <nav>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/movies">Movies</HeaderLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Layout>
  );
};
