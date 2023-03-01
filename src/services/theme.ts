import { ITheme } from 'components/types';

export const darkTheme: ITheme = {
  name: 'darkTheme',
  colors: {
    bcgMain: '#3b4351',
    bcgHeader: '#333333',
    bcgBtn: '#bcc3ce',
    bcgTitle: '#bcc3ce99',
    textPrimary: '#bcc3ce',
    textSecondary: '#212121',
    textTitle: '#ffffff',
    accent: '#ff0000',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fontSizes: {
    xs: '12px',
    s: '16px',
    m: '20px',
    l: '28px',
    xl: '40px',
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },
  shadows: {
    blackShadow: '0 0 8px rgba(0, 0, 0, 0.6)',
    headerShadow: '0 4px 8px rgba(255, 255, 255, 0.6)',
    footerShadow: '0 -2px 8px rgba(255, 255, 255, 0.6)',
  },
};

export const lightTheme: ITheme = {
  name: 'lightTheme',
  colors: {
    bcgMain: '#dfdfdf',
    bcgHeader: '#bcc3ce',
    bcgBtn: '#333',
    bcgTitle: '#333333cc',
    textPrimary: '#333333',
    textSecondary: '#bcc3ce',
    textTitle: '#212121',
    accent: '#ff0000',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fontSizes: {
    xs: '12px',
    s: '16px',
    m: '20px',
    l: '28px',
    xl: '40px',
  },

  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },
  shadows: {
    blackShadow: '0 0 8px rgba(0, 0, 0, 0.6)',
    headerShadow: '0 4px 8px rgba(0, 0, 0, 0.6)',
    footerShadow: '0 -2px 8px rgba(0, 0, 0, 0.6)',
  },
};
