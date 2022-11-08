import css from './Reviews.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from 'services/api';

export const Reviews = () => {
  const params = useParams();
  //   console.log(params);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviewsById(params.movieId).then(data => {
      //   console.log(data.results);
      setReviews(data.results);
    });
  }, [params.movieId]);

  if (reviews.length === 0) {
    return (
      <>
        <p>No reviews found</p>
      </>
    );
  }

  return (
    <>
      <ul className={css.reviewList}>
        {reviews.map(review => (
          <li key={review.id} className={css.reviewItem}>
            <p className={css.reviewAuthor}>{review.author}</p>
            <p className={css.reviewText}>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
