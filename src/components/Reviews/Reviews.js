import {
  ReviewList,
  ReviewAuthor,
  ReviewText,
  ReviewNot,
} from './Reviews.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from 'services/api';

export default function Reviews() {
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
        <ReviewNot>No reviews found</ReviewNot>
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
