import React, { lazy, Suspense } from 'react';
// import { Home } from 'pages/Home';
// import { Movies } from 'pages/Movies';
// import { MovieDetails } from 'pages/MovieDetails';

import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { Loader } from './Loader';

const LazyHome = lazy(() => import('pages/Home.jsx'));
const LazyMovies = lazy(() => import('pages/Movies.jsx'));
const LazyMovieDetails = lazy(() => import('pages/MovieDetails.jsx'));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="movies" element={<LazyMovies />} />
          <Route path="movies/:movieId/*" element={<LazyMovieDetails />} />
          {/* <Route path="movies/:movieId/cast" element={<Cast />} />
          <Route path="movies/:movieId/reviews" element={<Reviews />} /> */}

          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
