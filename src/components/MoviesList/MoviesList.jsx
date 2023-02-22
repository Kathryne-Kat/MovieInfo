import PropTypes from 'prop-types';
import { MovieCard } from './MovieCard';
import css from './moviesList.module.css';

export const MoviesList = ({ movies }) => {
  //console.log(movies);
  return (
    <div className={css.container}>
   
      <ul className={css.moviesList}>
        {movies && movies.map(movie => <MovieCard key={movie.id} {...movie} />)}
      </ul>
    </div>
  );
};

MoviesList.propType = {
  movie: PropTypes.object,
};
