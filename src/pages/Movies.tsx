import { BcgMovies } from 'components/Background/Background';
import { List, Item } from 'components/BaseComps/BaseComps';
import { SearchForm, SearchInput } from 'components/SearchComps/SearchComps';
import { SearchBtn, ClearBtn } from 'components/Buttons/Buttons';
import { PaginationStyled } from 'components/Pagination/Pagination';
import { MovieCard } from 'components/MovieCard/MovieCard';
import 'index.css';
import { NavLink } from 'react-router-dom';
import { Box, PageWrap } from 'components/Box/Box';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'services/api';
import { IoIosCloseCircle } from 'react-icons/io';
import toast from 'react-hot-toast';
import { t } from 'i18next';
import { IMovie } from 'components/types';

export default function Movies() {
  const [moviesFound, setMoviesFound] = useState<Array<IMovie>>([]);
  const [searchQuery, setSearchQuery] = useSearchParams() as any;
  const query = searchQuery.get('search');
  const currentPage = Number(searchQuery.get('page'))
    ? Number(searchQuery.get('page'))
    : 1;
  const [input, setInput] = useState(query ?? '');
  const location = useLocation();
  const [totalPages, setTotalPages] = useState(0);
  const lang = t('lang');
  const film = t('placeholders.film')

  useEffect(() => {
    document.title = `My Movies | ${t('nav.movies')}`;

    if (!query) {
      return;
    }

    fetchMovies(query, currentPage, lang)
      .then(data => {
        if (!data.results.length) {
          return toast.error(t('noResults'));
        } else {
          setTotalPages(data.total_pages);
          setMoviesFound([...data.results]);
        }
      })
      .catch(error => console.log(error));
  }, [lang, currentPage, query]);

  const onSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!input.trim()) {
      return toast.error(t('emptyQuery'));
    }
    if (input.trim() !== query) {
      setMoviesFound([]);
      setSearchQuery({ search: input.trim(), page: 1 });
    }
  };

  const clearAll = () => {
    setInput('');
    setMoviesFound([]);
    setSearchQuery({ search: '', page: 0 });
    setTotalPages(0);
  };

  const handlePageClick = (e: { selected: number; }) => {
    setSearchQuery({ search: input, page: e.selected + 1 });
  };

  return (
    <PageWrap>
      <SearchForm onSubmit={handleSubmit}>
        <Box position="relative" flexGrow="1">
          <SearchInput
            type="text"
            value={input}
            onChange={onSearchInput}
            placeholder={film}
          />
          <ClearBtn type="button" onClick={clearAll}>
            <IoIosCloseCircle size="20" />
          </ClearBtn>
        </Box>
        <SearchBtn type="submit">{t('buttons.search')}</SearchBtn>
      </SearchForm>

      {!moviesFound.length && <BcgMovies />}

      <List>
        {moviesFound.map(movie => (
          <Item key={movie.id}>
            <NavLink to={`${movie.id}`} state={{ from: location }}>
              <MovieCard movie={movie} />
            </NavLink>
          </Item>
        ))}
      </List>

      {totalPages > 1 && (
        <PaginationStyled
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel="<"
          disabledLinkClassName="disabled"
          activeClassName="activePage"
          forcePage={currentPage - 1}
        />
      )}
    </PageWrap>
  );
}
