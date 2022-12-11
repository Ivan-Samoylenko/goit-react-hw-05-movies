import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { ReviewsList, ReviewsListItem, Author, Text } from './Reviews.styled';
import { getMovieReviews } from 'services';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async function getReviews() {
      try {
        const {
          status,
          data: { results },
        } = await getMovieReviews(movieId);

        if (status !== 200) {
          throw new Error('Failed to load reviews, try reloading the page.');
        }

        setReviews(results);
      } catch (error) {
        if (error.response && error.response.data.status_message) {
          toast.error(error.response.data.status_message);
          return;
        }

        toast.error(error.message);
      }
    })();
  }, [movieId]);

  return (
    <>
      {reviews && (
        <ReviewsList>
          {reviews.map(review => (
            <ReviewsListItem key={review.id}>
              <Author>Author: {review.author}</Author>
              <Text>{review.content}</Text>
            </ReviewsListItem>
          ))}
        </ReviewsList>
      )}
      {(!reviews || reviews.length < 1) && <div>There are no reviews</div>}
    </>
  );
}
