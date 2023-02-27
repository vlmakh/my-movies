import { List, Item } from 'components/BaseComps/BaseComps';
import { useState, useEffect } from 'react';
import { useParams, useLocation, NavLink } from 'react-router-dom';
import { fetchMoviesByActor } from 'services/api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { t } from 'i18next';
import { MovieType } from 'components/types';

export default function ActorMovies() {
  const { actorId } = useParams() as any;
  const [movies, setMovies] = useState<Array<MovieType>>([]);
  const location = useLocation();
  const lang = t('lang');

  useEffect(() => {
    fetchMoviesByActor(actorId, lang).then(data => {
      setMovies(data.cast);
    });
  }, [lang, actorId]);

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
