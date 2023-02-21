import { Loader } from 'components/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState } from 'react';
import { useEffect } from 'react';
import { getTrendingMovies } from '../api/movies-service';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrending = async () => {
      try {
        setLoading(true);
        const data = await getTrendingMovies();
        setMovies(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getTrending();
  }, []);

  useEffect(() => {
    if (!error) return;
    alert(error);
  }, [error]);

  return (
    <>
      <section>
        <h1>Trending Movies </h1>
        {movies.length > 0 && <MoviesList movies={movies} />}
      </section>
      {loading && <Loader />}
    </>
  );
};
