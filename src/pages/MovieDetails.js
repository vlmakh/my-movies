import {
  DetailsDescr,
  DetailsImg,
  DetailsName,
} from 'components/DetailsComps/DetailsComps';
import {
  StyledBtn,
  StyledLinkBtn,
  BackLinkBtn,
} from 'components/Buttons/Buttons';
import {
  PageWrap,
  Box,
  MainInfo,
  BtnContainer,
  ImgThumb,
} from 'components/Box/Box';
import { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import PageError from 'pages/PageError';
import Modal from 'components/Modal/Modal';
import imageplaceholder from 'images/noposter.jpg';
import { Suspense } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { t } from 'i18next';

export default function MovieDetails({ toggleMovieInLibrary, movies }) {
  const [movieItem, setMovieItem] = useState(null);
  const [error, setError] = useState(false);
  const location = useLocation();
  const params = useParams();
  const backLink = useRef(location.state?.from ?? '/');
  const [saved, setSaved] = useState(
    movies.includes(params.movieId) ? true : false
  );
  const [showModal, setShowModal] = useState(false);
  const lang = t('lang');

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
    fetchMovieById(params.movieId, lang)
      .then(data => {
        setMovieItem(data);
      })
      .catch(error => {
        setError(true);
      });
  }, [lang, params.movieId]);

  return (
    <PageWrap>
      <BackLinkBtn to={backLink.current}>
        {!backLink.current.pathname ? t('buttons.home') : t('buttons.back')}
      </BackLinkBtn>

      {error && <PageError />}

      {movieItem && (
        <>
          <DetailsName>{movieItem.title}</DetailsName>
          <MainInfo>
            <ImgThumb>
              <DetailsImg
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
              <DetailsDescr>
                {movieItem.genres.map(genre => genre.name).join(', ')}
              </DetailsDescr>
              <DetailsDescr>
                {(movieItem.release_date ?? movieItem.first_air_date).slice(
                  0,
                  4
                )}
              </DetailsDescr>

              <BtnContainer>
                <StyledLinkBtn to="overview" state={movieItem.overview}>
                  {t('buttons.overview')}
                </StyledLinkBtn>
                <StyledLinkBtn to="cast">{t('buttons.cast')}</StyledLinkBtn>
                <StyledLinkBtn to="reviews">
                  {t('buttons.reviews')}
                </StyledLinkBtn>
                <StyledLinkBtn to="trailer">
                  {t('buttons.trailer')}
                </StyledLinkBtn>
                <StyledBtn onClick={handleSaveToLib} saved={saved}>
                  {saved ? t('buttons.saved') : t('buttons.save')}
                </StyledBtn>
              </BtnContainer>
            </Box>
          </MainInfo>

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

MovieDetails.propTypes = {
  toggleMovieInLibrary: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
};
