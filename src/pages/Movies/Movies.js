import { SearchForm, SearchInput, Background } from './Movies.styled';
import { List, Item } from '../Home/Home.styled';
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
import PropTypes from 'prop-types';

export default function Movies({ currentLang }) {
  const [moviesFound, setMoviesFound] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('search');
  const currentPage = Number(searchQuery.get('page'))
    ? Number(searchQuery.get('page'))
    : 1;
  const [input, setInput] = useState(query ?? '');
  const location = useLocation();
  // console.log(location);
  const [totalPages, setTotalPages] = useState(0);
  const noResults =
    currentLang === 'uk-UA'
      ? 'Немає результатів за вашим пошуковим запитом'
      : 'No results found due to your search inquiry';
  const emptyQuery =
    currentLang === 'uk-UA'
      ? 'Порожній запит. Введіть щось для пошуку'
      : 'Empty query. Please input something for search';

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchMovies(query, currentPage, currentLang)
      .then(data => {
        if (!data.results.length) {
          return toast.error(noResults);
        } else {
          // console.log(data);
          setTotalPages(data.total_pages);
          setMoviesFound([...data.results]);
        }
      })
      .catch(error => console.log(error));
  }, [currentLang, noResults, currentPage, query]);

  const onSearchInput = event => {
    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!input.trim()) {
      return toast.error(emptyQuery);
    }
    if (input.trim() !== query) {
      setMoviesFound([]);
      setSearchQuery({ search: input.trim(), page: 0 });
    }
  };

  const clearAll = () => {
    setInput('');
    setMoviesFound([]);
    setSearchQuery({ search: '', page: 0 });
    setTotalPages(0);
  };

  const handlePageClick = e => {
    // console.log(e);
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
            placeholder={currentLang === 'uk-UA' ? 'Назва фільму' : 'Film'}
          />
          <ClearBtn type="button" onClick={clearAll}>
            <IoIosCloseCircle size="20" />
          </ClearBtn>
        </Box>
        <SearchBtn type="submit">
          {currentLang === 'uk-UA' ? 'Пошук' : 'Search'}
        </SearchBtn>
      </SearchForm>

      {!moviesFound.length && <Background />}

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
          renderOnZeroPageCount={null}
          disabledLinkClassName="disabled"
          activeClassName="activePage"
          initialPage={currentPage - 1}
        />
      )}
    </PageWrap>
  );
}

Movies.propTypes = {
  currentLang: PropTypes.string.isRequired,
};
