import Home from "components/Home/Home";
import Layout from "components/Layout/Layout";
import { Link, Route, Routes } from "react-router-dom";
import { lazy } from "react";

const MovieInfo = lazy(() => import('../../pages/MovieInfo/MovieInfo'))
const Cast = lazy(() => import('../../pages/Cast/Cast'))
const Reviews = lazy(() => import('../../pages/Reviews/Reviews'))
const Movies = lazy(() => import('../Movies/Movies'))


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieInfo />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<div>Not Found you can go to {<Link to={'/'}>Home page</Link>} or {<Link to={'movies'}>Movies page</Link>}</div>} />
    </Routes>
  );
};
