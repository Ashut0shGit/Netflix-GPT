import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  console.log(movies);
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-6 ">
      <h1 className="text-white text-2xl md:text-3xl font-semibold mb-4">
        {title}
      </h1>
      <div className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4">
        <div className="flex  space-x-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
