import React from "react";
import { CircleX } from "lucide-react";

export const checkValidData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email.trim()
  );
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*+=])(?=\S+$).{8,20}$/.test(
      password.trim()
    );

  if (!isEmailValid)
    return (
      <div className="flex items-center gap-2">
        <CircleX className="w-5 h-5" />
        <span>Please enter a valid email or mobile number.</span>
      </div>
    );
  if (!isPasswordValid)
    return (
      <div className="flex items-center gap-2">
        <CircleX className="w-5 h-5" />
        <span>Please enter a valid password.</span>
      </div>
    );

  return null;
};
