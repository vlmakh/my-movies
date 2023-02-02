import { List, Item } from 'components/BaseComps/BaseComps';
import { useState, useEffect } from 'react';
import { useParams, useLocation, NavLink } from 'react-router-dom';
import { fetchMoviesByActor } from 'services/api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { t } from 'i18next';

export default function ActorMovies() {
  const params = useParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const lang = t('lang');

  useEffect(() => {
    fetchMoviesByActor(params.actorId, lang).then(data => {
      setMovies(data.cast);
    });
  }, [lang, params.actorId]);

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
