import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { lazy } from 'react';
import { ThemeProvider } from 'theme-ui';
import { darkTheme, lightTheme } from '../theme';
import { useState } from 'react';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Actors = lazy(() => import('pages/Actors/Actors'));
const MovieItem = lazy(() => import('pages/MovieItem/MovieItem'));
const ActorPage = lazy(() => import('pages/ActorPage/ActorPage'));
const Biography = lazy(() => import('components/Biography/Biography'))
const ActorMovies = lazy(() => import('components/ActorMovies/ActorMovies'));
const ActorImages = lazy(() => import('components/ActorImages/ActorImages'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Overview = lazy(() => import('components/Overview/Overview'))
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const PageError = lazy(() => import('pages/PageError/PageError'));

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === darkTheme ? lightTheme : darkTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Routes>
        <Route path="/" element={<SharedLayout toggleTheme={toggleTheme} />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieItem />}>
            <Route path="overview" element={<Overview/>} />
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="*" element={<PageError />} />
          </Route>
          <Route path="actors" element={<Actors />} />
          <Route path="actors/:actorId" element={<ActorPage />}>
            <Route path="biography" element={<Biography/>} />
            <Route path="works" element={<ActorMovies />} />
            <Route path="images" element={<ActorImages />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
