export default function MovieListItem(props){
    return(
        <>
        <article>
            <header>
                <h4>{props.movie.title}</h4>
            </header>
            <main>
            <p>{props.movie.plot}</p>
            </main>
            <footer>
                <p>Director: {props.movie.director}, year: {props.movie.year}</p>
            </footer>
            
        </article>
        <hr></hr>
        </>
    )
}