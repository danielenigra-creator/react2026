function Favorite({ movies, onToggleFavorite }) {
    const favoriteMovies = movies.filter(film => film.favorite);

    return (
        <ul>
            {favoriteMovies.map(film => (
                <li key={film.id}>
                    <p>{film.title}</p>
                    <button onClick={() => onToggleFavorite(film.id)}>
                        Rimuovi dai preferiti
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Favorite;