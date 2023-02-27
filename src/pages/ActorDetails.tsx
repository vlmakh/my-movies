import {
  DetailsDescr,
  DetailsImg,
  DetailsHomePage,
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
import { fetchActorById } from 'services/api';
import PageError from 'pages/PageError';
import Modal from 'components/Modal/Modal';
import imageplaceholder from 'images/noposter.jpg';
import { formatDateEn, formatDateUa } from 'services/formatDate';
import { Suspense } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { t } from 'i18next';
import { ActorDetailsType, IActor } from 'components/types';

export default function ActorDetails({ actors, toggleActorsInAlbum }: ActorDetailsType) {
  const [personInfo, setPersonInfo] = useState<IActor | null>(null);
  const [error, setError] = useState(false);
  const location = useLocation();
  const params = useParams() as any;
  const [saved, setSaved] = useState(
    actors.includes(params.actorId) ? true : false
  );
  const backLink = useRef(location.state?.from ?? '/');
  const [showModal, setShowModal] = useState(false);
  const lang = t('lang');

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    fetchActorById(params.actorId, lang)
      .then(data => {
        setPersonInfo(data);
        document.title = `My Movies | ${data.name}`;
      })
      .catch(error => {
        setError(true);
      });
  }, [lang, params.actorId]);

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
        {!backLink.current.pathname ? t('buttons.home') : t('buttons.back')}
      </BackLinkBtn>

      {error && <PageError />}

      {personInfo && (
        <>
          <DetailsName>{personInfo.name}</DetailsName>
          <MainInfo>
            <ImgThumb>
              <DetailsImg
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
                <DetailsDescr>
                  {t('actor.birth')}
                  {lang === 'uk-UA'
                    ? `${formatDateUa(personInfo.birthday)}`
                    : `${formatDateEn(personInfo.birthday)}`}
                </DetailsDescr>
              )}
              {personInfo.deathday && (
                <DetailsDescr>
                  {t('actor.death')}
                  {lang === 'uk-UA'
                    ? `${formatDateUa(personInfo.deathday)}`
                    : `${formatDateEn(personInfo.deathday)}`}
                </DetailsDescr>
              )}
              {personInfo.homepage && (
                <DetailsDescr>
                  {t('actor.homepage')}
                  <DetailsHomePage
                    href={personInfo.homepage}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {personInfo.homepage}
                  </DetailsHomePage>
                </DetailsDescr>
              )}

              <BtnContainer>
                <StyledLinkBtn to="biography" state={personInfo.biography}>
                  {t('buttons.biography')}
                </StyledLinkBtn>
                <StyledLinkBtn to="movies">{t('buttons.movies')}</StyledLinkBtn>
                <StyledLinkBtn to="images">{t('buttons.photo')}</StyledLinkBtn>
                <StyledBtn onClick={handleSaveToAlbum} saved={saved}>
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
