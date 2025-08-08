import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";
const VideoBackground = ({ id }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useTrailerVideo(id);

  return (
    <div className="w-full overflow-hidden relative aspect-video">
      <iframe
        className="absolute top-0 left-0 w-full h-full scale-[1.4] z-0"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&controls=0&loop=1&playlist=" +
          trailerVideo?.key +
          "&modestbranding=1&showinfo=0&rel=0&fs=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
      {/* <div className="absolute bottom-0 w-full h-60 bg-gradient-to-t from-black via-transparent to-transparent z-10" /> */}
    </div>
  );
};

export default VideoBackground;
