import { PageWrap } from 'components/Box/Box';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PageTitle, List, Item } from '../Home/Home.styled';
import 'index.css';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { fetchLibraryMovies } from 'services/api';
import PropTypes from 'prop-types';
import { t } from 'i18next';

export default function Library({ movies, currentLang }) {
  const [library, setLibrary] = useState([]);
  const location = useLocation();
  const lang = t('lang');

  useEffect(() => {
    fetchLibraryMovies(movies, lang).then(data => {
      setLibrary(data);
    });
  }, [lang, movies]);

  return (
    <PageWrap>
      <PageTitle>{t('title.library')}</PageTitle>

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
  movies: PropTypes.array.isRequired,
};
