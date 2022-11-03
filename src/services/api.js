// import PropTypes from 'prop-types';

const MAIN_URL = 'https://api.themoviedb.org/3';
const API_KEY = '7944ae355bdc42ac579681e106149d6b';

// export const perPage = 12;

const fetchTrends = async () => {
  return fetch(`${MAIN_URL}/trending/all/day?api_key=${API_KEY}&page=1`)
    .then(response => response.json())
    .then(data => {
      // console.log(data);

      return data;
    });
};

const fetchMovies = async (query, page) => {
  return fetch(
    `${MAIN_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
  )
    .then(response => response.json())
    .then(data => {
      // console.log(data);

      return data;
    });
};

export { fetchTrends, fetchMovies };

// fetchTrends.propTypes = {
//   search: PropTypes.string,
//   page: PropTypes.number,
// };
