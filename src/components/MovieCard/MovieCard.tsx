import React from "react";
import { Link } from "react-router-dom";

export type MovieProperties = {
  id: number;
  name: string;
  duration: number;
  photo: string;
  year: number;
  genres: string[];
  description: string;
  rating: number;
};

const MovieCard = ({
  id,
  name,
  description,
  genres,
  photo,
}: MovieProperties) => {
  return (
    <Link to={`/details/${id}`}>
      <div className="max-w-sm overflow-hidden rounded shadow-lg">
        <img className="h-auto w-full" src={photo} alt={name} />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">{name}</div>
          <p className="text-base text-gray-700">{description}</p>
        </div>
        <div className="px-6 py-4">
          {genres.map((genre, index) => (
            <span
              key={index}
              className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
