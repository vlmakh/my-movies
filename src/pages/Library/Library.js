import { Box } from 'components/Box/Box';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Title, TrendsList, TrendsItem } from './Library.styled';
import 'index.css';
import { MovieCard } from 'components/MovieCard/MovieCard';

export default function Library({ currentLang }) {
  const [trends, setTrends] = useState([]);
  const location = useLocation();

  useEffect(() => {}, []);

  return (
    <Box p={4} mt="48px" textAlign="center">
      <Title>
        {currentLang === 'uk-UA' ? 'ЗБережені фільми' : 'Saved movies'}
      </Title>

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
