import { PageWrap } from 'components/Box/Box';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PageTitle, List, Item } from '../Home/Home.styled';
import 'index.css';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { fetchLibraryMovies } from 'services/api';
import PropTypes from 'prop-types';

export default function Library({ movies, currentLang }) {
  const [library, setLibrary] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchLibraryMovies(movies, currentLang).then(data => {
      setLibrary(data);
    });
  }, [currentLang, movies]);

  return (
    <PageWrap>
      <PageTitle>
        {currentLang === 'uk-UA' ? 'Улюблені фільми' : 'Favorite movies'}
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
    </PageWrap>
  );
}

Library.propTypes = {
  currentLang: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
};
