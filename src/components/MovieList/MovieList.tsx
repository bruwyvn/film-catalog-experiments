import React from "react";
import MovieCard from "../MovieCard";
import movies from "../../utils/movies";

const MovieList = () => {
  return (
    <div className="container mx-auto my-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
