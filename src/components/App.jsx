import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Trending } from 'pages/Trending/Trending';
import { PageError } from 'pages/PageError/PageError';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Trending/>} />
          <Route path="movies" element={<h3>Search Page</h3>}>
            <Route path="movieId" element={<h3>Movie Item</h3>} >
              <Route path="cast" element={<h3>Cast</h3>} />
              <Route path="reviews" element={<h3>Reviews</h3>} />
            </Route>
          </Route>
          <Route path="*" element={<PageError />} />
        </Route>
        <Route path="*" element={<PageError />} />
      </Routes>
    </>
  );
};
