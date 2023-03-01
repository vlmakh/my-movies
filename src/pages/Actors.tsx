import { BcgActors } from 'components/Background/Background';
import { List, Item } from 'components/BaseComps/BaseComps';
import { SearchForm, SearchInput } from 'components/SearchComps/SearchComps';
import { SearchBtn, ClearBtn } from 'components/Buttons/Buttons';
import { PaginationStyled } from 'components/Pagination/Pagination';
import { ActorCard } from 'components/ActorCard/ActorCard';
import 'index.css';
import { NavLink } from 'react-router-dom';
import { PageWrap, Box } from 'components/Box/Box';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchActors } from 'services/api';
import { IoIosCloseCircle } from 'react-icons/io';
import toast from 'react-hot-toast';
import { t } from 'i18next';
import { IActor } from 'components/types';

export default function Actors() {
  const [actorsFound, setActorsFound] = useState<Array<IActor>>([]);
  const [searchQuery, setSearchQuery] = useSearchParams() as any;
  const query = searchQuery.get('search');
  const currentPage = Number(searchQuery.get('page'))
    ? Number(searchQuery.get('page'))
    : 1;
  const [input, setInput] = useState(query ?? '');
  const location = useLocation();
  const [totalPages, setTotalPages] = useState(1);
  const lang = t('lang');
  const actorName = t('placeholders.name')

  useEffect(() => {
    document.title = `My Movies | ${t('nav.actors')}`;

    if (!query) {
      return;
    }

    fetchActors(query, currentPage, lang)
      .then(data => {
        if (!data.results.length) {
          return toast.error(t('noResults'));
        } else {
          setTotalPages(data.total_pages);
          setActorsFound([...data.results]);
        }
      })
      .catch(error => console.log(error));
  }, [lang, currentPage, query]);

  const onSearchInput = (event: { target: { value: string}; }) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!input.trim()) {
      return toast.error(t('emptyQuery'));
    }
    if (input.trim() !== query) {
      setActorsFound([]);
      setSearchQuery({ search: input.trim(), page: 1 });
    }
  };

  const clearAll = () => {
    setInput('');
    setActorsFound([]);
    setSearchQuery({ search: '', page: 0 });
    setTotalPages(0);
  };

  const handlePageClick = (e: { selected: number; }) => {
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
            placeholder={actorName}
          />
          <ClearBtn type="button" onClick={clearAll}>
            <IoIosCloseCircle size="20" />
          </ClearBtn>
        </Box>
        <SearchBtn type="submit">{t('buttons.search')}</SearchBtn>
      </SearchForm>

      {!actorsFound.length && <BcgActors />}

      <List>
        {actorsFound.map(actor => (
          <Item key={actor.id}>
            <NavLink to={`${actor.id}`} state={{ from: location }}>
              <ActorCard actor={actor} />
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
          disabledLinkClassName="disabled"
          activeClassName="activePage"
          forcePage={currentPage - 1}
        />
      )}
    </PageWrap>
  );
}
