import MovieListItem from "./MovieListItem";

export default function MovieList(props){
    
    return(
        <>
        <h3>Movie List</h3>
        <div>
            {props.movies.map(movie=>(
                <MovieListItem movie={movie}/>
            ))}
            {/* <MovieListItem movie={props.movies[0]}/> */}
        </div>
        </>
    );
}