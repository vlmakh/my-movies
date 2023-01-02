import { PageWrap } from 'components/Box/Box';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTrends } from 'services/api';
import { PageTitle, List, Item } from './Home.styled';
import 'index.css';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { PaginationStyled } from 'components/Pagination/Pagination';
import PropTypes from 'prop-types';

export default function Home({ currentLang }) {
  const [trends, setTrends] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useSearchParams();
  const currentPage = Number(searchQuery.get('page'))
    ? Number(searchQuery.get('page'))
    : 1;
  // const [page, setPage] = useState(currentPage ? Number(currentPage) : 1);

  useEffect(() => {
    fetchTrends(currentLang, currentPage)
      .then(data => {
        // console.log(data.results);
        setTrends(data.results);
        setTotalPages(data.total_pages);
      })
      .catch(error => console.log(error));
  }, [currentLang, currentPage, setSearchQuery]);

  const handlePageClick = e => {
    // console.log(e);
    // setPage(e.selected + 1);
    setSearchQuery({ page: e.selected + 1 });
  };

  return (
    <PageWrap>
      <PageTitle>
        {currentLang === 'uk-UA' ? 'Популярні сьогодні' : 'Trending Today'}
      </PageTitle>

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
          initialPage={currentPage - 1}
        />
      )}
    </PageWrap>
  );
}

Home.propTypes = {
  currentLang: PropTypes.string.isRequired,
};
