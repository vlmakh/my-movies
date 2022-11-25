import { Outlet } from 'react-router-dom';
import { Header, HeaderLink } from './SharedLayout.styled';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/movies">Movies</HeaderLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
