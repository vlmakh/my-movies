import {
  MoviesList,
  MoviesItem,
  SearchForm,
  SearchInput,
  Background,
} from './Movies.styled';
import { SearchBtn, ClearBtn, LoadMoreBtn } from 'components/Buttons/Buttons';
import { MovieCard } from 'components/MovieCard/MovieCard';
import 'index.css';
import { NavLink } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'services/api';
import { IoIosCloseCircle } from 'react-icons/io';

// import Pagination from '@mui/material/Pagination';

export default function Movies({ currentLang }) {
  const [moviesFound, setMoviesFound] = useState([]);
  const [totalFound, setTotalFound] = useState(1);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('search' ?? '');
  const currentPage = searchQuery.get('page' ?? '');
  const [page, setPage] = useState(currentPage ? Number(currentPage) : 1);
  const [input, setInput] = useState(query ? query : '');
  const location = useLocation();
  // console.log(location);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchMovies(query, page, currentLang)
      .then(data => {
        if (!data.results.length) {
          alert('No results found due to your search inquiry');
        } else {
          // setMoviesFound(prevState => {
          //   return [...prevState, ...data.results];
          // });
          // console.log(data);
          setTotalFound(data.total_results);
          setTotalPages(data.total_pages);
          setMoviesFound([...data.results]);
        }
      })
      .catch(error => console.log(error));
  }, [currentLang, page, query]);

  const onSearchInput = event => {
    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (input.trim() === '') {
      return alert('Empty query. Please input something for search');
    }
    if (input.trim() !== query) {
      setPage(1);
      setMoviesFound([]);
      setSearchQuery({ search: input, page: Number(page) });
    }
  };

  const increasePage = () => {
    setPage(prevPage => prevPage + 1);
    setSearchQuery({ search: input, page: page + 1 });
  };

  const decreasePage = () => {
    setPage(prevPage => prevPage - 1);
    setSearchQuery({ search: input, page: page - 1 });
  };

  const clearAll = () => {
    setInput('');
    setMoviesFound([]);
    setSearchQuery({ search: '', page: 0 });
    setTotalPages(0);
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

      {moviesFound.length === 0 && <Background />}

      <MoviesList>
        {moviesFound.map(movie => (
          <MoviesItem key={movie.id}>
            <NavLink to={`${movie.id}`} state={{ from: location }}>
              <MovieCard movie={movie} />
            </NavLink>
          </MoviesItem>
        ))}
      </MoviesList>

      {/* <Box py={3} display="flex" justifyContent="center">
        {totalPages > 0 && (
          <Pagination
            count={totalPages}
            page={Number(currentPage)}
            onChange={(_, num) => {
              setSearchQuery({ search: input, page: Number(num) });
              setPage(num);
            }}
            siblingCount={1}
            boundaryCount={2}
            color="primary"
            showFirstButton
            showLastButton
          />
        )}
      </Box> */}

      {moviesFound.length > 0 && moviesFound.length < totalFound && (
        <>
          <LoadMoreBtn
            type="button"
            onClick={decreasePage}
            disabled={page === 1 ? true : false}
          >
            {currentLang === 'uk-UA' ? 'Назад' : 'Prev page'}
          </LoadMoreBtn>
          <LoadMoreBtn
            type="button"
            onClick={increasePage}
            disabled={page === totalPages ? true : false}
          >
            {currentLang === 'uk-UA' ? 'Далі' : 'Next page'}
          </LoadMoreBtn>
        </>
      )}
    </Box>
  );
}
