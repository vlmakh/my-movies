import css from './MovieItem.module.css';
import { Box } from 'components/Box/Box';
import { Outlet, Link } from 'react-router-dom';

export const MovieItem = ({ movieId }) => {
  return (
    <Box p={4}>
      <button type="button">Go Back</button>
      <div className={css.trend__thumb}>
        <img
          className={css.trend__img}
          width="160"
          src={`https://image.tmdb.org/t/p/w200/idT5mnqPcJgSkvpDX7pJffBzdVH.jpg`}
          alt={'Пока не знаю'}
        />
      </div>
      <Link to="/">Cast</Link>
      <Link to="/">Reviews</Link>
      <Outlet />
    </Box>
  );
};
