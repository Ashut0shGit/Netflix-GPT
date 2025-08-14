import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="w-full bg-gradient-to-b from-transparent via-black/20 to-black/40 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="w-full bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/30 p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Your AI Recommendations
            </h2>
            {/* <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div> */}
          </div>

          <div className="space-y-8">
            {movieNames.map((movieName, index) => (
              <div
                key={movieName}
                className="border-b border-gray-700/50 pb-6 last:border-b-0"
              >
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                    {movieName}
                  </h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
                </div>
                <div className="relative  rounded-xl">
                  <MovieList
                    title={movieName}
                    movies={movieResults[index]}
                    hideTitle={true}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
