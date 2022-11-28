import { Box } from 'components/Box/Box';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTrends } from 'services/api';
import { HomeTitle, TrendsList, TrendsItem } from './Home.styled';
import 'index.css';
import { MovieCard } from 'components/MovieCard/MovieCard';

export default function Home({ currentLang }) {
  const [trends, setTrends] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrends(currentLang).then(data => {
      // console.log(data.results);
      setTrends(data.results);
    });
  }, [currentLang]);

  return (
    <Box p={3} mt="48px" textAlign="center">
      <HomeTitle>
        {currentLang === 'en-US' ? 'Trending Today' : 'Популярні сьогодні'}
      </HomeTitle>

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
