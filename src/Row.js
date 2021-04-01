import React, {useState,useEffect} from 'react';
import axios from './axios';
import './Style/Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url ="https://image.tmdb.org/t/p/original/"

const Row = ({title,fetchUrl,isLargeRow}) => {
 const [movies, setMovies] = useState([]);
 const [trailerUrl, setTrailerUrl] = useState("")

 //A snippet of code which runs based on a specific condition/variable
useEffect( ()=>{
 // if [],run once when the row loads, and don't run it agian
  async function fetchData(){
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
  }
  fetchData();

},[fetchUrl]);

const opts = {
    height: "390",
    width: "100%",
    playerVars: {
        autoplay: 1,
    }
}

const handleClick = (movie) =>{
    console.log('you click on movie')
    if(trailerUrl){
        setTrailerUrl("");
     
    }else {
        movieTrailer(movie?.name || "")
        .then((url) =>{
            const urlParams = new URLSearchParams(new URL(url).search);
             setTrailerUrl(urlParams.get("v"));
            
        })
        .catch((error) => console.log('error is : '+error));
    }
}

// console.table(movies);

    return (
        <div className="row">
         <h2> {title} </h2>   

         <div className ="row_posters">
            {/* several row_posts */}
            {movies.map(movie =>(
               <img 
               key ={movie.id}
               onClick={()=> handleClick(movie)}
                className={`row_poster ${isLargeRow && "row__posterLarge"}`}
               src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
               alt={movie.name}
               /> 
            ))}
           
         </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
             {/* container -> Poster */}
        </div>
    )
}

export default Row
