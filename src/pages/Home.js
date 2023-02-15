import { PageWrap } from 'components/Box/Box';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTrends } from 'services/api';
import { PageTitle, List, Item } from 'components/BaseComps/BaseComps';
import 'index.css';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { PaginationStyled } from 'components/Pagination/Pagination';
import { t } from 'i18next';

export default function Home() {
  const [trends, setTrends] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useSearchParams();
  const currentPage = Number(searchQuery.get('page'))
    ? Number(searchQuery.get('page'))
    : 1;
  const lang = t('lang');

  useEffect(() => {
    document.title = 'My Movies';

    fetchTrends(lang, currentPage)
      .then(data => {
        setTrends(data.results);
        setTotalPages(data.total_pages);
      })
      .catch(error => console.log(error));
  }, [lang, currentPage, setSearchQuery]);

  const handlePageClick = e => {
    setSearchQuery({ page: e.selected + 1 });
  };

  return (
    <PageWrap>
      <PageTitle>{t('title.home')}</PageTitle>

      <List>
        {trends.map(trend => (
          <Item key={trend.id}>
            <NavLink to={`movies/${trend.id}`} state={{ from: location }}>
              <MovieCard movie={trend} />
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
          renderOnZeroPageCount={null}
          disabledLinkClassName="disabled"
          activeClassName="activePage"
          forcePage={currentPage - 1}
        />
      )}
    </PageWrap>
  );
}
