import MovieListItem from "./MovieListItem";

export default function MovieList(props){
    return(
        <>
        <h3>Movie List</h3>
        <ul>
            <MovieListItem title={props.movies[0].title}/>
        </ul>
        </>
    );
}