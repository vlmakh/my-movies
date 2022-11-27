import PropTypes from 'prop-types';
import axios from 'axios';

const MAIN_URL = 'https://api.themoviedb.org/3';
const API_KEY = '7944ae355bdc42ac579681e106149d6b';

// export const perPage = 12;
// language=uk-UA

const fetchTrends = async () => {
  const response = await axios.get(
    `${MAIN_URL}/trending/all/day?api_key=${API_KEY}&page=1`
  );
  return response.data;
};

const fetchMovies = async (query, page) => {
  const response = await axios.get(
    `${MAIN_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
  );
  return response.data;
};

const fetchMovieById = async id => {
  const response = await axios.get(
    `${MAIN_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

const fetchCastById = async id => {
  const response = await axios.get(
    `${MAIN_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

const fetchReviewsById = async id => {
  const response = await axios.get(
    `${MAIN_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
};

const fetchActors = async (query, page) => {
  const response = await axios.get(
    `${MAIN_URL}/search/person?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
  );
  return response.data;
};

const fetchActorById = async id => {
  const response = await axios.get(
    `${MAIN_URL}/person/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

const fetchMoviesByActor = async id => {
  const response = await axios.get(
    `${MAIN_URL}/person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

const fetchImagesByActor = async id => {
  const response = await axios.get(
    `${MAIN_URL}/person/${id}/images?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export {
  fetchTrends,
  fetchMovies,
  fetchMovieById,
  fetchCastById,
  fetchReviewsById,
  fetchActors,
  fetchActorById,
  fetchMoviesByActor,
  fetchImagesByActor,
};

fetchMovies.propTypes = {
  query: PropTypes.string,
  page: PropTypes.number,
};

fetchMovieById.propTypes = {
  id: PropTypes.string,
};

fetchCastById.propTypes = {
  id: PropTypes.string,
};

fetchReviewsById.propTypes = {
  id: PropTypes.string,
};
