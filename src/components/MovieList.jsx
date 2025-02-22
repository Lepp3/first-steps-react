import MovieListItem from "./MovieListItem";

export default function MovieList(props){
    
    return(
        <>
        <h3>Movie List</h3>
        <div>
            {props.movies.map((movie, index)=>(
                <MovieListItem key={movie.id} movie={movie}/>
            ))}
            
            
        </div>
        </>
    );
}