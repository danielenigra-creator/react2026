import movies from '../data/movies'
function MovieCard({ movies, setMovies }) {
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
                        
                    </li>
                ))}

            </ul>
        </div>
    );

    <button></button>


    return (

        /*  <div className="moviecard">
              <article>
  
                  <img src={props.image} className="card-image" />
                  <p>{props.anno}</p>
                  <p>{props.title}</p>
  
  
              </article>
          </div>
          */
        <div>
            <ul>
                {movies.map((oggetti) => (
                    <li key={oggetti.id}>
                        <img src={oggetti.image} alt={oggetti.title} className="card-image" />
                        <p>{oggetti.anno}</p>
                        <p>{oggetti.title}</p>
                        <p>{oggetti.genere}</p>

                        {oggetti.watched ? (
                            <p>✅ Visto</p>
                        ) : (
                            <p>👀 Da vedere</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default MovieCard 
