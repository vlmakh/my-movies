import {
  ReviewList,
  ReviewAuthor,
  ReviewText,
  ReviewNot,
} from './Reviews.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from 'services/api';
import { t } from 'i18next';

export default function Reviews() {
  const params = useParams();
  const [reviews, setReviews] = useState([]);
  const lang = t('lang');

  useEffect(() => {
    fetchReviewsById(params.movieId, lang).then(data => {
      // console.log(data.results);
      setReviews(data.results);
    });
  }, [lang, params.movieId]);

  return (
    <>
      {!reviews.length ? (
        <ReviewNot>{t('notFoundMsg')}</ReviewNot>
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
