// import PropTypes from 'prop-types';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Home } from 'pages/Home/Home';
import { PageError } from 'pages/PageError/PageError';
import { MovieItem } from 'pages/MovieItem/MovieItem';
import { Movies } from 'pages/Movies/Movies';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      {/* <SharedLayout /> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieItem />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews/>} />
            <Route path="*" element={<PageError />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
      
    </>
  );
};
