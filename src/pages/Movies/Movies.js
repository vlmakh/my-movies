// import PropTypes from 'prop-types';
import css from './Movies.module.css';
import { Link } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'services/api';
import { MovieCard } from 'components/MovieCard/MovieCard';

export const Movies = () => {
  const [moviesFound, setMoviesFound] = useState([]);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = searchParams.get('search') ?? '';
  const [input, setInput] = useState(queryParams ? queryParams : '');
  console.log('queryParams: ', queryParams);
  console.log('input: ', input);

  // useEffect(() => {
  //   if (!queryParams) {
  //     return;
  //   }
  // }, [page, queryParams]);

  const onSearchInput = event => {
    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (input.trim() === '') {
      return alert('Empty query. Please input something for search');
    }
    searchQuery(input);
    setSearchParams(input !== '' ? { search: input } : {});
  };

  const searchQuery = newQuery => {
    if (newQuery.trim() !== input) {
      setPage(1);
      setInput(newQuery.trim());
      setMoviesFound([]);
    }

    fetchMovies(input, page).then(data => {
      if (!data.results.length) {
        alert('No results found due to your search inquiry');
      } else {
        // setMoviesFound(prevState => {
        //   return [...prevState, ...data.results];
        // });
        setMoviesFound([...data.results]);
      }
    });
  };

  // const loadMore = () => {
  //   setPage(prevPage => prevPage + 1);
  // };

  const searchRoute = `${location.pathname}${location.search}`;

  return (
    <Box p={4} textAlign="center" mt="48px">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={onSearchInput}
          className={css.search}
        />
        <button type="submit" className={css.search__btn}>
          Search
        </button>
      </form>

      <ul className={css.moviesList}>
        {moviesFound.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: searchRoute }}>
              <MovieCard movie={movie} />
            </Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </Box>
  );
};
