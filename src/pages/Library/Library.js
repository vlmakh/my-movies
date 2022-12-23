import { Box } from 'components/Box/Box';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PageTitle, List, Item } from '../Home/Home.styled';
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
      <PageTitle>
        {currentLang === 'uk-UA' ? 'Збережені фільми' : 'Saved movies'}
      </PageTitle>

      <List>
        {library.map(movie => (
          <Item key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <MovieCard movie={movie} />
            </NavLink>
          </Item>
        ))}
      </List>
    </Box>
  );
}
