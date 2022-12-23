import { Box } from 'components/Box/Box';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTrends } from 'services/api';
import { PageTitle, List, Item } from './Home.styled';
import 'index.css';
import { MovieCard } from 'components/MovieCard/MovieCard';

export default function Home({ currentLang }) {
  const [trends, setTrends] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrends(currentLang)
      .then(data => {
        // console.log(data.results);
        setTrends(data.results);
      })
      .catch(error => console.log(error));
  }, [currentLang]);

  return (
    <Box p={4} mt="48px" textAlign="center">
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
    </Box>
  );
}
