import {
  MovieTitle,
  MovieImg,
  MovieDescr,
  GobackLink,
} from './MovieItem.styled';
import { Box, Container, BtnContainer } from 'components/Box/Box';
import { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import PageError from 'pages/PageError/PageError';
import Modal from 'components/Modal/Modal';
import imageplaceholder from 'images/noposter.jpg';
import { Suspense } from 'react';
import { ThreeCircles } from 'react-loader-spinner';

export default function MovieItem({ currentLang }) {
  const [movieItem, setMovieItem] = useState(null);
  const [error, setError] = useState(false);
  const location = useLocation();
  const params = useParams();
  const backLink = useRef(location.state?.from ?? '/');
  // console.log(location);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    fetchMovieById(params.movieId, currentLang)
      .then(data => {
        setMovieItem(data);
        // console.log(data);
      })
      .catch(error => {
        // console.log(error.message);
        // alert(error.message);
        setError(true);
      });
  }, [currentLang, params.movieId]);

  return (
    <Box p={3} mt="48px" textAlign="left">
      <GobackLink to={backLink.current}>
        {currentLang === 'uk-UA' ? 'Назад' : 'Back'}
      </GobackLink>

      {error && <PageError />}

      {movieItem && (
        <>
          <MovieTitle>{movieItem.title}</MovieTitle>
          <Container>
            <Box
              width="200px"
              height="300px"
              boxShadow="0 0 8px rgba(0, 0, 0, 0.6)"
              // overflow="hidden"
            >
              <MovieImg
                width="200"
                height="100%"
                src={
                  movieItem.poster_path
                    ? `https://image.tmdb.org/t/p/w200/${movieItem.poster_path}`
                    : imageplaceholder
                }
                alt={`${movieItem.title}`}
                onClick={toggleModal}
              />
            </Box>

            <Box>
              <MovieDescr>
                {movieItem.genres.map(genre => genre.name).join(', ')}
              </MovieDescr>
              <MovieDescr>
                {(movieItem.release_date ?? movieItem.first_air_date).slice(
                  0,
                  4
                )}
              </MovieDescr>
              {/* <MovieDescr>{movieItem.overview}</MovieDescr> */}
              <BtnContainer>
                <GobackLink to="overview" state={movieItem.overview}>
                  {currentLang === 'uk-UA' ? 'Опис' : 'Overview'}
                </GobackLink>
                <GobackLink to="cast">
                  {currentLang === 'uk-UA' ? 'В ролях' : 'Cast'}
                </GobackLink>
                <GobackLink to="reviews">
                  {currentLang === 'uk-UA' ? 'Відгуки' : 'Reviews'}
                </GobackLink>
                <GobackLink to="trailer">
                  {currentLang === 'uk-UA' ? 'Трейлер' : 'Trailer'}
                </GobackLink>
              </BtnContainer>

              <Suspense
                fallback={
                  <ThreeCircles
                    height="100"
                    width="100"
                    color="#bcc3ce"
                    ariaLabel="Three-Circles-rotating"
                    visible={true}
                  />
                }
              >
                <Outlet />
              </Suspense>
            </Box>
          </Container>

          {showModal && (
            <Modal onClose={toggleModal}>
              <img
                src={
                  movieItem.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movieItem.poster_path}`
                    : imageplaceholder
                }
                alt={`${movieItem.original_title}`}
              />
            </Modal>
          )}
        </>
      )}
    </Box>
  );
}
