import { PageWrap } from 'components/Box/Box';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PageTitle, List, Item } from '../Home/Home.styled';
import 'index.css';
import { ActorCard } from 'components/ActorCard/ActorCard';
import { fetchAlbumActors } from 'services/api';
import PropTypes from 'prop-types';
import { t } from 'i18next';

export default function Album({ actors }) {
  const [album, setAlbum] = useState([]);
  const location = useLocation();
  const lang = t('lang');

  useEffect(() => {
    fetchAlbumActors(actors, lang).then(data => {
      setAlbum(data);
    });
  }, [lang, actors]);

  return (
    <PageWrap>
      <PageTitle>{t('title.photoalbum')}</PageTitle>

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

Album.propTypes = {
  actors: PropTypes.array.isRequired,
};
