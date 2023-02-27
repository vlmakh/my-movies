import { PageWrap } from 'components/Box/Box';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PageTitle, List, Item } from 'components/BaseComps/BaseComps';
import 'index.css';
import { ActorCard } from 'components/ActorCard/ActorCard';
import { fetchAlbumActors } from 'services/api';
import { t } from 'i18next';
import { Actors, IActor } from 'components/types';

export default function Album({ actors }: Actors) {
  const [album, setAlbum] = useState<Array<IActor>>([]);
  const location = useLocation();
  const lang = t('lang');

  useEffect(() => {
    document.title = `My Movies | ${t('nav.photoalbum')}`;

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
