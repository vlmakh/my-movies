import css from './Movies.module.css';
import { Box } from 'components/Box/Box';
import { Outlet } from 'react-router-dom';

export const Movies = () => {
  return (
    <Box p={4}>
      <h3> Here will be search Input </h3>
      <form>
        <input className={css.search} />
        <button type="submit" className={css.search__btn}>
          Search
        </button>
      </form>

      <Outlet />
    </Box>
  );
};
