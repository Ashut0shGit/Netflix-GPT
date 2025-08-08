import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-[150px] md:w-[180px] lg:w-[200px] shrink-0">
      <img
        className="w-full h-auto rounded-md hover:scale-105 transition-transform duration-300 ease-in-out"
        src={IMG_CDN_URL + posterPath}
        alt="poster"
      />
    </div>
  );
};

export default MovieCard;
