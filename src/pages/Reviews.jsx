import { getMovieReviews } from 'api/movies-service';
import { Loader } from 'components/Loader';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useParams();
  useEffect(() => {
    if (!movieId) return;
    const getReviews = async () => {
      try {
        setLoading(true);
        const data = await getMovieReviews(movieId);
        setReviews(data);
        //console.log(data);

        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  useEffect(() => {
    if (!error) return;
    alert(error);
  }, [error]);
  // console.log(reviews);

  return (
    <>
      {reviews && <ReviewsList reviews={reviews} />}
      {loading && <Loader />}
    </>
  );
};

export default Reviews;
