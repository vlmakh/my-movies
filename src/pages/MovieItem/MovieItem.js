import css from './MovieItem.module.css';
import { Box } from 'components/Box/Box';
import { useState, useEffect, useRef } from 'react';
import {
  Outlet,
  NavLink,
  Link,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchMovieById } from 'services/api';

export const MovieItem = () => {
  const [movieItem, setMovieItem] = useState(null);
  const location = useLocation();
  const params = useParams();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    fetchMovieById(params.movieId)
      .then(data => {
        setMovieItem(data);
      })
      .catch(error => {
        // console.log(error.message);
        alert(error.message);
      });
  }, [params.movieId]);

  return (
    <Box p={3} mt="48px" textAlign="left">
      <NavLink to={backLink.current} className={css.goback__btn}>
        Go Back
      </NavLink>

      {movieItem && (
        <>
          <Box display="flex" mt={3}>
            <div className={css.trend__thumb}>
              <img
                className={css.trend__img}
                width="160"
                src={`https://image.tmdb.org/t/p/w200/${movieItem.poster_path}`}
                alt={`${movieItem.original_title}`}
              />
            </div>
            <Box ml={3}>
              <h3>{movieItem.original_title}</h3>
              <p className={css.movie__over}>{movieItem.overview}</p>
              <p className={css.movie__genres}>
                {movieItem.genres.map(genre => genre.name).join(', ')}
              </p>
            </Box>
          </Box>
          <Box mt={3} textAlign="center">
            <Link className={css.movie__add} to="cast">
              Cast
            </Link>
            <Link className={css.movie__add} to="reviews">
              Reviews
            </Link>
          </Box>
          <Outlet />
        </>
      )}
    </Box>
  );
};
