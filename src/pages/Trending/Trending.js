import { Box } from 'components/Box/Box';
import { useState } from 'react';
import { fetchTrends } from 'services/api';

export const Trending = () => {
  const [trends, setTrends] = useState([]);

  fetchTrends().then(data => {
    console.log(data.results);
    setTrends(data.results);
  });

  return (
    <Box p={4}>
      <h2>Trending Today</h2>

      <ul>
        {trends.map(trend => (
          <li key={trend.id}>{trend.title ?? trend.name}</li>
        ))}
      </ul>
    </Box>
  );
};
