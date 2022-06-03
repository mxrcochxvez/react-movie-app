import React from "react";
import "./styles.css";
import styled from 'styled-components';

const Container = styled.div`
  padding: 5rem;
`

const Content = styled.section`
  text-align: left;
  display: flex;
  flex-direction: column;

  h1, h2 {
    margin: 0;
  }
`

const MovieDetails = ({ Title, Year, imdbID, Type, Poster, Plot, Actors }) => {
  return (
    <Container className="details-container">
      <img src={Poster} alt={`${Title} poster.`} />
      <Content>
        <h1>{Title}</h1>
        <h2>Year: {Year}</h2>
        <h2>IMDB ID: {imdbID}</h2>
        <p>Plot: {Plot}</p>
        <p>Actors: {Actors}</p>
      </Content>
    </Container>
  );
};

export default MovieDetails;
