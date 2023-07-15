export const getAllMovies = async () => {
  let data = await fetch("http://localhost:3000/movies");
  let res = await data.json();
  return res;
};
