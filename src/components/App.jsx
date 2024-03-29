import React, { lazy, Suspense } from 'react';
import css from './App.module.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { Loader } from './Loader';

const LazyHome = lazy(() => import('pages/Home.jsx'));
const LazyMovies = lazy(() => import('pages/Movies.jsx'));
const LazyMovieDetails = lazy(() => import('pages/MovieDetails.jsx'));
const LazyCast = lazy(() => import('pages/Cast'));
const LazyReviews = lazy(() => import('pages/Reviews'));

export const App = () => {
  return (
    <div className={css.wrap}>
      <Header />

      <div className={css.section}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<LazyHome />} />
            <Route path="movies" element={<LazyMovies />} />
            <Route path="movies/:movieId/*" element={<LazyMovieDetails />}>
              <Route path="cast" element={<LazyCast />} />
              <Route path="reviews" element={<LazyReviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Routes>
        </Suspense>
      </div>
      <footer className={css.footer}>
        Movie App create by Kathryne-Kat | 2023
      </footer>
    </div>
  );
};
