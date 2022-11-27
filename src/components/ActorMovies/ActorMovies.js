import {
  MovieList,
  MovieCard,
  MovieImg,
  MovieName,
} from './ActorMovies.styled';
import { Box } from 'components/Box/Box';
import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { fetchMoviesByActor } from 'services/api';
import imageplaceholder from 'images/nophoto.jpg';

export default function Cast() {
  const params = useParams();
  // console.log(params);
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchMoviesByActor(params.actorId).then(data => {
      console.log(data.results);
      setMovies(data.results);
    });
  }, [params.actorId]);

  return (
    <>
      <MovieList>
        {movies.map(movie => (
          <MovieCard key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
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
            </Link>
          </MovieCard>
        ))}
      </MovieList>
    </>
  );
}
