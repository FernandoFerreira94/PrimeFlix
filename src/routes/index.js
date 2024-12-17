import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Filme from "../Pages/Filmes";
import Header from "../Components/header";
import Page404 from "../Pages/Page404";

export default function RouterApp() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmes/:id" element={<Filme />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}
