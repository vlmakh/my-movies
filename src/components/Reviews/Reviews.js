import {
  ReviewList,
  ReviewAuthor,
  ReviewText,
  ReviewNot,
} from './Reviews.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from 'services/api';

export default function Reviews({ currentLang }) {
  const params = useParams();
  //   console.log(params);
  const [reviews, setReviews] = useState(['review']);

  useEffect(() => {
    fetchReviewsById(params.movieId, currentLang).then(data => {
      //   console.log(data.results);
      setReviews(data.results);
    });
  }, [currentLang, params.movieId]);

  if (reviews.length === 0) {
    return (
      <>
        <ReviewNot>
          {currentLang === 'uk-UA'
            ? 'Немає інформації'
            : 'No information added'}
        </ReviewNot>
      </>
    );
  }

  return (
    <>
      <ReviewList>
        {reviews.map(review => (
          <li key={review.id}>
            <ReviewAuthor>{review.author}</ReviewAuthor>
            <ReviewText>{review.content}</ReviewText>
          </li>
        ))}
      </ReviewList>
    </>
  );
}
