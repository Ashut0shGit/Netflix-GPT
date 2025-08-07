import React from "react";
import useMovieLogo from "../hooks/useMovieLogo";
import { Play, Info } from "lucide-react";
const VideoTitle = ({ id, logo, title, desc }) => {
  const logoUrl = useMovieLogo(id);

  return (
    <div className="w-full aspect-video absolute pt-[17%] px-6 md:px-12 lg:px-24 text-white bg-gradient-to-r from-black">
      {logoUrl ? (
        <img
          className="w-[140px] md:w-[200px] lg:w-[260px] mb-4"
          src={logoUrl}
          alt="Movie Poster"
        />
      ) : (
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
          {title}
        </h1>
      )}

      <p className="text-xs md:text-sm lg:text-base max-w-xl mb-4 md:mb-6 line-clamp-8">
        {desc}
      </p>
      <div className="flex gap-3 md:gap-4">
        <button className="bg-white bg-opacity-90 text-black font-semibold px-6 py-2 rounded-md hover:bg-opacity-100 flex items-center gap-2">
          <Play size={25} /> Play
        </button>
        <button className="bg-gray-700 bg-opacity-80 text-white px-6 py-2 rounded-md hover:bg-opacity-90 flex items-center gap-2">
          <Info size={25} /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
