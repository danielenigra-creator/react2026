/*import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
//import './App.css'
import Container from './components/Container'
import MovieCard from './components/MovieCard'
import moviesData from "./data/movies";


export default function App() {
  return (
    <>
      <Container>
        <MovieCard />

      </Container>
    </>
  )
}
*/
import { useState } from "react";
import moviesData from "./data/movies";
import MovieCard from "./components/MovieCard";
import Favorite from "./components/Favorite";
function App() {
  const [movies, setMovies] = useState(moviesData);
  const toggleFavorite = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((film) =>
        film.id === id
          ? { ...film, favorite: !film.favorite }
          : film
      )
    );
  };

  return (

    <>
      <MovieCard movies={movies} onToggleFavorite={toggleFavorite}
      />
      <Favorite movies={movies}
        onToggleFavorite={toggleFavorite} />

    </>

  )
}

export default App;

