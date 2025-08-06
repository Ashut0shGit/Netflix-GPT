import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieLogo = (id) => {
  const [logoUrl, setLogoUrl] = useState(null);
  useEffect(() => {
    const fetch_logo = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/images`,
        API_OPTIONS
      );

      const json = await res.json();
      const englishLogo = json.logos?.find((l) => l.iso_639_1 === "en");
      if (englishLogo) {
        setLogoUrl(`https://image.tmdb.org/t/p/w500${englishLogo.file_path}`);
      }
    };
    if (id) fetch_logo();
  }, [id]);
  return logoUrl;
};

export default useMovieLogo;
