import { useMovies } from '../../Providers/MoviesProvider';

const FavoritesPage = () => {
    const { movies, removeMovie } = useMovies();

    return (
        <div>
            <h1>Favorites</h1>
            {movies.map(movie => (
                <div key={movie.Year}>
                    <h2>{movie.Title}</h2>
                    <p>{movie.Year}</p>
                    <p>{movie.Actors}</p>
                    <button
                    onClick={() => removeMovie(movie.Title)}
                    >Remove</button>
                </div>
            ))}
        </div>
    )
}

export default FavoritesPage;