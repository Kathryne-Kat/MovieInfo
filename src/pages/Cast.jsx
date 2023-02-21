import { getMovieCredits } from 'api/movies-service';
import { CastList } from 'components/CastList/CastList';
import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useParams();
  useEffect(() => {
    if (!movieId) return;
    const getCast = async () => {
      try {
        setLoading(true);
        const data = await getMovieCredits(movieId);
        setCasts(data);

        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  useEffect(() => {
    if (!error) return;
    alert(error);
  }, [error]);

  return (
    <>
      {casts && <CastList casts={casts} />}
      {loading && <Loader />}
    </>
  );
};
