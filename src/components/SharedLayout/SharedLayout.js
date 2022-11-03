import { Outlet, NavLink } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <Box
        as="header"
        display="flex"
        p={3}
        borderBottom="1px solid grey"
        // position="fixed"
        width="100%"
      >
        <div>
          <span role="img" aria-label="computer icon">
            💻
          </span>
          My Movies
        </div>
        <nav>
          <NavLink className={css.header__link} to="/">
            Home
          </NavLink>
          <NavLink className={css.header__link} to="/movies">
            Movies
          </NavLink>
        </nav>
      </Box>
      <Outlet />
    </>
  );
};
