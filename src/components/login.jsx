import Header from "./Header";
import { SquareCheck } from "lucide-react";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Handle sign in or sign up logic here
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    console.log(message);
  };

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen w-screen">
      <Header className="relative z-10" />
      <div className="absolute inset-0 z-0">
        <img
          className="object-cover w-full h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="Netflix Background"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 p-12 absolute my-36  mx-auto right-0 left-0 bg-black bg-opacity-70  rounded-lg text-white"
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
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
          placeholder="password"
        />
        <p className="text-red-600 text-sm">{errorMessage}</p>
        <button
          className="p-2 my-6 bg-red-600 w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="flex items-center text-sm">
          <SquareCheck /> Remember me
        </p>
        <p
          className="flex items-center text-sm my-2 cursor-pointer"
          onClick={toggleForm}
        >
          {isSignInForm ? (
            <>
              <span className="text-gray-400">New to Netflix ?</span> &nbsp;
              <span className="text-white font-semibold">Sign up now.</span>
            </>
          ) : (
            <>
              <span className="text-gray-400">Already have an account ?</span>{" "}
              &nbsp;
              <span className="text-white font-semibold">Sign in now.</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};
export default Login;
