import React , {useState} from 'react';
import { moviesData } from './movieData';
import MoviesList from './components/MoviesList';
import './App.css';
import MovieNavbar from './components/MovieNavbar';
import AddMovie from './components/AddMovie';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MovieDescription from './components/MovieDescription';


function App() {
  const [movies , setMovies] = useState(moviesData)
  const [searchName , setSearchName] = useState("");
  const [searchRating , setSearchRating] = useState(0)
  console.log("searchName : " , searchName)
console.log(movies)
  const addMovie = (movie)=>{
    setMovies([...movies , movie])
  }

  return (
    <>
    <BrowserRouter>
    <MovieNavbar setSearchName={setSearchName} setSearchRating={setSearchRating} />
      <Routes>
        <Route path='/' element={<div>Home</div>}/>
        <Route path='/movies' element={<MoviesList movies={movies} searchName={searchName} searchRating={searchRating} />} /> 
        <Route path='/add' element={<AddMovie addMovie={addMovie} />}/>
        <Route path='/description/:id' element={<MovieDescription movies={movies}/>}/>
      </Routes>

    </BrowserRouter>    
    </>
  );
}

export default App;
