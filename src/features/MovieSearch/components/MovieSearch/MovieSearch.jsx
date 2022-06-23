import React, { useState } from "react";
import styled from 'styled-components';
import axios from 'axios';

const SubmitButton = styled.button`
  background-color: dodgerblue;
  border: none;
  color: white;
  padding: 10px;
  border-radius: 12px;
  margin-left: 10px;
  &:hover {
    background-color: #054cda;
  }

  
`

const MovieSearch = ({ setMovie }) => {
  const [movieName, setMovieName] = useState("");
  const apiKey = '490bdc5c';

  const getMoviesByName = async (name) => {
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${name}`;
    const response = await axios.get(url);
    setMovie(response.data);
  };

  const getMoviesById = async (id) => {
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;
    const response = await axios.get(url);
    setMovie(response.data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getMoviesByName(movieName);
  };
  
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Movie Name"
          value={movieName}
          onChange={(e) => setMovieName(e.currentTarget.value)}
        />
        <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
      </form>
    </div>
  );
};

export default MovieSearch;