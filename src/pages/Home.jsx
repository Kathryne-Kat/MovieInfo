import { Loader } from 'components/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';

import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../api/movies-service';
// import css from '../components/MoviesList//moviesList.module.css';

const Home = () => {
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
      {/* <h1 className={css.titleList}>Trending Movies </h1> */}
      <section>{movies.length > 0 && <MoviesList movies={movies} />}</section>
      {loading && <Loader />}
    </>
  );
};

export default Home;
