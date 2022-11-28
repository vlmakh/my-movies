import {
  ActorsList,
  ActorsPerson,
  SearchBtn,
  SearchInput,
  LoadMoreBtn,
  Background,
} from './Actors.styled';
import { ActorCard } from 'components/ActorCard/ActorCard';
import 'index.css';
import { NavLink } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchActors } from 'services/api';

export default function Movies() {
  const [actorsFound, setActorsFound] = useState([]);
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

    fetchActors(query, page)
      .then(data => {
        if (!data.results.length) {
          alert('No results found due to your search inquiry');
        } else {
          // setactorsFound(prevState => {
          //   return [...prevState, ...data.results];
          // });
          // console.log(data);
          setTotalFound(data.total_results);
          setTotalPages(data.total_pages);
          setActorsFound([...data.results]);
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
      setActorsFound([]);
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
    setActorsFound([]);
    setSearchQuery({ search: '', page: 0 });
    setTotalPages(0);
  };

  // const searchRoute = `${location.pathname}${location.search}`;

  return (
    <Box p={4} textAlign="center" mt="48px">
      <form onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          value={input}
          onChange={onSearchInput}
          placeholder="Name"
        />
        <SearchBtn type="submit">Search</SearchBtn>
        <SearchBtn type="button" onClick={clearAll}>
          Clear
        </SearchBtn>
      </form>

      {actorsFound.length === 0 && <Background />}

      <ActorsList>
        {actorsFound.map(actor => (
          <ActorsPerson key={actor.id}>
            <NavLink to={`${actor.id}`} state={{ from: location }}>
              <ActorCard actor={actor} />
            </NavLink>
          </ActorsPerson>
        ))}
      </ActorsList>

      {actorsFound.length > 0 && actorsFound.length < totalFound && (
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
