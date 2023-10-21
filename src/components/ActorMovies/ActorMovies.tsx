import { List, Item } from 'components/BaseComps/BaseComps';
import { useState, useEffect } from 'react';
import {
  useParams,
  useLocation,
  NavLink,
  useSearchParams,
} from 'react-router-dom';
import { fetchMoviesByActor } from 'services/api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { t } from 'i18next';
import { IMovie } from 'components/types';
import { PaginationStyled } from 'components/Pagination/Pagination';

export default function ActorMovies() {
  const { actorId } = useParams() as any;
  const [movies, setMovies] = useState<IMovie[]>([]);
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

    fetchMoviesByActor(actorId, lang).then(data => {
      setMovies(
        data.cast
          .sort(
            (
              a: { release_date: any; first_air_date: any },
              b: { release_date: any; first_air_date: any }
            ) =>
              (b.release_date ?? b.first_air_date) >
              (a.release_date ?? a.first_air_date)
                ? 1
                : -1
          )
          .filter((_: any, ind: number) => ind >= start && ind < end)
      );

      setTotalPages(Math.ceil(data.cast.length / itemsPerPage));
    });
  }, [lang, actorId, currentPage]);

  const handlePageClick = (e: { selected: number }) => {
    setSearchQuery({ page: e.selected + 1 });
  };

  return (
    <>
      <List>
        {movies.map(movie => (
          <Item key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <MovieCard movie={movie} />
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
