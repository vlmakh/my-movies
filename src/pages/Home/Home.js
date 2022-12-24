import { PageWrap } from 'components/Box/Box';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTrends } from 'services/api';
import { PageTitle, List, Item } from './Home.styled';
import 'index.css';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { PaginationStyled } from 'components/Pagination/Pagination';

export default function Home({ currentLang }) {
  const [trends, setTrends] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const location = useLocation();

  useEffect(() => {
    fetchTrends(currentLang, page)
      .then(data => {
        // console.log(data.results);
        setTrends(data.results);
        setTotalPages(data.total_pages);
      })
      .catch(error => console.log(error));
  }, [currentLang, page]);

  const handlePageClick = e => {
    // console.log(e);
    setPage(e.selected + 1);
    // setSearchQuery({ search: input, page: e.selected + 1 });
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
    </PageWrap>
  );
}
