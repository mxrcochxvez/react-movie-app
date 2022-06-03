import React from "react";
import MovieCard from "../MovieCard/MovieCard.jsx";
import styled from "styled-components";

const ClosedContainer = styled.div`
  display: flex;
  margin: 2rem auto;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  justify-content: center;
  gap: .5rem;
  max-width: 10rem;
`;
const Title = styled.h1`
  padding: 0;
  margin: 0;
`;

const Year = styled.p`
  margin: 0.5rem 0 0 0;
`;

const MovieRating = styled.p`
    margin: 0;
    color: dodgerblue;
    font-weight: 800;
`

const MovieModal = ({ show, movie, onClick }) => {
  return (
    <div onClick={onClick}>
      {show ? (
        <MovieCard movieData={movie} />
      ) : (
        <ClosedContainer>
          <div>
            <Title>{movie.Title}</Title>
            <hr />
            <Year>Year: {movie.Year}</Year>
          </div>
          <MovieRating>{movie.imdbRating}</MovieRating>
        </ClosedContainer>
      )}
    </div>
  );
};

export default MovieModal;
