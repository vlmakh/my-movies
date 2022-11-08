import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
// import Home from 'pages/Home/Home';

import { PageError } from 'pages/PageError/PageError';
// import { MovieItem } from 'pages/MovieItem/MovieItem';
// import { Movies } from 'pages/Movies/Movies';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { lazy } from "react";

const Home = lazy(() => import("pages/Home/Home"))
const Movies = lazy(() => import('pages/Movies/Movies'))
const MovieItem =lazy(() => import('pages/MovieItem/MovieItem'));

export const App = () => {
  return (
    <>      
      
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
