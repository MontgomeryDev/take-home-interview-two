import React, { useState } from 'react';


const MovieList = () => {
    const [movies, setMovies] = useState(['Batman', 'Superman', 'Avengers', 'Zorro']);
    const [sortOrder, setSortOrder] = useState('A-Z');

const sortMovies = (sortType) => {
    let sortedMovies = [...movies]; // Create a copy of the movies array
    
    if (sortType === 'A-Z') {
        sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortType === 'Z-A') {
        sortedMovies.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortType === 'Newest') {
        sortedMovies.sort((a, b) => b.year - a.year); // Newest to oldest
    } else if (sortType === 'Oldest') {
        sortedMovies.sort((a, b) => a.year - b.year); // Oldest to newest
    }
  }

    return (
        <div>
            <select onChange={(e) => setSortOrder(e.target.value)}>
                <option value="A-Z">Sort A-Z</option>
                <option value="Z-A">Sort Z-A</option>
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
            </select>
            {/* <button onClick={sortMovies}>Sort Movies</button> */}

            <ul>
                    <div className="movies-grid">
        {movies.map(movie => (
            <div className="movies-card" key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} />
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
            </div>
        ))}
    </div>
                    
               
            </ul>
        </div>
    );
};

export default MovieList;