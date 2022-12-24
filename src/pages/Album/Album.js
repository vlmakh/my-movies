import { PageWrap } from 'components/Box/Box';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PageTitle, List, Item } from '../Home/Home.styled';
import 'index.css';
import { ActorCard } from 'components/ActorCard/ActorCard';
import { fetchAlbumActors } from 'services/api';

export default function Album({ actors, currentLang }) {
  const [album, setAlbum] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchAlbumActors(actors, currentLang).then(data => {
      setAlbum(data);
      //   console.log(data);
    });
  }, [currentLang, actors]);

  return (
    <PageWrap p={4} mt="48px" textAlign="center">
      <PageTitle>
        {currentLang === 'uk-UA' ? 'Улюблені актори' : 'Favorite actors'}
      </PageTitle>

      <List>
        {album.map(actor => (
          <Item key={actor.id}>
            <NavLink to={`/actors/${actor.id}`} state={{ from: location }}>
              <ActorCard actor={actor} />
            </NavLink>
          </Item>
        ))}
      </List>
    </PageWrap>
  );
}
