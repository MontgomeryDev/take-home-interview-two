import React, {useEffect, useState} from 'react';
import axios from 'axios';


// const moviesGrid = document.getElementById("moviesGrid");

// function displayMovies(movies) {
//   const moviesGrid = document.getElementById("moviesGrid");

//   moviesGrid.innerHTML = movies.map((movie) => {
//     return `
//       <div class="movie-card">
//         ${
//           movie.poster !== "N/A"
//             ? `<img
//                 class="movie-card__img"
//                 src="${movie.poster}"
//                 alt="${movie.title}"
//               />`
//             : `<div class="movie-card__poster-placeholder">
//                 Movie Poster<br>Not Available
//               </div>`
//         }

//         <h2 class="movie-card__title">${movie.title}</h2>
//         <p class="movie-card__year">${movie.year}</p>
//       </div>
//     `;
//   }).join("");
// }

const MovieList = ({ movies }) => {
    return (
        <div className="movies-grid">
            {movies.map((movie) => (
                <div className="movie-card" key={movie.imdbID}>
                    {movie.Poster !== "N/A" ? (
                        <img
                            className="movie-card__img"
                            src={movie.Poster}
                            alt={movie.Title}
                        />
                    ) : (
                        <div className="movie-card__poster-placeholder">
                            Movie Poster<br />Not Available
                        </div>
                    )}
                    <h2 className="movie-card__title">{movie.Title}</h2>
                    <p className="movie-card__year">{movie.Year}</p>
                </div>
            ))}
        </div>
    );
};

const FetchMovies = () => {
    const [movies, setMovies] = useState([]); // State to hold the movie data
    const [loading, setLoading] = useState(true); // State to handle loading status
    const [error, setError] = useState(null); // State to handle any potential errors

    // Step 2: Use useEffect to Fetch Data
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://www.omdbapi.com/?apikey=d3791b44&s=marvel'); // Replace with your API URL
                console.log(response.data);
                setMovies(response.data.Search); // Assuming the data you need is directly in response.data
            } catch (err) {
                setError(err); // Set error if the API call fails
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchMovies(); // Call the function to fetch movies
    }, []); // Empty dependency array means this runs once on mount

    // Step 3: Handle Loading and Error States
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    // Step 4: Render the Movies
    return (
    <div>
        {loading ? (
            <p>Loading...</p>
        ) : error ? (
            <p>Error fetching movies: {error.message}</p>
        ) : (
            <ul>
                {movies.map((movie) => (
                    <li key={movie.imdbID}><h3>{movie.Title} ({movie.Year})</h3>
                    {movie.Poster && <img src={movie.Poster} alt={`${movie.Title} poster`} />}</li>
                    
                ))}
            </ul>
        )}
    </div>
    );
};

export default FetchMovies;