import {
  MoviesList,
  MoviesItem,
  SearchForm,
  SearchInput,
  Background,
} from './Movies.styled';
import { SearchBtn, ClearBtn } from 'components/Buttons/Buttons';
import { PaginationStyled } from 'components/Pagination/Pagination';
import { MovieCard } from 'components/MovieCard/MovieCard';
import 'index.css';
import { NavLink } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'services/api';
import { IoIosCloseCircle } from 'react-icons/io';
import toast from 'react-hot-toast';

export default function Movies({ currentLang }) {
  const [moviesFound, setMoviesFound] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('search' ?? '');
  const currentPage = searchQuery.get('page' ?? '');
  const [page, setPage] = useState(currentPage ? Number(currentPage) : 1);
  const [input, setInput] = useState(query ? query : '');
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

    fetchMovies(query, page, currentLang)
      .then(data => {
        if (!data.results.length) {
          return toast.error(noResults);
        } else {
          // console.log(data.results);
          setTotalPages(data.total_pages);
          setMoviesFound([...data.results]);
        }
      })
      .catch(error => console.log(error));
  }, [currentLang, noResults, page, query]);

  const onSearchInput = event => {
    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!input.trim()) {
      return toast.error(emptyQuery);
    }
    if (input.trim() !== query) {
      setPage(1);
      setMoviesFound([]);
      setSearchQuery({ search: input, page: Number(page) });
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
    setPage(e.selected + 1);
    setSearchQuery({ search: input, page: e.selected + 1 });
  };

  return (
    <Box p={4} textAlign="center" mt="48px">
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

      <MoviesList>
        {moviesFound.map(movie => (
          <MoviesItem key={movie.id}>
            <NavLink to={`${movie.id}`} state={{ from: location }}>
              <MovieCard movie={movie} />
            </NavLink>
          </MoviesItem>
        ))}
      </MoviesList>

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
      />
    </Box>
  );
}
