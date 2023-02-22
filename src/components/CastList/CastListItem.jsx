import css from './cast.module.css';

export const CastListItem = ({ character, name, profile_path }) => {
  let photo = '';
  if (profile_path === null || profile_path === undefined) {
    photo = '/src/img/http-404-not-found-error.jpg';
    //photo = '#';
  } else {
    photo = `https://image.tmdb.org/t/p/w200${profile_path}`;
  }
  return (
    <li className={css.linkActors}>
      <img className={css.actors} src={photo} alt={name} />
      <h4 className={css.name}>{name}</h4>
      <p>Character: {character}</p>
    </li>
  );
};
