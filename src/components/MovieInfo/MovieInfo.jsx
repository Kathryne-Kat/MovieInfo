import { NavLink, Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './movieInfo.module.css';

export const MovieInfo = ({
  title,
  poster_path,
  overview,
  vote_average,
  genres,
  release_date,
}) => {
  const year = release_date;
  const location = useLocation();
  const backPath = location.state?.from ?? '/';
  const movieGenres = genres.map(genre => genre.name).join(', ');
  return (
    <div className={css.container}>
      {/* <h1 className={css.titleList}>Movie Details</h1> */}
      <div className={css.flexContainer}>
        <img
          className={css.poster}
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt="title"
        />
        <div className={css.content}>
          <h2 className={css.title}>
            {title} ({year.slice(0, 4)})
          </h2>

          <p>Vote average: {vote_average}</p>

          <h3 className={css.overview}>Overview</h3>
          <p>{overview}</p>
          <h3 className={css.overview}>Genres</h3>
          <p>{movieGenres}</p>
        </div>
      </div>
      <div className={css.additional}>
        <p className={css.add}>Additional information</p>
        <ul>
          <li className={css.link}>
            <NavLink to="cast" state={{ from: backPath }}>
              Cast
            </NavLink>
          </li>
          <li className={css.link}>
            <NavLink to="reviews" state={{ from: backPath }}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
MovieInfo.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  release_date: PropTypes.string.isRequired,
};
