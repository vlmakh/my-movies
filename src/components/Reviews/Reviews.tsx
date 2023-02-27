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
import { IReview } from 'components/types';

export default function Reviews() {
  const params = useParams() as any;
  const [reviews, setReviews] = useState<Array<IReview>>([]);
  const lang = t('lang');

  useEffect(() => {
    fetchReviewsById(params.movieId, lang).then(data => {
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
