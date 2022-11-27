import {
  MoviesList,
  MoviesItem,
  SearchBtn,
  SearchInput,
  LoadMoreBtn,
  Background,
} from './Movies.styled';
import { MovieCard } from 'components/MovieCard/MovieCard';
import 'index.css';
import { NavLink } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'services/api';

// import Pagination from '@mui/material/Pagination';

export default function Movies() {
  const [moviesFound, setMoviesFound] = useState([]);
  const [totalFound, setTotalFound] = useState(1);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('search') ?? '';
  const currentPage = searchQuery.get('page');
  const [page, setPage] = useState(currentPage ? Number(currentPage) : 1);
  const [input, setInput] = useState(query ? query : '');
  const location = useLocation();
  // console.log(location);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchMovies(query, page)
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
  }, [page, query]);

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
      <form onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          value={input}
          onChange={onSearchInput}
          placeholder="Film"
        />
        <SearchBtn type="submit">Search</SearchBtn>
        <SearchBtn type="button" onClick={clearAll}>
          Clear
        </SearchBtn>
      </form>

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
            Prev Page
          </LoadMoreBtn>
          <LoadMoreBtn
            type="button"
            onClick={increasePage}
            disabled={page === totalPages ? true : false}
          >
            Next Page
          </LoadMoreBtn>
        </>
      )}
    </Box>
  );
}
