import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllMovies } from "../API/api";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllMovies()
      .then((res) => {
        setMovies(res);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) return <LoadingContainer>Loading.....</LoadingContainer>;
  return (
    <GridContainer>
      {movies.map((movie, ind) => (
        <GridItem key={ind}>
          <img width={"70%"} src={movie.poster} alt='' />

          <DetailsContainer>
            <h3>Title: {movie.title}</h3>
            <h3>Genre: {movie.genre}</h3>
          </DetailsContainer>
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default Movies;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: auto;
  gap: 10px;
  padding: 0 10px;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailsContainer = styled.div`
  font-weight: 700;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

const LoadingContainer = styled.div`
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: grey;
`;
