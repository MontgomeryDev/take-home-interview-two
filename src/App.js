import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import FetchMovies from "./components/FetchMovies";
import MovieList from "./components/MovieList";
import "./index.css";
import MovieDetails from './components/MovieDetails';

function App() {
  const [searchQuery, setSearchQuery] = useState("marvel");
    return (
        <Router>
      <Nav setSearchQuery={setSearchQuery} />

      <Routes>
        <Route
          path="/"
          element={<FetchMovies searchQuery={searchQuery} />}
        />
      </Routes>
      <Routes>
  <Route
    path="/"
    element={<FetchMovies searchQuery={searchQuery} />}
  />
  <Route
    path="/movie/:imdbID"
    element={<MovieDetails />}
  />
</Routes>
    
      <Footer />
    </Router>
    );
}

export default App;
