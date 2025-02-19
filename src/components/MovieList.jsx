import MovieListItem from "./MovieListItem";

export default function MovieList(props){
    
    return(
        <>
        <h3>Movie List</h3>
        <div>
            <MovieListItem movie={props.movies[0]}/>
        </div>
        </>
    );
}