import {useState, useEffect} from 'react';

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';

//90625464 ->API key
const API_URL = 'http://www.omdbapi.com?apikey=90625464'

//This is a sample movie with the information the API provides
const movie1 ={
        "Title": "Tres metros sobre el cielo: Making of",
        "Year": "2011",
        "imdbID": "tt2263570",
        "Type": "movie", 
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWRlNTlhMWEtYjI1Yy00MDU2LTg5MWMtYWM1ZGI4M2IzM2Q2XkEyXkFqcGdeQXVyNjc4NDIxNTE@._V1_SX300.jpg"
}


const App = () =>{
    const[movies, setMovies] = useState([]); //use to store all the movies 
    const[searchTerm, setSearchTerm] = useState([]);

    //async means it takes time to search for movies
    const searchMovies = async(title) =>{

        //this calls the API
        const response = await fetch(`${API_URL}&s=${title}`);

        //this holds the data returned from the API 
        const data = await response.json();

        //this stores the datas into movies array
        setMovies(data.Search);

    }

    //This is used to fetch data from API as soon as the component loads
    //Empty [] means only call it at the start 
    useEffect(()=>{
        searchMovies('Fast and the Furious');
    },[])
    
    return(
       <div className = "app">
           <h1>FindPelis</h1>
           
           <div className="search">
                <input 
                    placeholder="Search for movies"
                    value = {searchTerm}
                    onChange = {(e)=>setSearchTerm(e.target.value)} //e is the event
                />
                <img
                    src = {SearchIcon}
                    alt = "search"
                    onClick={()=>searchMovies(searchTerm)}
                />
           </div>

           
            {movies?.length>0 //if length is greater then 0, render movie card
                ?(
                    <div className="container">
                        
                        {movies.map((movie)=> ( //dynamic block -> dynamically looping over movies array which 
                            <MovieCard movie={movie}/> //are results from API
                        ))}
                    </div>
                ) : (
                    <div className = "empty">
                        <h2>No movies found</h2>
                    </div>
                )}
        </div>
    );
}

export default App; 