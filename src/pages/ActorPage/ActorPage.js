import { ActorImg, ActorDescr } from './ActorPage.styled';
import { Name } from 'pages/Home/Home.styled';
import { StyledBtn, StyledLinkBtn } from 'components/Buttons/Buttons';
import { PageWrap, Box, Container, BtnContainer } from 'components/Box/Box';
import { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchActorById } from 'services/api';
import PageError from 'pages/PageError/PageError';
import Modal from 'components/Modal/Modal';
import imageplaceholder from 'images/noposter.jpg';
import { formatDateEn, formatDateUa } from 'services/formatDate';
import { Suspense } from 'react';
import { ThreeCircles } from 'react-loader-spinner';

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
      <StyledLinkBtn to={backLink.current}>
        {!backLink.current.pathname ? textHome : textBack}
      </StyledLinkBtn>

      {error && <PageError />}

      {personInfo && (
        <>
          <Name>{personInfo.name}</Name>
          <Container>
            <Box
              width="200px"
              height="300px"
              boxShadow="0 0 8px rgba(0, 0, 0, 0.6)"
              // overflow="hidden"
            >
              <ActorImg
                width="200"
                height="100%"
                src={
                  personInfo.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${personInfo.profile_path}`
                    : imageplaceholder
                }
                alt={`${personInfo.name}`}
                onClick={toggleModal}
              />
            </Box>

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

              <Suspense
                fallback={
                  <Box pt={6} pl={6}>
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
            </Box>
          </Container>

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
