import { useState } from "react";
import moviesData from "./data/movies";
import MovieCard from "./components/MovieCard";
import Favorite from "./components/Favorite";
import SearchBar from "./components/SearchBar";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchTerm, setSearchTerm] = useState("");

  const favoriteCount = movies.filter((movie) => movie.favorite).length;

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const toggleFavorite = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((film) =>
        film.id === id ? { ...film, favorite: !film.favorite } : film,
      ),
    );
  };

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <p>⭐ {favoriteCount} preferiti</p>

      <MovieCard movies={filteredMovies} onToggleFavorite={toggleFavorite} />

      <Favorite movies={movies} onToggleFavorite={toggleFavorite} />
    </>
  );
}

export default App;
