// rfce
import React, { useState}from 'react';
// import Logo from "../logo.png";
import {Link} from 'react-router-dom'
import Toggle from "./Toggle";

function NavBar(props) {
    const [search,setSearch]=useState('');
    // const [theme,setTheme]=useState('light');
    
    props.onsearch(search);
    const handleSearch=(e) =>{
  setSearch(e.target.value);
    }
// const handleTheme=()=>{
//   setTheme(prevTheme=>{
//     // console.log(theme)
//     return prevTheme==='light' ? 'dark': 'light';
//   });

 
    return <div className="fixed z-10 left-0 right-4 ">

        <div className
        =" 
        pl-12 py-4 space-x-8 
         flex  items-center  bg-black 
        ">
            {/* <img className="w-[50px] md:w-[60px]" src={Logo}></img> */}
            <svg xmlns="http://www.w3.org/2000/svg" class=" stroke-blue-400 hover:stroke-blue-600 w-[50px] md:w-[60px] cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" 
            >
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
</svg>
            <Link to="/" className=
            {`text-blue-400 
            font-bold 
            text-xl
            no-underline
            md:text-3xl`}>Movies</Link>
            <Link to="favourites" className="text-blue-400 no-underline font-bold text-xl md:text-3xl">Favourites</Link>
            {/* <Toggle/> */}
            <div className="flex border-2 border-slate-200 absolute right-8 ">
            <input type="text "className="border-none outline-0 font-medium " placeholder="Search for movies" value={search} onChange={handleSearch}  />
            <div  className="cursor-pointer text-blue-400">
            <svg  xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:bg-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
</div>

            </div>
   
        </div>
    </div>
}

export default NavBar;
