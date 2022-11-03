import css from './Movies.module.css';
import { Link } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { fetchMovies } from 'services/api';

export const Movies = () => {
  const [movieSearch, setMovieSearch] = useState('');
  const [moviesFound, setMoviesFound] = useState([]);
  const [page, setPage] = useState(1);

  const onSearchInput = event => {
    setMovieSearch(event.currentTarget.value);
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
      console.log(data.results);
      console.log(data);
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

  // useEffect(() => {
  // }, [movieSearch, page]);

  // const loadMore = () => {
  //   setPage(prevPage => prevPage + 1);
  // };

  return (
    <Box p={4}>
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
            <Link to={`/movies/movieId`}>
              <div className={css.movie__thumb}>
                <img
                  className={css.movie__img}
                  width="160"
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
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
