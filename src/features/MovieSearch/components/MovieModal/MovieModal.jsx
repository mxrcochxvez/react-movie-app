import React from "react";
import MovieCard from "../MovieCard/MovieCard.jsx";

const MovieModal = ({ show, movie, onClick }) => {
  return (
    <div>
      <MovieCard movieData={movie} />
    </div>
  );
};

export default MovieModal;
