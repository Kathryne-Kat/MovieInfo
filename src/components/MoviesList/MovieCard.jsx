import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import css from './moviesList.module.css';

export const MovieCard = ({ id, title, poster_path }) => {
  const location = useLocation();
  //console.log(location);

  // if (!poster_path) return;
  const poster = `https://image.tmdb.org/t/p/w200${poster_path}`;
  return (
    <li className={css.poster}>
      <Link to={'/movies/' + id} state={{ from: location }}>
        {!poster_path ? (
          <img src={'/src/img/http-404-not-found-error.jpg'} alt={title} />
        ) : (
          <img src={poster} alt="title" />
        )}
        <h2 className={css.title}>{title}</h2>
      </Link>
    </li>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
};
