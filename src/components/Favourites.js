import React, { useState ,useEffect}from 'react';
// import Image from "../banner.jpg";

import useDarkMode from './Hooks/useDarkMode';
function Favourites() {
  
  let genreids = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History',
    27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western'
  }
  const [hover, setHover] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [fav_search,setFav_search]=useState('');
  const [alphaSort,setAlphaSort]=useState(false);
  const [ratingSort,setRatingSort]=useState(false);
  const [popSort,setPopSort]=useState(false);

// let favourites =  JSON.parse(localStorage.getItem('imdb'));

useEffect(function() {
  let oldFav = localStorage.getItem("imdb");
  oldFav = JSON.parse(oldFav) || [];

  setFavourites(oldFav);

},[])
const removeFavourites = (id) => {
  const newArray = favourites.filter((movie) => movie !== id);
  
  setFavourites([...newArray])
  localStorage.setItem("imdb", JSON.stringify(newArray));
};


let filterFav=[];
 filterFav=favourites.filter((mov)=>{
  return mov.title?.toLowerCase().includes(fav_search);
})

// console.log('rerendor')

  // console.log('clicked')
  if(alphaSort===true){
   filterFav.sort((a,b)=>{
    
    if ( a.title < b.title ){
      return -1;
    }
    if ( a.title > b.title ){
      return 1;
    }
    return 0;
  })
  
}
const handleAlphaSort=()=>{

  setAlphaSort(!alphaSort)
}

if(ratingSort===true){
  filterFav.sort((a,b)=>{
   return b.vote_average-a.vote_average;
 })
 
}
const handleRatingSort=()=>{

 setRatingSort(!ratingSort);
}
if(popSort===true){
  filterFav.sort((a,b)=>{
   return b.popularity-a.popularity;
 })
 
}
const handlePopSort=()=>{

 setPopSort(!popSort);
}

  



const handleFav_search=(e)=>{
  setFav_search(e.target.value);
}


  return (<div className="min-h-screen">

<div className="mt-28 text-white  ">
  <div className="flex justify-center ">
    <div className="border-slate-200 border-2 ">
  <input type="text" className="  outline-0 font-medium text-black" placeholder="Search in your watchlist"  onChange={handleFav_search}  value={fav_search}/>
  </div>
  </div>
  <div className="flex justify-around items-center mt-3">
    <h4 >Sort by:</h4>
    <button className="bg-blue-100 rounded dark:text-black p-1 border-1 outline-none hover:bg-blue-400 hover:text-white" type="button" onClick={handleAlphaSort}>Alphabetical</button>
    <button className="bg-blue-100 rounded dark:text-black p-1 border-1 outline-none hover:bg-blue-400 hover:text-white" type="button" onClick={handleRatingSort}>Rating</button>
    <button className="bg-blue-100 rounded dark:text-black p-1 border-1 outline-none hover:bg-blue-400 hover:text-white"type="button" onClick={handlePopSort}>Popularity</button>
  </div>
</div>






  
  
  
  
  
  <div classname="flex flex-col  ">
    
    { filterFav.length===0 ?
    <div className="text-center mt-5 text-2xl text-white font-bold">
      No Movies related to your search
    </div>
    
    :

    filterFav.map((movie)=>{
      return (
    <div className="flex mt-4  flex-col sm:flex-row">
  <div className="basis-1/4   flex justify-center items-center h-[38vh] ">
<div className=
              {`
              bg-[url(${`https://image.tmdb.org/t/p/original/${movie.poster_path}`})] 
              bg-top bg-cover
              rounded-md shadow-lg
              h-[33vh] w-[30vw] sm:w-[20vw]
              border-1
              border-blue-400
              relative
              
              `}
               onMouseOver={() => {
                setHover(movie.id);
              }}
              onMouseLeave={() => {
                setHover("");
              }}
            >
              {hover === movie.id && 
                
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
    }
  </div>
  </div>
  <div className="basis-3/4  flex flex-col p-2 space-y-0 h-[38vh] text-base bg-black text-white">
 <h3 className="text-blue-400">{movie.title}</h3>
 <div className="flex gap-2 items-center relative">
   <p className=" border-sky-400 mr-1">{movie.release_date.substr(0,4)} </p>
   <div className="border-l border-black h-3 absolute top-2 left-10"></div>
  {movie.genre_ids.map((id)=><p className="italic">{genreids[id]}</p>)}
 </div>
<p className="">⭐{movie.vote_average}</p>
<p>{movie.overview}</p>
  </div>
  
</div>
      )})}

  </div>
  </div>
  )
}

export default Favourites;
