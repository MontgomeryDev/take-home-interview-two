import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import FetchMovies from "./components/FetchMovies";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {
    return (
      <>
      <Nav />
      <FetchMovies />
      <MovieList />
      <Footer />
      </>
    )
}

export default App;
