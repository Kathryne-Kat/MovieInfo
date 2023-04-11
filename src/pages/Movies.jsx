import { getMovieByQuery } from 'api/movies-service';
import { Loader } from 'components/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getTrendingMovies, getPopularMovies } from '../api/movies-service';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search');

  //console.log(setSearchParams);

  useEffect(() => {
    const getTrending = async () => {
      try {
        setLoading(true);
        const data = await getPopularMovies();
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
    if (!query) return;

    const getMovies = async () => {
      try {
        setLoading(true);
        const data = await getMovieByQuery(query);
        setMovies(data);
        //console.log(data);

        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, [query]);

  useEffect(() => {
    if (!error) return;
    alert(error);
  }, [error]);

  return (
    <>
      <section>
        <SearchForm />
        {!!movies?.length && <MoviesList movies={movies} />}
      </section>
      {loading && <Loader />}
    </>
  );
};
export default Movies;
