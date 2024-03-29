import axios from 'axios';

const MAIN_URL = process.env.REACT_APP_MAIN_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const fetchTrends = async (lang: string, page: number, abortSignal: AbortSignal) => {
  const response = await axios.get(
    `${MAIN_URL}/trending/all/day?api_key=${API_KEY}&language=${lang}&page=${page}`, {signal: abortSignal});
  return response.data;
};

const fetchMovies = async (query: string, page: number, lang: string) => {
  const response = await axios.get(
    `${MAIN_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=${lang}&page=${page}&include_adult=false`
  );
  return response.data;
};

const fetchMovieById = async (id: string, lang: string) => {
  const response = await axios.get(
    `${MAIN_URL}/movie/${id}?api_key=${API_KEY}&language=${lang}`
  );
  return response.data;
};

const fetchCastById = async (id: string, lang: string) => {
  const response = await axios.get(
    `${MAIN_URL}/movie/${id}/credits?api_key=${API_KEY}&language=${lang}`
  );
  return response.data;
};

const fetchReviewsById = async (id: string, lang: string) => {
  const response = await axios.get(
    `${MAIN_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=${lang}&page=1`
  );
  return response.data;
};

const fetchMovieTrailer = async (id: string, lang: string) => {
  const response = await axios.get(
    `${MAIN_URL}/movie/${id}/videos?api_key=${API_KEY}&language=${lang}`
  );
  return response.data;
};

const fetchLibraryMovies = async (array: any[], lang: string) => {
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

const fetchActors = async (query: string, page: number, lang: string) => {
  const response = await axios.get(
    `${MAIN_URL}/search/person?api_key=${API_KEY}&query=${query}&language=${lang}&page=${page}&include_adult=false`
  );
  return response.data;
};

const fetchActorById = async (id: string, lang: string) => {
  const response = await axios.get(
    `${MAIN_URL}/person/${id}?api_key=${API_KEY}&language=${lang}`
  );
  return response.data;
};

const fetchAlbumActors = async (array: any[], lang: string) => {
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

const fetchMoviesByActor = async (id: string, lang: string) => {
  const response = await axios.get(
    `${MAIN_URL}/person/${id}/movie_credits?api_key=${API_KEY}&language=${lang}`
  );
  return response.data;
};

const fetchImagesByActor = async (id: string) => {
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
