import {
  MovieThumb,
  MovieImg,
  MovieTitle,
  MovieYear,
} from 'components/MovieCard/MovieCard.styled';
import { noposter } from 'images';
import { IMovie } from 'components/types';

type MovieType = {
  movie: IMovie;
};

export const MovieCard = ({ movie }: MovieType) => {
  let movieYear = '';
  if (movie.release_date ?? movie.first_air_date) {
    movieYear = (movie.release_date ?? movie.first_air_date).slice(0, 4);
  }

  return (
    <MovieThumb>
      <MovieImg
        width="200"
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
            : noposter
        }
        alt={movie.original_title ?? movie.name}
        loading="lazy"
      />
      <MovieTitle>
        <p>{movie.title ?? movie.name}</p>
        <MovieYear>{movieYear}</MovieYear>
      </MovieTitle>
    </MovieThumb>
  );
};
