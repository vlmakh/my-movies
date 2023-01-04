import { ActorImg, ActorDescr, ActorHomePage } from './ActorPage.styled';
import { Name } from 'pages/Home/Home.styled';
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
import { fetchActorById } from 'services/api';
import PageError from 'pages/PageError/PageError';
import Modal from 'components/Modal/Modal';
import imageplaceholder from 'images/noposter.jpg';
import { formatDateEn, formatDateUa } from 'services/formatDate';
import { Suspense } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export default function ActorPage({
  actors,
  currentLang,
  toggleActorsInAlbum,
}) {
  const [personInfo, setPersonInfo] = useState(null);
  const [error, setError] = useState(false);
  const location = useLocation();
  const params = useParams();
  const [saved, setSaved] = useState(
    actors.includes(params.actorId) ? true : false
  );
  const backLink = useRef(location.state?.from ?? '/');
  // console.log(location);
  const [showModal, setShowModal] = useState(false);
  const textSave = currentLang === 'uk-UA' ? 'Зберегти' : 'Save';
  const textSaved = currentLang === 'uk-UA' ? 'Збережено' : 'Saved';
  const textBack = currentLang === 'uk-UA' ? 'Назад' : 'Back';
  const textHome = currentLang === 'uk-UA' ? 'Старт' : 'Home';

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    fetchActorById(params.actorId, currentLang)
      .then(data => {
        setPersonInfo(data);
        // console.log(data);
      })
      .catch(error => {
        // console.log(error.message);
        // alert(error.message);
        setError(true);
      });
  }, [currentLang, params.actorId]);

  const toggleSaveBtn = () => {
    setSaved(!saved);
  };

  const handleSaveToAlbum = () => {
    toggleActorsInAlbum(params.actorId);
    toggleSaveBtn();
  };

  return (
    <PageWrap>
      <BackLinkBtn to={backLink.current}>
        {!backLink.current.pathname ? textHome : textBack}
      </BackLinkBtn>

      {error && <PageError />}

      {personInfo && (
        <>
          <Name>{personInfo.name}</Name>
          <MainInfo>
            <ImgThumb>
              <ActorImg
                width="200"
                src={
                  personInfo.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${personInfo.profile_path}`
                    : imageplaceholder
                }
                alt={`${personInfo.name}`}
                onClick={toggleModal}
              />
            </ImgThumb>

            <Box>
              {personInfo.birthday && (
                <ActorDescr>
                  {currentLang === 'uk-UA'
                    ? `Дата народження: ${formatDateUa(personInfo.birthday)}`
                    : `Birth date: ${formatDateEn(personInfo.birthday)}`}
                </ActorDescr>
              )}
              {personInfo.deathday && (
                <ActorDescr>
                  {currentLang === 'uk-UA'
                    ? `Дата смерті: ${formatDateUa(personInfo.deathday)}`
                    : `Death date: ${formatDateEn(personInfo.deathday)}`}
                </ActorDescr>
              )}
              {personInfo.homepage && (
                <ActorDescr>
                  {currentLang === 'uk-UA' ? 'Сторінка: ' : 'Homepage: '}
                  <ActorHomePage
                    href={personInfo.homepage}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {personInfo.homepage}
                  </ActorHomePage>
                </ActorDescr>
              )}

              <BtnContainer>
                <StyledLinkBtn to="biography" state={personInfo.biography}>
                  {currentLang === 'uk-UA' ? 'Біографія' : 'Biography'}
                </StyledLinkBtn>
                <StyledLinkBtn to="movies">
                  {currentLang === 'uk-UA' ? 'Фільми' : 'Movies'}
                </StyledLinkBtn>
                <StyledLinkBtn to="images">
                  {currentLang === 'uk-UA' ? 'Фото' : 'Photos'}
                </StyledLinkBtn>
                <StyledBtn onClick={handleSaveToAlbum} saved={saved}>
                  {saved ? textSaved : textSave}
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
                  personInfo.profile_path
                    ? `https://image.tmdb.org/t/p/w500${personInfo.profile_path}`
                    : imageplaceholder
                }
                alt={personInfo.name}
              />
            </Modal>
          )}
        </>
      )}
    </PageWrap>
  );
}

ActorPage.propTypes = {
  toggleActorsInAlbum: PropTypes.func.isRequired,
  currentLang: PropTypes.string.isRequired,
  actors: PropTypes.array.isRequired,
};
