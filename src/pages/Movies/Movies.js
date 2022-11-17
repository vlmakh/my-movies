import css from './Movies.module.css';
import { Link } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'services/api';
import { MovieCard } from 'components/MovieCard/MovieCard';

export default function Movies() {
  const [moviesFound, setMoviesFound] = useState([]);

  const [totalFound, setTotalFound] = useState(1);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('search') ?? '';
  const currentPage = searchQuery.get('page');
  const [page, setPage] = useState(currentPage ? Number(currentPage) : 1);
  const [input, setInput] = useState(query ? query : '');
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchMovies(query, page)
      .then(data => {
        if (!data.results.length) {
          alert('No results found due to your search inquiry');
        } else {
          setMoviesFound(prevState => {
            return [...prevState, ...data.results];
          });
          // console.log(data);
          setTotalFound(data.total_results);

          // setMoviesFound([...data.results]);
          // setTotalPages(data.total_pages);
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
      setSearchQuery({ search: input, page: page });
    }
  };

  const increasePage = () => {
    setPage(prevPage => prevPage + 1);
    setSearchQuery({ search: input, page: page + 1 });
  };

  const clearAll = () => {
    setInput('');
    setMoviesFound([]);
    setSearchQuery({ search: '', page: 1 });
  };

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
        <button type="button" className={css.search__btn} onClick={clearAll}>
          Clear
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

      {moviesFound.length > 0 && moviesFound.length < totalFound && (
        <button
          type="button"
          onClick={increasePage}
          className={css.loadmore__btn}
        >
          Load More
        </button>
      )}
    </Box>
  );
}
