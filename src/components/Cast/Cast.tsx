import { List, Item } from 'components/BaseComps/BaseComps';
import { useState, useEffect } from 'react';
import { useParams, useLocation, NavLink } from 'react-router-dom';
import { fetchCastById } from 'services/api';
import { ActorCard } from 'components/ActorCard/ActorCard';
import { t } from 'i18next';
import { ICast } from 'components/types';

export default function Cast() {
  const params = useParams() as any;
  const [cast, setCast] = useState<Array<ICast>>([]);
  const location = useLocation();
  const lang = t('lang');

  useEffect(() => {
    fetchCastById(params.movieId, lang).then(data => {
      setCast(data.cast);
    });
  }, [lang, params.movieId]);

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