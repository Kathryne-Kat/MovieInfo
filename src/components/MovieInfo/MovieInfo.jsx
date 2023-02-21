import { Cast } from 'pages/Cast';
import { Reviews } from 'pages/Reviews';
import { NavLink, Route, Routes } from 'react-router-dom';

export const MovieInfo = ({
  title,
  poster_path,
  overview,
  vote_average,
  genres,
}) => {
  const movieGenres = genres.map(genre => genre.name).join(', ');
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="title" />
      <h1>{title}</h1>
      <p>Vote average: {vote_average}</p>

      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{movieGenres}</p>
      <p>Additional information</p>
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </>
  );
};
