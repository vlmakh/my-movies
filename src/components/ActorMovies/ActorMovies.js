import { List, Item } from 'pages/Home/Home.styled';
import { useState, useEffect } from 'react';
import { useParams, useLocation, NavLink } from 'react-router-dom';
import { fetchMoviesByActor } from 'services/api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import PropTypes from 'prop-types';

export default function ActorMovies({ currentLang }) {
  const params = useParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchMoviesByActor(params.actorId, currentLang).then(data => {
      setMovies(data.cast);
    });
  }, [currentLang, params.actorId]);

  return (
    <>
      <List>
        {movies
          .sort((a, b) =>
            (b.release_date ?? b.first_air_date) >
            (a.release_date ?? a.first_air_date)
              ? 1
              : -1
          )
          .map(movie => (
            <Item key={movie.id}>
              <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                <MovieCard movie={movie} />
              </NavLink>
            </Item>
          ))}
      </List>
    </>
  );
}

ActorMovies.propTypes = {
  currentLang: PropTypes.string.isRequired,
};
