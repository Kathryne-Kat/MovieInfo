import css from './cast.module.css';
import PropTypes from 'prop-types';
import notImag from 'img/http-404-not-found-error.jpg';

export const CastListItem = ({ character, name, profile_path }) => {
  const posterCast = `https://image.tmdb.org/t/p/w200${profile_path}`;
  return (
    <li className={css.linkActors}>
      <img
        className={css.actors}
        src={!profile_path ? notImag : posterCast}
        alt={name}
      />

      <h4 className={css.name}>{name}</h4>
      <p>Character: {character}</p>
    </li>
  );
};

CastListItem.propTypes = {
  character: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profile_path: PropTypes.string.isRequired,
};
