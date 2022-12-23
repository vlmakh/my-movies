import { MovieList, MovieItem, StyledNavLink } from './ActorMovies.styled';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMoviesByActor } from 'services/api';
import { MovieCard } from 'components/MovieCard/MovieCard';

export default function ActorMovies({ currentLang }) {
  const params = useParams();
  // console.log(params.actorId);
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchMoviesByActor(params.actorId, currentLang).then(data => {
      // console.log(data.cast);
      setMovies(data.cast);
    });
  }, [currentLang, params.actorId]);

  return (
    <>
      <MovieList>
        {movies
          .sort((a, b) =>
            (b.release_date ?? b.first_air_date) >
            (a.release_date ?? a.first_air_date)
              ? 1
              : -1
          )
          .map(movie => (
            <MovieItem key={movie.id}>
              <StyledNavLink
                to={`/movies/${movie.id}`}
                state={{ from: location }}
              >
                <MovieCard movie={movie} />
              </StyledNavLink>
            </MovieItem>
          ))}
      </MovieList>
    </>
  );
}
