import React,{useState , useEffect} from 'react';
import axios from './axios';
import requests from './request';
import './Style/Banner.css'

const Banner = () => {
const [movie, setMovie] = useState([])

useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
          request.data.results[
          Math.floor(Math.random() * request.data.results.length
      )]);
      return request;
    }
    fetchData();
}, []) 
 console.log(movie);

 function truncate(str,n) {
     return str?.length >n ?str.substr(0,n-1) + "..." : str;
 }

    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage:`url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center"
            }}
        >
              {/* Background Image */}

            <div className ="banner_contents">
             
            {/* title */}
            <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            {/* div >  2 buttons */}
            <div className="banner_button">
             <button className="banner_buttons">Play</button>
             <button className="banner_buttons">My List</button> 
            
            </div>
            {/* description */}
            <h1 className="banner_description">
                {truncate(movie?.overview,150)}
            </h1>
            </div>

            <div className="banner--fadeButton" />
        </header>
    )
}

export default Banner
