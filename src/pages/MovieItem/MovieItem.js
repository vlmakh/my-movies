import { MovieImg, MovieDescr } from './MovieItem.styled';
import { Name } from 'pages/Home/Home.styled';
import {
  StyledBtn,
  StyledLinkBtn,
  BackLinkBtn,
} from 'components/Buttons/Buttons';
import {
  PageWrap,
  Box,
  Main,
  BtnContainer,
  ImgThumb,
} from 'components/Box/Box';
import { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import PageError from 'pages/PageError/PageError';
import Modal from 'components/Modal/Modal';
import imageplaceholder from 'images/noposter.jpg';
import { Suspense } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export default function MovieItem({
  toggleMovieInLibrary,
  currentLang,
  movies,
}) {
  const [movieItem, setMovieItem] = useState(null);
  const [error, setError] = useState(false);
  const location = useLocation();
  const params = useParams();
  const backLink = useRef(location.state?.from ?? '/');
  // console.log(location);
  const [saved, setSaved] = useState(
    movies.includes(params.movieId) ? true : false
  );
  const [showModal, setShowModal] = useState(false);
  const textSave = currentLang === 'uk-UA' ? 'Зберегти' : 'Save';
  const textSaved = currentLang === 'uk-UA' ? 'Збережено' : 'Saved';
  const textBack = currentLang === 'uk-UA' ? 'Назад' : 'Back';
  const textHome = currentLang === 'uk-UA' ? 'Старт' : 'Home';

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleSaveBtn = () => {
    setSaved(!saved);
  };

  const handleSaveToLib = () => {
    toggleMovieInLibrary(params.movieId);
    toggleSaveBtn();
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
    <PageWrap>
      <BackLinkBtn to={backLink.current}>
        {!backLink.current.pathname ? textHome : textBack}
      </BackLinkBtn>

      {error && <PageError />}

      {movieItem && (
        <>
          <Name>{movieItem.title}</Name>
          <Main>
            <ImgThumb>
              <MovieImg
                width="200"
                src={
                  movieItem.poster_path
                    ? `https://image.tmdb.org/t/p/w200/${movieItem.poster_path}`
                    : imageplaceholder
                }
                alt={`${movieItem.title}`}
                onClick={toggleModal}
              />
            </ImgThumb>

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
                <StyledLinkBtn to="overview" state={movieItem.overview}>
                  {currentLang === 'uk-UA' ? 'Опис' : 'Overview'}
                </StyledLinkBtn>
                <StyledLinkBtn to="cast">
                  {currentLang === 'uk-UA' ? 'В ролях' : 'Cast'}
                </StyledLinkBtn>
                <StyledLinkBtn to="reviews">
                  {currentLang === 'uk-UA' ? 'Відгуки' : 'Reviews'}
                </StyledLinkBtn>
                <StyledLinkBtn to="trailer">
                  {currentLang === 'uk-UA' ? 'Трейлер' : 'Trailer'}
                </StyledLinkBtn>
                <StyledBtn onClick={handleSaveToLib} saved={saved}>
                  {saved ? textSaved : textSave}
                </StyledBtn>
              </BtnContainer>
            </Box>
          </Main>

          <Suspense
            fallback={
              <Box display="flex" justifyContent="center">
                <ThreeCircles
                  height="100"
                  width="100"
                  color="#bcc3ce"
                  ariaLabel="Three-Circles-rotating"
                  visible={true}
                />
              </Box>
            }
          >
            <Outlet />
          </Suspense>

          {showModal && (
            <Modal onClose={toggleModal}>
              <img
                width="100%"
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
    </PageWrap>
  );
}

MovieItem.propTypes = {
  toggleMovieInLibrary: PropTypes.func.isRequired,
  currentLang: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
};
