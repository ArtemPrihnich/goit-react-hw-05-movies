import Home from "components/Home/Home";
import Layout from "components/Layout/Layout";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='home' element={<Home />} />
        <Route path="movies" element={<div>MOVIES</div>} />
      </Route>
    </Routes>
  );
};
