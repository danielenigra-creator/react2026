import { useState } from "react";
import moviesData from "./data/movies";
import MovieCard from "./components/MovieCard";
import Favorite from "./components/Favorite";
import SearchBar from "./components/SearchBar";
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
      <SearchBar></SearchBar>

      <MovieCard movies={movies} onToggleFavorite={toggleFavorite}
      />
      <Favorite movies={movies}
        onToggleFavorite={toggleFavorite} />

    </>

  )
}

export default App;

