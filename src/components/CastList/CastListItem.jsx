import css from './cast.module.css';
import PropTypes from 'prop-types';

export const CastListItem = ({ character, name, profile_path }) => {
  return (
    <li className={css.linkActors}>
      {!profile_path ? (
        ''
      ) : (
        // <img
        //   className={css.actors}
        //   src={'/src/img/http-404-not-found-error.jpg'}
        //   alt={name}
        // />
        <img
          className={css.actors}
          src={`https://image.tmdb.org/t/p/w200${profile_path}`}
          alt={name}
        />
      )}
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
