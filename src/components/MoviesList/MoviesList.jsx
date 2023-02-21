import PropTypes from 'prop-types';
import { MovieCard } from './MovieCard';
import css from './moviesList.module.css';

export const MoviesList = ({ movies }) => {
  //console.log(movies);
  return (
    <ul className={css.moviesList}>
      {movies && movies.map(movie => <MovieCard key={movie.id} {...movie} />)}
    </ul>
  );
};

MoviesList.propType = {
  movie: PropTypes.object,
};
