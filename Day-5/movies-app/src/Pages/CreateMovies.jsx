import React, { useState } from "react";
import styled from "styled-components";
import { addNewMovie } from "../API/api";
import { useNavigate } from "react-router-dom";

const CreateMovies = () => {
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState({
    Title: "",
    Year: "",
    Genre: "",
    Images: [],
    id: new Date(),
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "Images") {
      let movies = value.split(",");
      setMovieData((prev) => ({ ...prev, [name]: movies }));
    } else {
      setMovieData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addNewMovie(movieData)
      .then((res) => {
        if (res.status === 201) {
          alert("Data Added Successfully!");
          navigate("/");
        } else alert("Error");
      })
      .catch((err) => console.error(err));

    // setMovieData({
    //   Title: "",
    //   Year: "",
    //   Genre: "",
    //   Images: [],
    //   id: new Date(),
    // });
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Input
          onChange={handleOnChange}
          type='text'
          placeholder='Movie Title'
          name='Title'
          //   value={movieData.Title}
        />
        <Input
          onChange={handleOnChange}
          type='text'
          placeholder='Year'
          name='Year'
          //   value={movieData.Year}
        />
        <Input
          onChange={handleOnChange}
          type='text'
          placeholder='Genre'
          name='Genre'
          //   value={movieData.Genre}
        />
        <Input
          onChange={handleOnChange}
          type='text'
          placeholder='Images'
          name='Images'
          //   value={movieData.Images.join(",")}
        />
        <Input type='submit' />
      </Form>
    </div>
  );
};

export default CreateMovies;

const Form = styled.form`
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 30%;
  padding-left: 10px;
  padding-top: 10px;
`;

const Input = styled.input`
  height: 20px;
`;
