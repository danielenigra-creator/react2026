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

function App() {
  const [movies, setMovies] = useState(moviesData);

  return (

    <>
      <MovieCard movies={movies} />

    </>

  )
}

export default App;

