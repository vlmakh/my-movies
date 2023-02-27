import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { lazy, useState, useEffect, useCallback } from 'react';
import { ThemeProvider } from 'theme-ui';
import { darkTheme, lightTheme } from 'services/theme';
import { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { StateType, ThemeType } from './types';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const Actors = lazy(() => import('pages/Actors'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const ActorDetails = lazy(() => import('pages/ActorDetails'));
const Biography = lazy(() => import('components/Biography/Biography'));
const ActorMovies = lazy(() => import('components/ActorMovies/ActorMovies'));
const ActorImages = lazy(() => import('components/ActorImages/ActorImages'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Overview = lazy(() => import('components/Overview/Overview'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Trailer = lazy(() => import('components/Trailer/Trailer'));
const Library = lazy(() => import('pages/Library'));
const Album = lazy(() => import('pages/Album'));
const PageError = lazy(() => import('pages/PageError'));


const startData: StateType = {
  theme: 'darkTheme',
  lang: 'en-US',
  lib: [],
  album: [],
};

const value = localStorage.getItem('movieteka');
let savedData: StateType | null = null;

if (typeof value === 'string') {
  savedData = JSON.parse(value);
}

export const App = () => {
  const [data, setData] = useState(savedData ?? startData);
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(
    data.theme === 'darkTheme' ? darkTheme : lightTheme
  );
  const [currentLang, setCurrentLang] = useState(data.lang);
  const [libMovies, setLibMovies] = useState<Array<string>>(data.lib);
  const [favActors, setFavActors] = useState(data.album);

  const { i18n } = useTranslation();
  const changeLanguage = useCallback(
    (language: string) => {
      i18n.changeLanguage(language);
    },
    [i18n]
  );

  useEffect(() => {
    changeLanguage(currentLang.slice(0, 2));

    setData({
      theme: currentTheme.name,
      lang: currentLang,
      lib: libMovies,
      album: favActors,
    });
  }, [currentTheme.name, currentLang, libMovies, favActors, changeLanguage]);

  useEffect(() => {
    localStorage.setItem('movieteka', JSON.stringify(data));
  }, [data]);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme.name === 'darkTheme' ? lightTheme : darkTheme);
  };

  const turnEnLang = () => {
    setCurrentLang('en-US');
  };

  const turnUaLang = () => {
    setCurrentLang('uk-UA');
  };

  const toggleMovieInLibrary = (movieId: string) => {
    if (libMovies.includes(movieId)) {
      setLibMovies(libMovies.filter((id: string) => id !== movieId));
      return;
    }

    setLibMovies([...libMovies, movieId]);
  };

  const toggleActorsInAlbum = (actorId: string) => {
    if (favActors.includes(actorId)) {
      setFavActors(favActors.filter((id: string) => id !== actorId));
      return;
    }

    setFavActors([...favActors, actorId]);
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
              turnEnLang={turnEnLang}
              turnUaLang={turnUaLang}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route
            path="movies/:movieId"
            element={
              <MovieDetails
                toggleMovieInLibrary={toggleMovieInLibrary}
                movies={libMovies}
              />
            }
          >
            <Route path="overview" element={<Overview />} />
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="trailer" element={<Trailer />} />
            <Route path="*" element={<PageError />} />
          </Route>
          <Route path="actors" element={<Actors />} />
          <Route
            path="actors/:actorId"
            element={
              <ActorDetails
                toggleActorsInAlbum={toggleActorsInAlbum}
                actors={favActors}
              />
            }
          >
            <Route path="biography" element={<Biography />} />
            <Route path="movies" element={<ActorMovies />} />
            <Route path="images" element={<ActorImages />} />
          </Route>
          <Route path="library" element={<Library movies={libMovies} />} />
          <Route path="album" element={<Album actors={favActors} />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />
    </ThemeProvider>
  );
};
