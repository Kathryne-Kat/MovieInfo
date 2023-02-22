import { getMovieDetails } from 'api/movies-service';
import { BtnBack } from 'components/Btn/BtnBack';
import { Loader } from 'components/Loader';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useParams();
  useEffect(() => {
    if (!movieId) return;
    const getMovie = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(movieId);
        //console.log(data);
        setMovie(data);

        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovie();
  }, [movieId]);

  useEffect(() => {
    if (!error) return;
    alert(error);
  }, [error]);

  const backPath = location.state?.from ?? '/';
  return (
    <>
      <BtnBack path={backPath} />
      {movie && <MovieInfo {...movie} />}
      {loading && <Loader />}
    </>
  );
};

export default MovieDetails;
