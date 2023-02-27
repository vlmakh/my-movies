import {
  ActorThumb,
  ActorImg,
  ActorTitle,
  Character,
} from 'components/ActorCard/ActorCard.styled';
import { nophoto } from 'images';
import { IActor } from 'components/types';
import { FC } from 'react';

type Actor = {
  actor: IActor;
};

export const ActorCard: FC<Actor> = ({ actor }) => (
  <ActorThumb>
    <ActorImg
      width="200"
      src={actor.profile_path
        ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
        : nophoto}
      alt={actor.name} />
    <ActorTitle>
      <p>{actor.name}</p>
      {actor.character && <Character>{actor.character}</Character>}
    </ActorTitle>
  </ActorThumb>
);
