import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_LOGO } from "../utils/constants";
import { ScanSearch } from "lucide-react";
import { toggleGptSearchView } from "../utils/gptSlice";

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

  return (
    <div className="absolute w-full px-8 py-2 pl-20 bg-gradient-to-b from-black to-transparent z-50 flex justify-between">
      <img className="w-48" src={LOGO} alt="Netflix Logo" />
      {user && (
        <div className="flex items-center gap-2">
          <button
            className="flex items-center gap-2 text-white font-semibold bg-gradient-to-b from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 px-6 py-2 mx-4 my-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            onClick={handleGptSearchToggle}
          >
            GPT Search <ScanSearch className="w-5 h-5" />
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
