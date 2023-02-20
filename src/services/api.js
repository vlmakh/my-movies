import PropTypes from 'prop-types';
import axios from 'axios';

const MAIN_URL = 'https://api.themoviedb.org/3';
const API_KEY = '7944ae355bdc42ac579681e106149d6b';

const fetchTrends = async (lang, page) => {
  const response = await axios.get(
    `${MAIN_URL}/trending/all/day?api_key=${API_KEY}&language=${lang}&page=${page}`
  );
  return response.data;
};

const fetchMovies = async (query, page, lang) => {
  const response = await axios.get(
    `${MAIN_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=${lang}&page=${page}&include_adult=false`
  );
  return response.data;
};

const fetchMovieById = async (id, lang) => {
  const response = await axios.get(
    `${MAIN_URL}/movie/${id}?api_key=${API_KEY}&language=${lang}`
  );
  return response.data;
};

const fetchCastById = async (id, lang) => {
  const response = await axios.get(
    `${MAIN_URL}/movie/${id}/credits?api_key=${API_KEY}&language=${lang}`
  );
  return response.data;
};

const fetchReviewsById = async (id, lang) => {
  const response = await axios.get(
    `${MAIN_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=${lang}&page=1`
  );
  return response.data;
};

const fetchMovieTrailer = async (id, lang) => {
  const response = await axios.get(
    `${MAIN_URL}/movie/${id}/videos?api_key=${API_KEY}&language=${lang}`
  );
  return response.data;
};

const fetchLibraryMovies = async (array, lang) => {
  const arrayOfMovies = array.map(async movie_id => {
    return await axios
      .get(`${MAIN_URL}/movie/${movie_id}?api_key=${API_KEY}&language=${lang}`)
      .then(response => {
        return response.data;
      })
      .catch(error => console.log(error));
  });

  const response = await Promise.all(arrayOfMovies);
  return response;
};

const fetchActors = async (query, page, lang) => {
  const response = await axios.get(
    `${MAIN_URL}/search/person?api_key=${API_KEY}&query=${query}&language=${lang}&page=${page}&include_adult=false`
  );
  return response.data;
};

const fetchActorById = async (id, lang) => {
  const response = await axios.get(
    `${MAIN_URL}/person/${id}?api_key=${API_KEY}&language=${lang}`
  );
  return response.data;
};

const fetchAlbumActors = async (array, lang) => {
  const arrayOfActors = array.map(async actor_id => {
    return await axios
      .get(`${MAIN_URL}/person/${actor_id}?api_key=${API_KEY}&language=${lang}`)
      .then(response => {
        return response.data;
      })
      .catch(error => console.log(error));
  });

  const response = await Promise.all(arrayOfActors);
  return response;
};

const fetchMoviesByActor = async (id, lang) => {
  const response = await axios.get(
    `${MAIN_URL}/person/${id}/movie_credits?api_key=${API_KEY}&language=${lang}`
  );
  return response.data;
};

const fetchImagesByActor = async id => {
  const response = await axios.get(
    `${MAIN_URL}/person/${id}/images?api_key=${API_KEY}`
  );
  return response.data;
};

export {
  fetchTrends,
  fetchMovies,
  fetchMovieById,
  fetchCastById,
  fetchReviewsById,
  fetchMovieTrailer,
  fetchLibraryMovies,
  fetchActors,
  fetchActorById,
  fetchAlbumActors,
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
