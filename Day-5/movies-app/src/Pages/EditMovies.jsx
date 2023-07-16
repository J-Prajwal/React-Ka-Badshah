import React, { useEffect, useState } from "react";
import { getMovieFromId } from "../API/api";
import { useParams } from "react-router-dom";

const EditMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getMovieFromId(id)
      .then((res) => {
        setMovies(res);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(movies);
  return <div>EditMovies</div>;
};

export default EditMovies;

/**
 * 1. Create a form to update the movie
 * 2. Make a patch request to update the movie
 * 3. After the patch request, redirect back to the home page
 */
