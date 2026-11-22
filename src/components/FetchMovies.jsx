import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const FetchMovies = ({ searchQuery }) => {
    const [movies, setMovies] = useState([]); // State to hold the movie data
    const [loading, setLoading] = useState(true); // State to handle loading status
    const [error, setError] = useState(null); // State to handle any potential errors
    const [sortOrder, setSortOrder] = useState("default");

const sortedMovies = [...movies].sort((a, b) => {
  if (sortOrder === "A-Z") {
    return a.Title.localeCompare(b.Title);
  }
  if (sortOrder === "Z-A") {
    return b.Title.localeCompare(a.Title);
  }
  if (sortOrder === "Newest") {
    return Number(b.Year) - Number(a.Year);
  }
  if (sortOrder === "Oldest") {
    return Number(a.Year) - Number(b.Year);
  }
  return 0;
});

    // Step 2: Use useEffect to Fetch Data
  useEffect(() => {
  const fetchMovies = async () => {
    if (!searchQuery) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "https://www.omdbapi.com/",
        {
          params: {
            apikey: "d3791b44",
            s: searchQuery,
          },
        }
      );

      setMovies(response.data.Search || []);
    } catch (err) {
      setError(err);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  fetchMovies();
}, [searchQuery]);

    // Step 3: Handle Loading and Error States
    if (loading) {
  return (
    <div className="movies-grid">
      {Array.from({ length: 10 }).map((_, index) => (
        <div className="movie-card--skeleton" key={index}>
          <div className="movie-card__img--skeleton" />
          <div className="movie-card__title--skeleton" />
          <div className="movie-card__year--skeleton" />
        </div>
      ))}
    </div>
  );
}
    if (error) return <div>Error: {error.message}</div>;

    // Step 4: Render the Movies
return (
  <>
    <div className="controls">
      <p>Showing results for: {searchQuery}</p>

      <select
        id="sortSelect"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
      </select>
    </div>

<div className="movies-grid">
  {sortedMovies.map((movie) => (
    <Link
      to={`/movie/${movie.imdbID}`}
      key={movie.imdbID}
    >
      <div className="movie-card">
        {movie.Poster !== "N/A" ? (
          <img
            className="movie-card__img"
            src={movie.Poster}
            alt={movie.Title}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/300x450?text=Poster+Unavailable";
            }}
          />
        ) : (
          <div className="movie-card__poster-placeholder">
            Poster Not Available
          </div>
        )}

        <h3 className="movie-card__title">
          {movie.Title}
        </h3>
        <p className="movie-card__year">
          {movie.Year}
        </p>
      </div>
    </Link>
  ))}
</div>
  </>
);
};

export default FetchMovies;