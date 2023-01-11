import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { lazy, useState, useEffect } from 'react';
import { ThemeProvider } from 'theme-ui';
import { darkTheme, lightTheme } from 'theme';
import { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Actors = lazy(() => import('pages/Actors/Actors'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const ActorDetails = lazy(() => import('pages/ActorDetails/ActorDetails'));
const Biography = lazy(() => import('components/Biography/Biography'));
const ActorMovies = lazy(() => import('components/ActorMovies/ActorMovies'));
const ActorImages = lazy(() => import('components/ActorImages/ActorImages'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Overview = lazy(() => import('components/Overview/Overview'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Trailer = lazy(() => import('components/Trailer/Trailer'));
const Library = lazy(() => import('pages/Library/Library'));
const Album = lazy(() => import('pages/Album/Album'));
const PageError = lazy(() => import('pages/PageError/PageError'));

const startData = { theme: 'darkTheme', lang: t('lang'), lib: [], album: [] };
const savedData = JSON.parse(localStorage.getItem('movieteka'));

export const App = () => {
  const [state, setState] = useState(savedData ?? startData);
  const [currentTheme, setCurrentTheme] = useState(
    state.theme === 'darkTheme' ? darkTheme : lightTheme
  );
  const [currentLang, setCurrentLang] = useState(state.lang);
  const [libMovies, setLibMovies] = useState(state.lib);
  const [favActors, setFavActors] = useState(state.album);

  const { i18n } = useTranslation();
  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };
  // const lang = t('lang');
  // changeLanguage(currentLang.slice(0,2));
  console.log(currentLang.slice(0, 2))

  useEffect(() => {
    // if (currentLang === t('lang')) {
    //   return;
    // }

    setState({
      theme: currentTheme.name,
      lang: currentLang,
      lib: libMovies,
      album: favActors,
    });
  }, [currentTheme.name, currentLang, libMovies, favActors]);

  useEffect(() => {
    // console.log(state)
    localStorage.setItem('movieteka', JSON.stringify(state));
  }, [state]);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme.name === 'darkTheme' ? lightTheme : darkTheme);
  };

  const turnEnLang = () => {
    changeLanguage('en');
    setCurrentLang('en-US');
  };

  const turnUaLang = () => {
    changeLanguage('uk');
    setCurrentLang('uk-UA');
  };

  const toggleMovieInLibrary = movieId => {
    if (libMovies.includes(movieId)) {
      setLibMovies(libMovies.filter(id => id !== movieId));
      return;
    }

    setLibMovies([...libMovies, movieId]);
  };

  const toggleActorsInAlbum = actorId => {
    if (favActors.includes(actorId)) {
      setFavActors(favActors.filter(id => id !== actorId));
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
