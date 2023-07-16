import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { deleteMovie, getAllMovies } from "../API/api";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteTriggered, setDeleteTriggered] = useState(false);

  const navigate = useNavigate();

  const handleDelete = (movieId) => {
    deleteMovie(movieId)
      .then((res) => {
        if (res.status === 200) setDeleteTriggered(!deleteTriggered);
        else alert("error");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    setLoading(true);
    getAllMovies()
      .then((res) => {
        setMovies(res);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [deleteTriggered]);

  if (loading) return <LoadingContainer>Loading.....</LoadingContainer>;
  return (
    <GridContainer>
      {movies.map((movie, ind) => (
        <GridItem key={ind}>
          <img width={"100%"} src={movie.Images[0]} alt='' />

          <DetailsContainer>
            <div>
              <h3>Title: {movie.Title}</h3>
              <h3>Genre: {movie.Genre}</h3>
            </div>
            <AiFillEdit onClick={() => navigate(`/edit/${movie.id}`)} />
            <AiOutlineDelete onClick={() => handleDelete(movie.id)} />
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
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const DetailsContainer = styled.div`
  font-weight: 700;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LoadingContainer = styled.div`
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: grey;
`;
