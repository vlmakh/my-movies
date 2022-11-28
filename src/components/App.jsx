import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { lazy, useState, useEffect } from 'react';
import { ThemeProvider } from 'theme-ui';
import { darkTheme, lightTheme } from 'theme';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Actors = lazy(() => import('pages/Actors/Actors'));
const MovieItem = lazy(() => import('pages/MovieItem/MovieItem'));
const ActorPage = lazy(() => import('pages/ActorPage/ActorPage'));
const Biography = lazy(() => import('components/Biography/Biography'));
const ActorMovies = lazy(() => import('components/ActorMovies/ActorMovies'));
const ActorImages = lazy(() => import('components/ActorImages/ActorImages'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Overview = lazy(() => import('components/Overview/Overview'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const PageError = lazy(() => import('pages/PageError/PageError'));

const startData = { theme: 'darkTheme', lang: 'en-US' };
const savedData = JSON.parse(localStorage.getItem('myvideos'));

export const App = () => {
  const [state, setState] = useState(savedData ? savedData : startData);
  const [currentTheme, setCurrentTheme] = useState(
    state.theme === 'darkTheme' ? darkTheme : lightTheme
  );
  // const [currentLang, setCurrentLang] = useState(startData.lang);

  useEffect(() => {
    setState({ theme: currentTheme.name, lang: 'en-US' });
  }, [currentTheme.name]);

  useEffect(() => {
    localStorage.setItem('myvideos', JSON.stringify(state));
  }, [state]);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme.name === 'darkTheme' ? lightTheme : darkTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Routes>
        <Route
          path="/"
          element={
            <SharedLayout
              toggleTheme={toggleTheme}
              currentTheme={currentTheme.name}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieItem />}>
            <Route path="overview" element={<Overview />} />
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="*" element={<PageError />} />
          </Route>
          <Route path="actors" element={<Actors />} />
          <Route path="actors/:actorId" element={<ActorPage />}>
            <Route path="biography" element={<Biography />} />
            <Route path="movies" element={<ActorMovies />} />
            <Route path="images" element={<ActorImages />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
