import movies from '../data/movies'
function MovieCard({ movies, onToggleFavorite }) {
    return (
        <div>
            <ul>
                {movies.map((film) => (
                    <li key={film.id}>
                        <img src={film.image} alt={film.title} />
                        <p>{film.anno}</p>
                        <p>{film.title}</p>
                        <p>{film.genere}</p>

                        {film.watched ? (
                            <p>✅ Visto</p>
                        ) : (
                            <p>👀 Da vedere</p>
                        )}
                        <button onClick={() => onToggleFavorite(film.id)}>
                            {film.favorite ? "★ Aggiunto ai preferiti" : "☆ Preferito"}
                        </button>

                    </li>
                ))}

            </ul>
        </div>
    );




}
export default MovieCard 
