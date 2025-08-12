import React, { useRef } from "react";
import { NETFLIX_BACKGROUND } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import client from "../utils/openai";
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    const gptResults = await client.chat.completions
      .create({
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
      })
      .then((chatCompletion) => {
        console.log(chatCompletion.choices[0]?.message?.content || "");
      });
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0 min-h-screen">
        <img
          className="object-cover w-full h-full"
          src={NETFLIX_BACKGROUND}
          alt="Netflix Background"
        />
        <div className="absolute inset-0 bg-black opacity-55"></div>
      </div>

      <div className="flex justify-center mt-8 fixed top-20 left-0 right-0 z-50">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center w-full max-w-2xl bg-black/70 backdrop-blur-md rounded-full shadow-lg border border-gray-700 hover:border-red-500 transition-colors px-4 py-2"
        >
          <input
            ref={searchText}
            type="text"
            className="flex-grow bg-transparent outline-none text-white placeholder-gray-400 px-2 text-lg"
            placeholder={lang[langKey].placeholder}
          />
          <button
            onClick={handleGptSearchClick}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-semibold transition-colors"
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
