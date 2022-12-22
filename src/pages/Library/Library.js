import { Box } from 'components/Box/Box';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Title, LibList, LibItem } from './Library.styled';
import 'index.css';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { fetchLibraryMovies } from 'services/api';

export default function Library({ movies, currentLang }) {
  const [library, setLibrary] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchLibraryMovies(movies, currentLang).then(data => {
      setLibrary(data);
      //   console.log(data);
    });
  }, [currentLang, movies]);

  return (
    <Box p={4} mt="48px" textAlign="center">
      <Title>
        {currentLang === 'uk-UA' ? 'Збережені фільми' : 'Saved movies'}
      </Title>

      <LibList>
        {library.map(movie => (
          <LibItem key={movie.id}>
            <NavLink to={`movies/${movie.id}`} state={{ from: location }}>
              <MovieCard movie={movie} />
            </NavLink>
          </LibItem>
        ))}
      </LibList>
    </Box>
  );
}
