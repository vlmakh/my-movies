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
  const [moviesToShow, setMoviesToShow] = useState<IMovie[]>([]);
  const [searchQuery, setSearchQuery] = useSearchParams() as any;
  const currentPage = Number(searchQuery.get('page'))
    ? Number(searchQuery.get('page'))
    : 1;

  const itemsPerPage = 20;

  useEffect(() => {
    fetchMoviesByActor(actorId, lang).then(data => {
      setMovies(
        data.cast.sort(
          (
            a: { release_date: any; first_air_date: any },
            b: { release_date: any; first_air_date: any }
          ) =>
            (b.release_date ?? b.first_air_date) >
            (a.release_date ?? a.first_air_date)
              ? 1
              : -1
        )
      );

      setMoviesToShow([
        ...data.cast.filter((_: any, ind: number) => ind >= 0 && ind < itemsPerPage),
      ]);

      setTotalPages(Math.ceil(data.cast.length / itemsPerPage));
    });
  }, [lang, actorId]);

  const handlePageClick = (e: { selected: number }) => {
    setSearchQuery({ page: e.selected + 1 });

    const start = itemsPerPage * e.selected;
    const end = itemsPerPage * (e.selected + 1);

    setMoviesToShow([...movies.filter((el, ind) => ind >= start && ind < end)]);
  };

  return (
    <>
      <List>
        {moviesToShow.map(movie => (
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
