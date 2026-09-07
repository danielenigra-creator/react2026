function MovieCard(props) {
    return (

        <div className="moviecard">
            <article>

                <img src={props.image} alt={props.nickname} className="card-image" />
                <p>{props.anno}</p>
                <p>{props.title}</p>


            </article>
        </div>
    )
}
export default MovieCard 
