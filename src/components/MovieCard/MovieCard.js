// import css from './MovieCard.module.css';
import {
  MovieThumb,
  MovieImg,
  MovieTitle,
  MovieYear,
} from 'components/MovieCard/MovieCard.styled';
import imageplaceholder from 'images/noposter.jpg';
import { Box } from 'components/Box/Box';

export const MovieCard = ({ movie }) => {
  let movieYear = '';
  if (movie.release_date ?? movie.first_air_date) {
    movieYear = (movie.release_date ?? movie.first_air_date).slice(0, 4);
  }

  return (
    <Box width="160px" background="#bcc3ce" height="100%">
      <MovieThumb>
        <MovieImg
          width="160"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
              : imageplaceholder
          }
          alt={movie.title ?? movie.name}
        />
        <MovieTitle>
          <p>{movie.title ?? movie.name}</p>
          <MovieYear>{movieYear}</MovieYear>
        </MovieTitle>
      </MovieThumb>
    </Box>
  );
};
