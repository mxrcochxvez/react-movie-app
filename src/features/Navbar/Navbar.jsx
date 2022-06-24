import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #004999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;

  h1 {
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: #ffffff;
    font-size: 20px
  }

  div {
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    font-size:125%
  
  
  
  }
a {
color:#ffff;
text-decoration:none;


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
