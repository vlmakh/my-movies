import {
  ActorsList,
  ActorsPerson,
  SearchInput,
  Background,
  SearchForm,
} from './Actors.styled';

import { SearchBtn, ClearBtn } from 'components/Buttons/Buttons';
import { PaginationStyled } from 'components/Pagination/Pagination';
import { ActorCard } from 'components/ActorCard/ActorCard';
import 'index.css';
import { NavLink } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchActors } from 'services/api';
import { IoIosCloseCircle } from 'react-icons/io';

export default function Movies({ currentLang }) {
  const [actorsFound, setActorsFound] = useState([]);
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

    fetchActors(query, page, currentLang)
      .then(data => {
        if (!data.results.length) {
          alert('No results found due to your search inquiry');
        } else {
          // console.log(data.results);
          // setTotalFound(data.total_results);
          setTotalPages(data.total_pages);
          setActorsFound([...data.results]);
        }
      })
      .catch(error => console.log(error));
  }, [currentLang, page, query]);

  const onSearchInput = event => {
    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!input.trim()) {
      return alert('Empty query. Please input something for search');
    }
    if (input.trim() !== query) {
      setPage(1);
      setActorsFound([]);
      setSearchQuery({ search: input, page: Number(page) });
    }
  };

  const clearAll = () => {
    setInput('');
    setActorsFound([]);
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
            placeholder={currentLang === 'uk-UA' ? "Ім'я" : 'Name'}
          />
          <ClearBtn type="button" onClick={clearAll}>
            <IoIosCloseCircle size="20" />
          </ClearBtn>
        </Box>
        <SearchBtn type="submit">
          {currentLang === 'uk-UA' ? 'Пошук' : 'Search'}
        </SearchBtn>
      </SearchForm>

      {!actorsFound.length && <Background />}

      <ActorsList>
        {actorsFound.map(actor => (
          <ActorsPerson key={actor.id}>
            <NavLink to={`${actor.id}`} state={{ from: location }}>
              <ActorCard actor={actor} />
            </NavLink>
          </ActorsPerson>
        ))}
      </ActorsList>

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
