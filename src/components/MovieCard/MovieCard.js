import css from './MovieCard.module.css';
import imageplaceholder from 'images/noposter.jpg';
import { Box } from 'components/Box/Box';

export const MovieCard = ({ movie, location }) => {
  return (
    <Box width="160px" background="#bcc3ce" height="100%">
      <div className={css.movie__thumb}>
        <img
          className={css.movie__img}
          width="160"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
              : imageplaceholder
          }
          alt={movie.title ?? movie.name}
        />
      </div>
      <p className={css.movie__title}>{movie.title ?? movie.name}</p>
    </Box>
  );
};
