import { PageWrap } from 'components/Box/Box';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PageTitle, List, Item } from 'components/BaseComps/BaseComps';
import 'index.css';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { fetchLibraryMovies } from 'services/api';
import { t } from 'i18next';
import { IMovie, MoviesType } from 'components/types';

export default function Library({ movies }: MoviesType) {
  const [library, setLibrary] = useState<Array<IMovie>>([]);
  const location = useLocation();
  const lang = t('lang');

  useEffect(() => {
    document.title = `My Movies | ${t('nav.library')}`;

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
