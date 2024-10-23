import './App.css';
import React, {useState} from 'react';
import NavBar from "./components/NavBar";
import Banner from './components/Banner';
import Movies from './components/Movies'
// import Background from './components/Background';
import useDarkMode from './components/Hooks/useDarkMode';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Favourites from './components/Favourites'
import './App.css'
function App() {
useDarkMode();

  const [search,setSearch]= useState('')
  // const [theme,setTheme]= useState('light')

// console.log(search);
  const handleSearch=(val)=>{
    setSearch(val);
  }
  // const handleTheme=()=>{
  //   setTheme(prevTheme=>{
  //     console.log(theme)
  //     return prevTheme==='light' ? 
  //     document.queryselector('.app').classList.add('dark') :
  //     document.getElementById('root').classList.remove('dark');
  //   });
  // }




//w-screen used to remove whitespace in right
  return (

    <div className="app  w-screen  bg-black">
    <BrowserRouter>
      {/* <h1> Hello Pepcoders !! 🚀🚀</h1> */}
      {/* <h2>NavBar</h2> */}
      <NavBar onsearch={(x)=>handleSearch(x)}  />
      <Routes>
        <Route path="/" element={<>
          <Banner />
          <Movies search={search} />
    
        </>}/>
        <Route path="/favourites" element={<Favourites />}/>
      </Routes>
      {/* <Banner></Banner> */}
      {/* <Movies></Movies> */}
      {/* <h2>Banner</h2> */}
      {/* <h2>Trending </h2> */}
      {/* <Pagination></Pagination> */}
      {/* <h2>Pagination</h2> */}
    </BrowserRouter>
    </div>
  
  );
}
export default App;
