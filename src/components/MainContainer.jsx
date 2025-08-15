import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];
  console.log("Main movie:", mainMovie);

  const { id, poster_path, original_title, overview } = mainMovie;
  console.log("Extracted id:", id);

  return (
    <div className="overflow-x-hidden">
      <div className="relative">
        <VideoTitle
          id={id}
          logo={poster_path}
          title={original_title}
          desc={overview}
        />
        <VideoBackground id={id} />
      </div>
    </div>
  );
};

export default MainContainer;
