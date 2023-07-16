import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <h2>Movie App</h2>
      <Button>
        <Link to={"/create"}>Add Movies</Link>
      </Button>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  font-size: 2rem;
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin-top: 5px;
  display: flex;
  padding: 0.1rem 0.75rem;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
`