// import { Cast } from 'pages/Cast';
// import { Reviews } from 'pages/Reviews';
import { lazy, Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

const LazyCast = lazy(() => import('pages/Cast'));
const LazyReviews = lazy(() => import('pages/Reviews'));

export const MovieInfo = ({
  title,
  poster_path,
  overview,
  vote_average,
  genres,
  release_date,
}) => {
  const year = release_date;

  const movieGenres = genres.map(genre => genre.name).join(', ');
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="title" />
      <h2>{title}</h2>
      <span>{year.slice(0, 4)}</span>
      <p>Vote average: {vote_average}</p>

      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{movieGenres}</p>
      <p>Additional information</p>
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
      <Suspense>
        <Routes>
          <Route path="cast" element={<LazyCast />} />
          <Route path="reviews" element={<LazyReviews />} />
        </Routes>
      </Suspense>
    </>
  );
};
