import React, { useRef } from "react";
import { API_OPTIONS, NETFLIX_BACKGROUND } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import client from "../utils/openai";
import { addGptMovieResult } from "../utils/gptSlice";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptResults = await client.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a movie recommendation system. Respond with exactly 5 movie names of the genre asked, each name separated by a comma, no extra text. Example: inception, interstellar, shutter island, se7en, fight club.",
        },
        {
          role: "user",
          content: searchText.current.value,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });

    const raw = gptResults?.choices?.[0]?.message?.content || "";
    const gptMovies = raw
      .split(",")
      .map((m) => m.trim())
      .filter(Boolean);
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-black text-white">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <img
          className="object-cover w-full h-full opacity-40"
          src={NETFLIX_BACKGROUND}
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      </div>

      <div className="pt-24 md:pt-32 lg:pt-40" />

      <div className="px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
            AI Movie Recommendations
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Discover your next favorite movie with AI-powered suggestions
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-4xl mx-auto bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 px-6 py-4"
        >
          <input
            ref={searchText}
            type="text"
            className="flex-grow w-full bg-transparent outline-none text-white placeholder-gray-400 px-4 py-3 text-lg md:text-xl font-medium border-b-2 border-transparent focus:border-red-500 transition-colors"
            placeholder={lang[langKey].placeholder}
          />
          <button
            onClick={handleGptSearchClick}
            className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>

      <div className="mt-12 px-4 md:px-6 lg:px-8">
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearchBar;
