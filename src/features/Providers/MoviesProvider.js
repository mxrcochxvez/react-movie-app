import { createContext, useContext, useState } from 'react';

const MoviesContext = createContext();

const MoviesProvider = ({children}) => {
    const [movies, setMovies] = useState([]);

    const addMovie = (movie) => {
        setMovies([...movies, movie]);
        return movies;
    }

    const removeMovie = (movieTitle) => {
        setMovies(movies.filter(movie => movie.Title !== movieTitle));
        return movies;
    }

    const value = { movies, addMovie, removeMovie };
    return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
}

const useMovies = () => {
    const context = useContext(MoviesContext);
    if (context === undefined) {
        throw new Error('useMovies must be used within a MoviesProvider');
    }
    return context;
}

export { MoviesProvider, useMovies };