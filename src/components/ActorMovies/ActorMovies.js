import { MovieList, MovieItem, StyledNavLink } from './ActorMovies.styled';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMoviesByActor } from 'services/api';
import { MovieCard } from 'components/MovieCard/MovieCard';

export default function ActorMovies() {
  const params = useParams();
  // console.log(params.actorId);
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchMoviesByActor(params.actorId).then(data => {
      // console.log(data.cast);
      setMovies(data.cast);
    });
  }, [params.actorId]);

  return (
    <>
      <MovieList>
        {movies.map(movie => (
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
