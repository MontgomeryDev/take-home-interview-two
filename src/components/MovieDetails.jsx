import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {useEffect, useState} from 'react';
import axios from 'axios';

const MovieDetails = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?apikey=d3791b44&i=${imdbID}`)
      .then((res) => setMovie(res.data));
  }, [imdbID]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details__container">
      <Link to="/">← Back to Movies</Link>
      <div className="movie-details__content">
  <div>
    <img
      className="movie-details__poster"
      src={movie.Poster}
      alt={movie.Title}
    />
    <h1>{movie.Title}</h1>
    <p>Year: {movie.Year}</p>
    <p>Rating: {movie.imdbRating}</p>
    <p>Released: {movie.Released}</p>
  </div>

<div className="movie-details__info">
  <div className="movie-details__detail">
    <h3>Genre</h3>
    <p>{movie.Genre}</p>
  </div>

  <div className="movie-details__detail">
    <h3>Writer</h3>
    <p>{movie.Writer}</p>
  </div>

  <div className="movie-details__detail">
    <h3>Actors</h3>
    <p>{movie.Actors}</p>
  </div>

  <div className="movie-details__detail">
    <h3>Plot</h3>
    <p>{movie.Plot}</p>
  </div>

  <div className="movie-details__detail">
    <h3>Language</h3>
    <p>{movie.Language}</p>
  </div>

  <div className="movie-details__detail">
    <h3>Awards</h3>
    <p>{movie.Awards}</p>
  </div>
</div>
</div>
</div>
  );
};

export default MovieDetails;