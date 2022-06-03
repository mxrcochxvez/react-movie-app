/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import MovieModal from "../components/MovieModal/MovieModal";
import MovieSearch from '../components/MovieSearch/MovieSearch';

const Container = styled.div`
  text-align: center;

  input {
    background: #ababab;
    border: none;
    border-radius: 2px;
    padding: 10px;
    color: white;
    font-weight: bolder;
  }
`

const LandingPage = () => {
  const [movie, setMovie] = useState("");
  const [show, setShow] = useState(false);

  return (
    <Container>
      <h1>Welcome to my movie app!</h1>
      <MovieSearch setMovie={setMovie} />
      <div>
        {movie && <MovieModal movie={movie} show={show} onClick={() => setShow(!show)} />}
      </div>
    </Container>
  );
};

export default LandingPage;
