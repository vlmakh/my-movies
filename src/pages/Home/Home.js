import { Box } from 'components/Box/Box';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTrends } from 'services/api';
import { TrendsList, TrendsItem } from './Home.styled';
import 'index.css';
import { MovieCard } from 'components/MovieCard/MovieCard';

export default function Home() {
  const [trends, setTrends] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrends().then(data => {
      // console.log(data);
      setTrends(data.results);
    });
  }, []);

  return (
    <Box p={3} mt="48px" textAlign="center">
      <h2>Trending Today</h2>

      <TrendsList>
        {trends.map(trend => (
          <TrendsItem key={trend.id}>
            <NavLink to={`movies/${trend.id}`} state={{ from: location }}>
              <MovieCard movie={trend} />
            </NavLink>
          </TrendsItem>
        ))}
      </TrendsList>
    </Box>
  );
}
