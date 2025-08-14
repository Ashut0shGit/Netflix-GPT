import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div
      className="inline-block w-[150px] md:w-[180px] lg:w-[180px] shrink-0 
    overflow-visible transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] 
    hover:scale-110 hover:z-50 hover:shadow-2xl"
    >
      <img
        className="w-full h-auto rounded-md"
        src={IMG_CDN_URL + posterPath}
        alt="poster"
      />
    </div>
  );
};

export default MovieCard;
