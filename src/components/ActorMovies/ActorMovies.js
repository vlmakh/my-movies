import {
  MovieList,
  MovieCard,
  MovieImg,
  MovieName,
  StyledNavLink,
} from './ActorMovies.styled';
import { Box } from 'components/Box/Box';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMoviesByActor } from 'services/api';
import imageplaceholder from 'images/nophoto.jpg';

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
          <MovieCard key={movie.id}>
            <StyledNavLink to={`/movies/${movie.id}`} state={location}>
              <Box width="100px" height="150px" overflow="hidden">
                <MovieImg
                  width="100"
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                      : imageplaceholder
                  }
                  alt={movie.title ?? movie.name}
                />
              </Box>
              <MovieName>{movie.title ?? movie.name}</MovieName>
            </StyledNavLink>
          </MovieCard>
        ))}
      </MovieList>
    </>
  );
}
