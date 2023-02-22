import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import css from './moviesList.module.css';

export const MovieCard = ({ id, title, poster_path }) => {
  const location = useLocation();
  //console.log(location);

  if (!poster_path) return;
  const poster = `https://image.tmdb.org/t/p/w200${poster_path}`;
  return (
    <li className={css.poster}>
      <Link to={'/movies/' + id} state={{ from: location }}>
        <img src={poster} alt="title" />
        <h2 className={css.title}>{title}</h2>
      </Link>
    </li>
  );
};

MovieCard.propTypes = {
  //id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
};

// let poster = '';
// if (poster_path === null) {
//   poster =
//     './img/http-404-not-found-error-message-hypertext-vector-20025007.jpg';
// } else {
//   poster = `https://image.tmdb.org/t/p/w200${poster_path}`;
// }
