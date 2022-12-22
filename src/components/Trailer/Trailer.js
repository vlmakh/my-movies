import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieTrailer } from 'services/api';
import { Box } from 'components/Box/Box';
import { Text } from './Trailer.styled';

export default function Trailer() {
  const params = useParams();
  //   console.log(params);
  const [trailer, setTrailer] = useState('Searching...');
  //   console.log(trailer);

  useEffect(() => {
    fetchMovieTrailer(params.movieId).then(data => {
      //   console.log(data.results);

      const objTrailer = data.results.find(movie => movie.type === 'Trailer');

      if (!objTrailer) {
        setTrailer('');
        return;
      }

      setTrailer(`https://www.youtube.com/embed/${objTrailer.key}`);
    });
  }, [params.movieId, trailer]);

  return (
    <Box mt={4}>
      {!trailer ? (
        <Text>No information found</Text>
      ) : (
        <iframe
          width="640"
          height="360"
          src={trailer}
          title={trailer}
          frameBorder="0"
          allowFullScreen
        />
      )}
    </Box>
  );
}
