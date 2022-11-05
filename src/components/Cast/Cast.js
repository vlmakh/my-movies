// import PropTypes from 'prop-types';
import css from './Cast.module.css';
// import { Box } from 'components/Box/Box';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastById } from 'services/api';
import imageplaceholder from 'images/nophoto.jpg';

export const Cast = () => {
  const params = useParams();
  // console.log(params);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCastById(params.movieId).then(data => {
      // console.log(data.cast);
      setCast(data.cast);
    });
  }, [params.movieId]);

  return (
    <>
      <ul className={css.castList}>
        {cast.map(actor => (
          <li key={actor.id} className={css.castCard}>
            <div className={css.cast__thumb}>
              <img
                className={css.cast__img}
                width="100"
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : imageplaceholder
                }
                alt={actor.name}
              />
            </div>
            <p className={css.castName}>{actor.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
