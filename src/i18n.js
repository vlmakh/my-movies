import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      lang: 'en-US',
      title: {
        home: 'Trending today',
        library: 'Favorite movies',
        photoalbum: 'Favotite actors',
      },
      nav: {
        movies: 'Movies',
        actors: 'Actors',
        library: 'Library',
        photoalbum: 'Photoalbum',
      },
      buttons: {
        search: 'Search',
        back: 'Back',
        home: 'Home',
        overview: 'Overview',
        cast: 'Cast',
        reviews: 'Reviews',
        trailer: 'Trailer',
        save: 'Save',
        saved: 'Saved',
        biography: 'Biography',
        movies: 'Movies',
        photo: 'Photo',
      },
      placeholders: {
        name: 'Name',
        film: 'Film',
      },
      actor: {
        birth: 'Birth date: ',
        death: 'Death date: ',
        homepage: 'Homepage: ',
      },
      notFoundMsg: 'No information added',
      noResults: 'No results found due to your search inquiry',
      emptyQuery: 'Empty query. Please input something for search',
    },
  },
  uk: {
    translation: {
      lang: 'uk-UA',
      title: {
        home: 'Популярні сьогодні',
        library: 'Улюблені фільми',
        photoalbum: 'Улюблені актори',
      },
      nav: {
        movies: 'Фільми',
        actors: 'Актори',
        library: 'Бібліотека',
        photoalbum: 'Фотоальбом',
      },
      buttons: {
        search: 'Пошук',
        back: 'Назад',
        home: 'Додому',
        overview: 'Огляд',
        cast: 'В ролях',
        reviews: 'Відгуки',
        trailer: 'Трейлер',
        save: 'Зберегти',
        saved: 'Збережено',
        biography: 'Біографія',
        movies: 'Фільми',
        photo: 'Фото',
      },
      placeholders: {
        name: "Ім'я",
        film: 'Назва фільму',
      },
      actor: {
        birth: 'Дата народження: ',
        death: 'Дата смерті: ',
        homepage: 'Сторінка: ',
      },
      notFoundMsg: 'Немає інформації',
      noResults: 'Немає результатів за вашим пошуковим запитом',
      emptyQuery: 'Порожній запит. Введіть щось для пошуку',
    },
  },
};

i18n
  // Подключение бэкенда i18next
  .use(Backend)
  // Автоматическое определение языка
  .use(LanguageDetector)
  // модуль инициализации
  .use(initReactI18next)
  .init({
    lng: 'en',
    // Стандартный язык
    // fallbackLng: 'en',
    // debug: true,
    // Распознавание и кэширование языковых кук
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;
