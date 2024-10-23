import React, { useState, useEffect } from "react";

import axios from "axios";
import Pagination from "./Pagination";

// API-KEY - 03f7ccfd24b8c7cd49ef29d92cd1d82f
// `https://api.themoviedb.org/3/search/movie?api_key=03f7ccfd24b8c7cd49ef29d92cd1d82f&query=hollywood`


function Movies(props) {


  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hover, setHover] = useState("");
  const [favourites, setFavourites] = useState([]);

  //Handling pagination events
  function goAhead() {
    setPage(page + 1);
  }
  function goBehind() {
    if (page > 1) setPage(page - 1);
  }
  //Handling pagination events
  

const HOME_URL = `https://api.themoviedb.org/3/trending/all/day?api_key=03f7ccfd24b8c7cd49ef29d92cd1d82f&page=${page}`
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=03f7ccfd24b8c7cd49ef29d92cd1d82f&page=${page}&query=${props.search}`





  // Api call
  // everytime when page reloads or the value or page variable changes
  useEffect(
    function () {
      // to save favourites data
      let oldFav = localStorage.getItem("imdb");
        oldFav = JSON.parse(oldFav) || [];
        console.log(oldFav);
        setFavourites(oldFav);
         // to save favourites data

         //Api call logic
        const main_url = props.search.length === 0 ? HOME_URL : SEARCH_URL ;
      
      axios.get(
          // `https://api.themoviedb.org/3/trending/all/day?api_key=03f7ccfd24b8c7cd49ef29d92cd1d82f&page=${page}`
          main_url
        )
        .then((response) => {
          // console.log(response.data.results);
          setMovies(response.data.results);
        });
    },
    [page,props.search]
  );
  // Api call

  

  const addFavourites = (id) => {
    const newarr = [...favourites, id];

    setFavourites([...newarr]);

    localStorage.setItem("imdb", JSON.stringify(newarr));
  };

  const removeFavourites = (mov) => {
    const newArray = favourites.filter((movie) => movie.id !== mov.id);
    
    setFavourites([...newArray]);
    localStorage.setItem("imdb", JSON.stringify(newArray));
  };

  return (
    <>
      {/* title */}
      <div className="mb-8  ">
        <div className="mt-8 mb-8 font-bold text-2xl text-center text-blue-400 ">
          {props.search.length === 0 ? `Trending Movies` : `Movies related to ${props.search}`}
        </div>
        {/* movies */}
        {movies.length === 0 ? (
          <div className="flex justify-center">
            {/* loader */}
            <div className="wrapper">
              <div className="circle circle1"></div>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center ">
            {movies.map((movie) => {
              return (
                <div
                  className={`
              bg-[url(${`https://image.tmdb.org/t/p/original/${movie.poster_path}`})] 
              md:h-[30vh] md:w-[250px] 
              h-[30vh] w-[250px]
              bg-center bg-cover
              rounded
              
              flex items-end
              m-4
              border-2
              border-gray-500
              hover:scale-110
              ease-out duration-500
             relative
          `}
                  onMouseEnter={() => {
                    setHover(movie.id);
                  }}
                  onMouseLeave={() => {
                    setHover("");
                  }}
                >
                  {hover === movie.id && (
                    <>
                      {
                        // JSON.parse(localStorage.getItem('fav'))

                        favourites.find((m) => m.id == movie.id) ? (
                          <div
                            className="
            absolute
            top-1.5
            right-2
            text-xl
            cursor-pointer
            hover:opacity-70          
            "
                            onClick={() => removeFavourites(movie)}
                          >
                            <abbr className="abbr" title="Remove from favourite list">❌</abbr>
                          </div>
                        ) : (
                          <div
                            className="
            absolute
            top-1.5
            right-2
            text-xl
            cursor-pointer
            hover:opacity-70    
            
            "
                            onClick={() => addFavourites(movie)}
                          >
                            <abbr className="abbr" title="Add to favourite list">💖</abbr>
                          </div>
                        )
                      }
                    </>
                  )}

                  {movie.title !== undefined && (
                    <div className="w-full bg-gray-900 text-white py-1 font-bold text-center   opacity-80">
                      {movie.title}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Pagination goAhead={goAhead} goBehind={goBehind} page={page} />
    </>
  );
}

export default Movies;
