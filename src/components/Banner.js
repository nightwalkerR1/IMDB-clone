import React, { useState,useEffect} from 'react';
// import Image from '../banner.jpg'
import axios from 'axios'

function Banner() {

    const [movies,setMovies]=useState([]);
    const [movieNum,setMovieNum]=useState(0);

    

    useEffect(() => {
        const interval = setInterval(() => {
  
       
                // console.log(movieNum);
                setMovieNum((movieNum+1)%10);
        }, 10000);
        return () => clearInterval(interval);
      }, []);
      

    useEffect(function(){
        axios.get(
              "https://api.themoviedb.org/3/trending/all/day?api_key=03f7ccfd24b8c7cd49ef29d92cd1d82f&page=2"
            )
            .then((response) => {
      
              setMovies(response.data.results);
            });
          },[])

          





    return <div className="">
    { movies.length>0 &&
        <div className=
        {`bg-[url(${`https://image.tmdb.org/t/p/original/${movies[movieNum].poster_path}`})] h-[40vh] md:h-[60vh] 
        bg-center bg-cover
        flex items-end  mt-28 
    `}>
        <div className=" text-xl md:text-3xl text-white
            p-6 
            bg-gray-900 bg-opacity-50
            w-full
            flex justify-center
        ">
                {movies[movieNum].title}
                </div>
               
        </div>
}
     
    </div>;
    
}

export default Banner;

//Automatic movie shuffle in every 5 seconds
