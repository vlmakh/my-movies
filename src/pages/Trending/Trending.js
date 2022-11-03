import { Box } from 'components/Box/Box';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTrends } from 'services/api';
import css from './Trending.module.css';

export const Trending = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetchTrends().then(data => {
      console.log(data.results);
      setTrends(data.results);
    });
  }, []);

  return (
    <Box p={4}>
      <h2>Trending Today</h2>

      <ul className={css.trendList}>
        {trends.map(trend => (
          <li key={trend.id}>
            <Link to={`/movies/movieId`}>
              <div className={css.trend__thumb}>
                <img
                  className={css.trend__img}
                  width="160"
                  src={`https://image.tmdb.org/t/p/w200${trend.poster_path}`}
                  alt={trend.title ?? trend.name}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  );
};
