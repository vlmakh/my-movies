import {
  MovieTitle,
  MovieImg,
  MovieDescr,
  GobackLink,
} from './ActorPage.styled';
import { Box } from 'components/Box/Box';
import { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchActorById } from 'services/api';
import PageError from 'pages/PageError/PageError';
import Modal from 'components/Modal/Modal';
import imageplaceholder from 'images/noposter.jpg';

export default function ActorPage() {
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
    fetchActorById(params.actorId)
      .then(data => {
        setPersonInfo(data);
        // console.log(data);
      })
      .catch(error => {
        // console.log(error.message);
        // alert(error.message);
        setError(true);
      });
  }, [params.actorId]);

  return (
    <Box p={3} mt="48px" textAlign="left">
      <GobackLink to={backLink.current}>Go Back</GobackLink>

      {error && <PageError />}

      {personInfo && (
        <>
          <MovieTitle>{personInfo.name}</MovieTitle>
          <Box display="flex" mt={3}>
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
                  personInfo.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${personInfo.profile_path}`
                    : imageplaceholder
                }
                alt={`${personInfo.name}`}
                onClick={toggleModal}
              />
            </Box>

            <Box ml={4}>
              <MovieDescr>Birth date: {personInfo.birthday}</MovieDescr>
              {personInfo.deathday && (
                <MovieDescr>Death date: {personInfo.deathday}</MovieDescr>
              )}

              <GobackLink to="biography" state={personInfo.biography}>
                Biography
              </GobackLink>
              <GobackLink to="movies">Movies</GobackLink>

              {/* <Box mt={4}>
                <MovieDescr>{personInfo.biography}</MovieDescr>
              </Box> */}

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
