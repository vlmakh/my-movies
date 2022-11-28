import {
  ActorName,
  ActorImg,
  ActorDescr,
  GobackLink,
} from './ActorPage.styled';
import { Box } from 'components/Box/Box';
import { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchActorById } from 'services/api';
import PageError from 'pages/PageError/PageError';
import Modal from 'components/Modal/Modal';
import imageplaceholder from 'images/noposter.jpg';
import { formatDateEn, formatDateUa } from 'services/formatDate';

export default function ActorPage({ currentLang }) {
  const [personInfo, setPersonInfo] = useState(null);
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

  return (
    <Box p={3} mt="48px" textAlign="left">
      <GobackLink to={backLink.current}>
        {currentLang === 'uk-UA' ? 'Назад' : 'Back'}
      </GobackLink>

      {error && <PageError />}

      {personInfo && (
        <>
          <ActorName>{personInfo.name}</ActorName>
          <Box display="flex" mt={3}>
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

            <Box ml={4}>
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

              <Box mt={4}>
                <GobackLink to="biography" state={personInfo.biography}>
                  {currentLang === 'uk-UA' ? 'Біографія' : 'Biography'}
                </GobackLink>
                <GobackLink to="movies">
                  {currentLang === 'uk-UA' ? 'Фільми' : 'Movies'}
                </GobackLink>
                <GobackLink to="images">
                  {currentLang === 'uk-UA' ? 'Фото' : 'Photos'}
                </GobackLink>
              </Box>
              <Outlet />
            </Box>
          </Box>

          {showModal && (
            <Modal onClose={toggleModal}>
              <img
                src={
                  personInfo.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${personInfo.profile_path}`
                    : imageplaceholder
                }
                alt={`${personInfo.name}`}
              />
            </Modal>
          )}
        </>
      )}
    </Box>
  );
}
