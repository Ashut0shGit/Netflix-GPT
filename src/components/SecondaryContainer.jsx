import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList.jsx";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  return (
    <div className="bg-black">
      <div className="-mt-48 pl-12 relative z-40">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      </div>
      <div className="pl-12 relative z-10">
        <MovieList title={"Top Rated"} movies={movies.TopRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.UpcomingMovies} />
        <MovieList title={"Popular"} movies={movies.PopularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
