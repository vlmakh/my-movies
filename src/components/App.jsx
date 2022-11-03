// import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Trending } from 'pages/Trending/Trending';
import { PageError } from 'pages/PageError/PageError';
import { MovieItem } from 'pages/MovieItem/MovieItem'
import { Movies } from 'pages/Movies/Movies'
import { Cast } from './Cast/Cast';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Trending />}>
            {/* <Route path="movieId" element={<MovieItem/>} ></Route> */}
          </Route>
          <Route path="movies" element={<Movies/>}>
            <Route path=":movieId" element={<MovieItem/>} >
              <Route path="cast" element={<Cast/>} />
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
