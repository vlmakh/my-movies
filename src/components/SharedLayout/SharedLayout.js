import { Outlet, NavLink } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import css from './SharedLayout.module.css';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <Box
        as="header"
        display="flex"
        alignItems="center"
        px={4}
        borderBottom="1px solid grey"
        position="fixed"
        width="100%"
        height="48px"
        top="0"
        background="#333"
        zIndex="100"
      >
        <nav>
          <NavLink className={css.header__link} to="/">
            Home
          </NavLink>
          <NavLink className={css.header__link} to="/movies">
            Movies
          </NavLink>
        </nav>
      </Box>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
