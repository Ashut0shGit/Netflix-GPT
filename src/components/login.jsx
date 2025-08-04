import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    // Handled sign in or sign up logic here
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/71293287?v=4",
          })
            .then(() => {
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
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      //Sign In logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto">
      <Header className="relative z-10" />
      <div className="absolute inset-0 z-0 min-h-screen">
        <img
          className="object-cover w-full h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="Netflix Background"
        />
        <div className="absolute inset-0 bg-black opacity-55"></div>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
             w-[90%] sm:w-[400px] p-6 sm:p-10 bg-black bg-opacity-70 
             rounded-lg text-white"
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="p-3 my-3 w-full bg-[#333] bg-opacity-50 text-white  border border-[#a8a29e] rounded-md"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-3 my-3 w-full bg-[#333] bg-opacity-50 text-white  border border-[#a8a29e] rounded-md"
          type="email"
          placeholder="Email or mobile number"
        />
        <input
          ref={password}
          className="p-3 my-3 w-full bg-[#333] bg-opacity-50 text-white  border border-[#a8a29e] rounded-md"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-600 text-sm">{errorMessage}</p>
        <button
          className="p-2 my-6 bg-red-600 w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {/* <p className="flex items-center text-sm">
          <SquareCheck /> Remember me
        </p> */}
        <div className="flex flex-row text-sm font-semibold items-center justify-between">
          <div className="flex items-center gap-2">
            <input type="checkbox" className=" w-4 h-4" />
            <label>Remember me</label>
          </div>
          <span className="font-semibold cursor-pointer hover:underline">
            Forgot password?
          </span>
        </div>
        <p
          className="flex justify-center items-center text-sm my-4 cursor-pointer"
          onClick={toggleForm}
        >
          {isSignInForm ? (
            <>
              <span className="text-gray-400">New to Netflix ?</span> &nbsp;
              <span className="text-white font-semibold hover:underline">
                Sign up now.
              </span>
            </>
          ) : (
            <>
              <span className="text-gray-400">Already have an account ?</span>{" "}
              &nbsp;
              <span className="text-white font-semibold hover:underline">
                Sign in now.
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};
export default Login;
