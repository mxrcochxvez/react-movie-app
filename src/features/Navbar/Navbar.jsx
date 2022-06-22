import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fcee9a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;

  h1 {
    margin: 0;
    padding: 0;
  }

  div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
`;

export default function Navbar() {
  return (
    <Wrapper>
      <h1>Movie App</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </Wrapper>
  );
}
