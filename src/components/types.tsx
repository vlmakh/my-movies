import { Theme } from 'theme-ui';

export interface IState {
  theme: string;
  lang: string;
  lib: string[];
  album: string[];
};

export interface IActor {
  id: string;
  name: string;
  character: string;
  profile_path: string;
  birthday: string;
  deathday: string;
  homepage: string;
  biography: string;
}

export interface IImage {
  file_path: string;
};

interface IGenre {
  name: string;
}

export interface IMovie {
  id: string;
  name: string;
  title: string;
  original_title: string;
  release_date: string;
  first_air_date: string;
  poster_path: string;
  type: string;
  overview: string;
  vote_average: number;
  runtime: number;
  genres: Array<IGenre>;
}

export interface ICast extends IActor {
  cast_id: string;
}

export interface IReview {
  id: string;
  author: string;
  content: string;
}

export interface ILayout {
  toggleTheme: () => void;
  currentTheme: string;
  turnEnLang: () => void;
  turnUaLang: () => void;
};

export type MoviesType = {
  movies: Array<string>;
};

export type ActorsType = {
  actors: Array<string>;
};

export type ActorDetailsType = {
  actors: Array<string>;
  toggleActorsInAlbum: (x: string) => void;
};

export type MovieDetailsType = {
  movies: Array<string>;
  toggleMovieInLibrary: (x: string) => void;
};

export interface ITheme extends Theme {
  name: string;
}
