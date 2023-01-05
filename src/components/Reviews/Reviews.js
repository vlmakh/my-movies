import {
  ReviewList,
  ReviewAuthor,
  ReviewText,
  ReviewNot,
} from './Reviews.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from 'services/api';
import PropTypes from 'prop-types';

export default function Reviews({ currentLang }) {
  const params = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviewsById(params.movieId, currentLang).then(data => {
      // console.log(data.results);
      setReviews(data.results);
    });
  }, [currentLang, params.movieId]);

  return (
    <>
      {!reviews.length ? (
        <ReviewNot>
          {currentLang === 'uk-UA'
            ? 'Немає інформації'
            : 'No information added'}
        </ReviewNot>
      ) : (
        <ReviewList>
          {reviews.map(review => (
            <li key={review.id}>
              <ReviewAuthor>{review.author}</ReviewAuthor>
              <ReviewText>{review.content}</ReviewText>
            </li>
          ))}
        </ReviewList>
      )}
    </>
  );
}

Reviews.propTypes = {
  currentLang: PropTypes.string.isRequired,
};
