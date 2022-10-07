import Home from "components/Home/Home";
import Layout from "components/Layout/Layout";
import MovieInfo from "../../pages/MovieInfo/MovieInfo";
import Movies from "components/Movies/Movies";
import { Route, Routes } from "react-router-dom";
import Cast from "pages/Cast/Cast";
import Reviews from "pages/Reviews/Reviews";
// import movieAPI from '../../services/MovieDatabaseAPI'
// import { useEffect, useState } from 'react'

export const App = () => {
  //   const [storage, setStorage] = useState(null)
  //   useEffect(() => {
  //     async function foo() {
  //       try {
  //         const res = await movieAPI.trendingMovies()
  //         setStorage(() => {
  //           return [...res.data.results]
  //         })
  //       } catch (error) {
  //         console.log(error)
  //       }
  //     }
  //     foo()
  //   }, [])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='/' element={<Home />}>
          {/* <Route path="movies/:movieId" element={<div>test</div>} /> */}
        </Route>
        <Route path="movies" element={<Movies />} >
          <Route path=":movieId" element={<MovieInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
