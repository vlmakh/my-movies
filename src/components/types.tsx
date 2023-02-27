import { Theme } from 'theme-ui';

export type StateType = {
  theme: string;
  lang: string;
  lib: string[];
  album: string[];
};

export interface IActor {
  name: string;
  character: string;
  profile_path: string;
}

export type ImageType = {
  file_path: string;
};

export interface IMovie {
  id: string;
  name: string;
  title: string;
  original_title: string;
  release_date: string;
  first_air_date: string;
  poster_path: string;
}

export interface ICast extends IActor {
  cast_id: string;
  id: string;
}

export interface IReview {
  id: string;
  author: string;
  content: string;
}

// const makeTheme = <T extends Theme>(t: T) => t

export interface ThemeType extends Theme {
  name: string;
  //   colors: {
  //     bcgMain: string,
  //     bcgHeader: string,
  //     bcgBtn: string,
  //     bcgTitle: string,
  //     textPrimary: string,
  //     textSecondary: string,
  //     textTitle: string,
  //     accent: string,
  //   },
  //   space: number[],
  //   fontSizes: {
  //     xs: string,
  //     s: string,
  //     m: string,
  //     l: string,
  //     xl: string,
  //   },
  //   borders: {
  //     none: string,
  //     normal: string,
  //   },
  //   radii: {
  //     none:string,
  //     normal: string,
  //     round: string,
  //   },
  //   shadows: {
  //     blackShadow: string,
  //     headerShadow: string,
  //     footerShadow: string,
  //   },
}
