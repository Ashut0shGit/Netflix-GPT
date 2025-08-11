import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_LOGO } from "../utils/constants";
import { ScanSearch } from "lucide-react";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchToggle = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div className="absolute w-full px-8 py-2 pl-20 bg-gradient-to-b from-black to-transparent z-50 flex justify-between">
      <img className="w-48" src={LOGO} alt="Netflix Logo" />
      {user && (
        <div className="flex items-center gap-2">
          {showGptSearch && (
            <select
              className="bg-black/70 text-white border border-gray-700 rounded-md px-2 py-2 text-sm
             focus:outline-none focus:border-red-500 hover:border-red-400 transition-colors
             cursor-pointer m-2 h-10"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="relative flex items-center gap-2 text-white text-sm font-medium bg-[#1a1a1a] 
             px-5 py-2 rounded-md border border-[#333] shadow-sm hover:bg-[#2a2a2a] 
             hover:border-[#444] hover:shadow-md transition-all duration-300 mr-6 h-10"
            onClick={handleGptSearchToggle}
          >
            {showGptSearch ? (
              "Homepage"
            ) : (
              <>
                GPT Search
                <span className="absolute -top-2 -right-2 bg-red-600 text-[9px] font-bold text-white px-1.5 py-0.2 rounded-sm transform rotate-12 shadow-md">
                  NEW
                </span>
              </>
            )}
          </button>

          <img className="w-10 h-10" src={USER_LOGO} alt="user-logo" />
          <button
            onClick={handleSignOut}
            className="hover-pointer hover:underline font-bold text-white "
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
