import {
  CastList,
  CastCard,
  CastImg,
  CastName,
  StyledNavLink,
} from './Cast.styled';
import { Box } from 'components/Box/Box';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchCastById } from 'services/api';
import imageplaceholder from 'images/nophoto.jpg';

export default function Cast() {
  const params = useParams();
  // console.log(params);
  const [cast, setCast] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchCastById(params.movieId).then(data => {
      // console.log(data.cast);
      setCast(data.cast);
    });
  }, [params.movieId]);

  return (
    <>
      <CastList>
        {cast.map(actor => (
          <CastCard key={actor.id}>
            <StyledNavLink
              to={`/actors/${actor.id}`}
              state={{ from: location }}
            >
              <Box width="100px" height="150px" overflow="hidden">
                <CastImg
                  width="100"
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                      : imageplaceholder
                  }
                  alt={actor.name}
                />
              </Box>
              <CastName>{actor.name}</CastName>
            </StyledNavLink>
          </CastCard>
        ))}
      </CastList>
    </>
  );
}
