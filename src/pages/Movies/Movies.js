// import PropTypes from 'prop-types';
import css from './Movies.module.css';
import { Link } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'services/api';
import imageplaceholder from 'images/noposter.jpg';

export const Movies = () => {
  const [movieSearch, setMovieSearch] = useState('');
  const [moviesFound, setMoviesFound] = useState([]);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  // const filterParams = searchParams.get('filter') ?? '';
  // console.log(searchParams);

  useEffect(() => {
    const filmName = searchParams.get('search');
    //   if (!filmName) {
    //     return;
    //   }
    console.log(filmName);

    //   fetchMovies(movieSearch, page).then(data => {
    //     if (!data.results.length) {
    //       alert('No results found due to your search inquiry');
    //     } else {
    //       setMoviesFound(prevState => {
    //         return [...prevState, ...data.results];
    //       });

    //     }
    //   });
  }, [searchParams]);

  const onSearchInput = event => {
    setMovieSearch(event.target.value);
    setSearchParams(
      event.target.value !== '' ? { search: event.target.value } : {}
    );
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (movieSearch.trim() === '') {
      return alert('Empty query. Please input something for search');
    }
    searchQuery(movieSearch);
  };

  const searchQuery = newQuery => {
    if (movieSearch === '') {
      return;
    }
    // if (newQuery.trim() !== query) {
    setPage(1);
    // setQuery(newQuery.trim());
    setMoviesFound([]);
    // }

    fetchMovies(movieSearch, page).then(data => {
      // console.log(data.results);
      // console.log(data);
      if (!data.results.length) {
        alert('No results found due to your search inquiry');
      } else {
        setMoviesFound(prevState => {
          return [...prevState, ...data.results];
        });
        // setMoviesFound([...data.results]);
      }
    });
  };

  // const loadMore = () => {
  //   setPage(prevPage => prevPage + 1);
  // };

  const a = `${location.pathname}${location.search}`;
  // console.log(a);

  return (
    <Box p={4} textAlign="center" mt="48px">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={movieSearch}
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
            <Link to={`${movie.id}`} state={{ from: a }}>
              <div className={css.movie__thumb}>
                <img
                  className={css.movie__img}
                  width="160"
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                      : imageplaceholder
                  }
                  alt={movie.title ?? movie.name}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </Box>
  );
};
