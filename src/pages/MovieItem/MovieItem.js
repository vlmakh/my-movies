import css from './MovieItem.module.css';
import { Box } from 'components/Box/Box';
import { useState, useEffect, useRef } from 'react';
import { Outlet, NavLink, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import PageError from 'pages/PageError/PageError';
import Modal from 'components/Modal/Modal';

export default function MovieItem() {
  const [movieItem, setMovieItem] = useState(null);
  const [error, setError] = useState(false);
  const location = useLocation();
  const params = useParams();
  const backLink = useRef(location.state?.from ?? '/');

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    fetchMovieById(params.movieId)
      .then(data => {
        setMovieItem(data);
      })
      .catch(error => {
        // console.log(error.message);
        // alert(error.message);
        setError(true);
      });
  }, [params.movieId]);

  return (
    <Box p={3} mt="48px" textAlign="left">
      <NavLink to={backLink.current} className={css.goback__btn}>
        Go Back
      </NavLink>

      {error && <PageError />}

      {movieItem && (
        <>
          <Box display="flex" mt={3}>
            <div>
              <img
                className={css.movie__img}
                width="160"
                src={`https://image.tmdb.org/t/p/w200/${movieItem.poster_path}`}
                alt={`${movieItem.original_title}`}
                onClick={toggleModal}
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
            <NavLink className={css.movie__add} to="cast">
              Cast
            </NavLink>
            <NavLink className={css.movie__add} to="reviews">
              Reviews
            </NavLink>
          </Box>
          <Outlet />
          {showModal && (
            <Modal onClose={toggleModal}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movieItem.poster_path}`}
                alt={`${movieItem.original_title}`}
              />
            </Modal>
          )}
        </>
      )}
    </Box>
  );
}
