import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import movies from "../utils/movies";
import NotFound from "./NotFound";

const Details = () => {
  const { movie: parameter } = useParams();
  if (parameter) {
    const value = Number.parseInt(parameter);
    const movie = movies.find(({ id }) => id === value);
    return movie ? <MovieDetails {...movie}/> : <NotFound />;
  }
  return <NotFound />;
};

export default Details;
