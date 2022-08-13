import React from  'react';

//This is a component for an individual movie (it's reusable to display all movies)
//The year is displayed folowed by the movie poster, if available, whether it's a movie or show, and the title of the movie
const MovieCard = ({movie}) =>{
    return (
        <div className = "movie">
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img src = {movie.Poster!=='N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
                alt={movie.Title}
                />
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>

        </div>
    )
}

export default MovieCard;



