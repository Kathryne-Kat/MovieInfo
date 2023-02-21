export const CastListItem = ({ character, name, profile_path }) => {
  return (
    <li className="">
      <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} />
      <h2>{name}</h2>
      <p>Character: {character}</p>
    </li>
  );
};
