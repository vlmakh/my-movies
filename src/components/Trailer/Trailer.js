import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieTrailer } from 'services/api';
import { Box } from 'components/Box/Box';
import { IframeStyled, Text } from './Trailer.styled';
import PropTypes from 'prop-types';

export default function Trailer({ currentLang }) {
  const params = useParams();
  //   console.log(params);
  const [trailer, setTrailer] = useState('plugtext');
  //   console.log(trailer);
  const notFound =
    currentLang === 'uk-UA' ? 'Не знайдено' : 'No information found';

  useEffect(() => {
    fetchMovieTrailer(params.movieId, currentLang).then(data => {
      //   console.log(data.results);

      const objTrailer = data.results.find(movie => movie.type === 'Trailer');

      if (!objTrailer) {
        setTrailer('');
        return;
      }

      setTrailer(`https://www.youtube.com/embed/${objTrailer.key}`);
    });
  }, [currentLang, params.movieId, trailer]);

  return (
    <Box mt={4}>
      {!trailer ? (
        <Text>{notFound}</Text>
      ) : (
        <IframeStyled
          src={trailer}
          title={trailer}
          frameBorder="0"
          allowFullScreen
        />
      )}
    </Box>
  );
}

Trailer.propTypes = {
  currentLang: PropTypes.string.isRequired,
};
