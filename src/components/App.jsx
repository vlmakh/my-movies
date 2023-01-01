import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { lazy, useState, useEffect } from 'react';
import { ThemeProvider } from 'theme-ui';
import { darkTheme, lightTheme } from 'theme';
import { Toaster } from 'react-hot-toast';

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
const Trailer = lazy(() => import('components/Trailer/Trailer'));
const Library = lazy(() => import('pages/Library/Library'));
const Album = lazy(() => import('pages/Album/Album'));
const PageError = lazy(() => import('pages/PageError/PageError'));

const startData = { theme: 'darkTheme', lang: 'en-US', lib: [], album: [] };
const savedData = JSON.parse(localStorage.getItem('movieteka'));

export const App = () => {
  const [state, setState] = useState(savedData ? savedData : startData);
  const [currentTheme, setCurrentTheme] = useState(
    state.theme === 'darkTheme' ? darkTheme : lightTheme
  );
  const [currentLang, setCurrentLang] = useState(state.lang);
  const [libMovies, setLibMovies] = useState(state.lib);
  const [favActors, setFavActors] = useState(state.album);

  useEffect(() => {
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
    setCurrentLang('en-US');
  };

  const turnUaLang = () => {
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
              currentLang={currentLang}
              turnEnLang={turnEnLang}
              turnUaLang={turnUaLang}
            />
          }
        >
          <Route index element={<Home currentLang={currentLang} />} />
          <Route path="movies" element={<Movies currentLang={currentLang} />} />
          <Route
            path="movies/:movieId"
            element={
              <MovieItem
                toggleMovieInLibrary={toggleMovieInLibrary}
                currentLang={currentLang}
                movies={libMovies}
              />
            }
          >
            <Route
              path="overview"
              element={<Overview currentLang={currentLang} />}
            />
            <Route path="cast" element={<Cast currentLang={currentLang} />} />
            <Route
              path="reviews"
              element={<Reviews currentLang={currentLang} />}
            />
            <Route
              path="trailer"
              element={<Trailer currentLang={currentLang} />}
            />
            <Route path="*" element={<PageError currentLang={currentLang} />} />
          </Route>
          <Route path="actors" element={<Actors currentLang={currentLang} />} />
          <Route
            path="actors/:actorId"
            element={
              <ActorPage
                currentLang={currentLang}
                toggleActorsInAlbum={toggleActorsInAlbum}
                actors={favActors}
              />
            }
          >
            <Route
              path="biography"
              element={<Biography currentLang={currentLang} />}
            />
            <Route
              path="movies"
              element={<ActorMovies currentLang={currentLang} />}
            />
            <Route path="images" element={<ActorImages />} />
          </Route>
          <Route
            path="library"
            element={<Library movies={libMovies} currentLang={currentLang} />}
          />
          <Route
            path="album"
            element={<Album currentLang={currentLang} actors={favActors} />}
          />      
        </Route>
        <Route path="*" element={<PageError />} />
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
