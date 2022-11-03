// import PropTypes from 'prop-types';

// const MAIN_URL =
//   'https://pixabay.com/api/?key=29727763-9de4927242ac493db1fc7e125&image_type=photo&orientation=horizontal&safesearch=true';

// export const perPage = 12;

const fetchTrends = async search => {
  return fetch(
    'https://api.themoviedb.org/3/trending/all/day?api_key=7944ae355bdc42ac579681e106149d6b'
  )
    .then(response => response.json())
    .then(data => {
      // console.log(data);

      return data;
    });
};

export { fetchTrends };

// fetchTrends.propTypes = {
//   search: PropTypes.string,
//   page: PropTypes.number,
// };
