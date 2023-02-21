import { getTrendingMovies } from 'api/movies-service';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from 'pages/Cast';
import { Reviews } from 'pages/Reviews';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId/*" element={<MovieDetails />} />
        {/* <Route path="movies/:movieId/cast" element={<Cast />} />
        <Route path="movies/:movieId/reviews" element={<Reviews />} /> */}

        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  );
};

{
  /* <Route path="*" element={<Navigate to="/" replace={true} />}></Route>; */
}
