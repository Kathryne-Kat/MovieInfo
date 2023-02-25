import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import notImag from 'img/pngwing.com (3).png';

import css from './moviesList.module.css';

export const MovieCard = ({ id, title, poster_path }) => {
  const location = useLocation();
  const poster = `https://image.tmdb.org/t/p/w200${poster_path}`;
  return (
    <li className={css.poster}>
      <Link to={'/movies/' + id} state={{ from: location }}>
        <img
          className={css.posterImg}
          src={!poster_path ? notImag : poster}
          alt={title}
        />
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
