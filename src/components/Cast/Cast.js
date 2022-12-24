import { List, Item } from 'pages/Home/Home.styled';
import { useState, useEffect } from 'react';
import { useParams, useLocation, NavLink } from 'react-router-dom';
import { fetchCastById } from 'services/api';
import { ActorCard } from 'components/ActorCard/ActorCard';

export default function Cast({ currentLang }) {
  const params = useParams();
  // console.log(params);
  const [cast, setCast] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchCastById(params.movieId, currentLang).then(data => {
      // console.log(data.cast);
      setCast(data.cast);
    });
  }, [currentLang, params.movieId]);

  return (
    <>
      <List>
        {cast.map(actor => (
          <Item key={actor.cast_id}>
            <NavLink to={`/actors/${actor.id}`} state={{ from: location }}>
              <ActorCard actor={actor} />
            </NavLink>
          </Item>
        ))}
      </List>
    </>
  );
}
