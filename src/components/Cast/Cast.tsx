import { List, Item } from 'components/BaseComps/BaseComps';
import { useState, useEffect } from 'react';
import { useParams, useLocation, NavLink, useSearchParams } from 'react-router-dom';
import { fetchCastById } from 'services/api';
import { ActorCard } from 'components/ActorCard/ActorCard';
import { t } from 'i18next';
import { ICast } from 'components/types';
import { PaginationStyled } from 'components/Pagination/Pagination';

export default function Cast() {
  const params = useParams() as any;
  const [cast, setCast] = useState<Array<ICast>>([]);
  const location = useLocation();
  const lang = t('lang');
  const [totalPages, setTotalPages] = useState(1);  
  const [searchQuery, setSearchQuery] = useSearchParams() as any;
  const currentPage = Number(searchQuery.get('page'))
    ? Number(searchQuery.get('page'))
    : 1;
  const itemsPerPage = 20;

  useEffect(() => {
    const start = itemsPerPage * (currentPage - 1);
    const end = itemsPerPage * currentPage;

    fetchCastById(params.movieId, lang).then(data => {
      setCast(data.cast.filter((_: any, ind: number) => ind >= start && ind < end));

      setTotalPages(Math.ceil(data.cast.length / itemsPerPage));
    });
  }, [currentPage, lang, params.movieId]);

  const handlePageClick = (e: { selected: number }) => {
    setSearchQuery({ page: e.selected + 1 });
  };

  return (
    <>
      <List>
        {cast.map(actor => (
          <Item key={actor.cast_id}>
            <NavLink to={`/actors/${actor.id}`} state={{ from: location }}>
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
    </>
  );
}
