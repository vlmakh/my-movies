import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieTrailer } from 'services/api';
import { Box } from 'components/Box/Box';
import { IframeStyled, Text } from './Trailer.styled';
import { ThreeCircles } from 'react-loader-spinner';
import { t } from 'i18next';
import { IMovie } from 'components/types';

export default function Trailer() {
  const params = useParams() as any;
  const [trailer, setTrailer] = useState('plugtext');
  const lang = t('lang');

  useEffect(() => {
    fetchMovieTrailer(params.movieId, lang).then(data => {
      const objTrailer = data.results.find(
        (movie: IMovie) => movie.type === 'Trailer'
      );

      if (!objTrailer) {
        setTrailer('');
        return;
      }

      setTrailer(`https://www.youtube.com/embed/${objTrailer.key}`);
    });
  }, [lang, params.movieId, trailer]);

  return (
    <Box mt={4}>
      <Suspense
        fallback={
          <ThreeCircles
            height="100"
            width="100"
            color="#bcc3ce"
            ariaLabel="Three-Circles-rotating"
            visible={true}
          />
        }
      >
        {!trailer ? (
          <Text>{t('notFoundMsg')}</Text>
        ) : (
          <IframeStyled
            url={trailer}
            title={trailer}
            allowFullScreen
          />
        )}
      </Suspense>
    </Box>
  );
}
