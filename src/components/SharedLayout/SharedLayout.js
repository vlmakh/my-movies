import { Outlet, NavLink } from 'react-router-dom';
import { Box } from 'components/Box/Box';

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
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </Box>
      <Outlet />
    </>
  );
};
