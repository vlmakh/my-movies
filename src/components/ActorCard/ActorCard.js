import {
  ActorThumb,
  ActorImg,
  ActorTitle,
  Character,
} from 'components/ActorCard/ActorCard.styled';
import imageplaceholder from 'images/noposter.jpg';
import PropTypes from 'prop-types';

export const ActorCard = ({ actor }) => {
  return (
    <ActorThumb>
      <ActorImg
        width="200"
        src={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
            : imageplaceholder
        }
        alt={actor.name}
      />
      <ActorTitle>
        <p>{actor.name}</p>
        {actor.character && <Character>{actor.character}</Character>}
      </ActorTitle>
    </ActorThumb>
  );
};

ActorCard.propTypes = {
  actor: PropTypes.object.isRequired,
};
