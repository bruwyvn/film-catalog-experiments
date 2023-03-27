import React from "react";
import { MovieProperties } from "../MovieCard/MovieCard";

const MovieDetails = ({
  photo,
  name,
  year,
  duration,
  genres,
  description,
  rating,
}: MovieProperties) => {
  return (
    <div className="bg-gray-100">
      <div className="container min-h-screen mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img src={`/${photo}`} alt={name} className="rounded-lg" />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="mt-4 text-gray-600">
              {year} | {duration} mins | {genres.join(", ")}
            </p>
            <p className="mt-4 text-gray-600">{description}</p>
            <div className="mt-4 flex items-center">
              <span className="mr-2 text-xl font-bold">{rating}%</span>
              <div className="w-full rounded-full bg-gray-300">
                <div
                  className="rounded-full bg-green-500 py-1 text-center text-xs leading-none text-white"
                  style={{ width: `${rating}%` }}
                >
                  {rating}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
