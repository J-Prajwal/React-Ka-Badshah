import axios from "axios";

export const getAllMovies = async () => {
  let res = await axios.get("http://localhost:3000/movies");
  return res.data;
};

export const getMovieFromId = async (movieId) => {
  let res = await axios.get(`http://localhost:3000/movies/${movieId}`);
  return res.data;
};

export const addNewMovie = async (movieData) => {
  let res = await axios.post("http://localhost:3000/movies", movieData);
  return res;
};

export const updateMovie = async (movieData) => {
  let res = await axios.patch();
  return res;
};

export const deleteMovie = async (movieId) => {
  let res = await axios.delete(`http://localhost:3000/movies/${movieId}`);
  return res;
};
