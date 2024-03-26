"use client";

import { useState } from "react";
import { PiEye, PiEyeSlash } from "react-icons/pi";

const Login = () => {
  const [inputName, setInputName] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [isNameFocus, setIsNameFocus] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);

  const [reveledPassword, setReveledPassword] = useState(false);

  const handleBlurName = () => {
    if (inputName === "") {
      setIsNameFocus(false);
    }
  };
  const handleBlurPassword = () => {
    if (inputPassword === "") {
      setIsPasswordFocus(false);
    }
  };

  return (
    <form className="bg-gray-100 text-gray-800 w-full h-full px-14 py-32 rounded shadow-lg flex flex-col justify-center align-center gap-20 dark:bg-gray-900 dark:text-gray-50 dark:shadow-xl lg:w-2/5 lg:max-h-[40rem] md:w-3/5 md:max-h-[40rem]">
      <h1 className="text-4xl font-bold text-center">Sign In</h1>
      <div className="text-zinc-700 flex flex-col gap-6">
        <div className="w-full h-14 relative">
          <label htmlFor="name" className="w-full h-full">
            <input
              className="bg-gray-50 text-base font-sans w-full h-full pl-2 pt-2 rounded border-solid border border-slate-700 hover:bg-gray-100 focus:hover:bg-gray-50 focus:outline-none focus:border-purple-300 focus:shadow-as focus:shadow-purple-700 dark:border-purple-200 dark:focus:shadow-purple-200"
              type="text"
              name="name"
              id="name"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              onFocus={() => setIsNameFocus(true)}
              onBlur={handleBlurName}
            />
            <span
              className={` absolute left-0 translate-y-[-50%] transition-all ease-in-out ${
                isNameFocus
                  ? "font-bold text-sm mt-3 ml-2 top-0"
                  : "font-semibold text-base ml-2 top-2/4"
              } `}
            >
              Name
            </span>
          </label>
        </div>
        <div className="w-full h-14 relative">
          <label htmlFor="password" className="w-full h-full">
            <span
              className={`absolute left-0 translate-y-[-50%] transition-all ease-in-out ${
                isPasswordFocus
                  ? "font-bold text-sm mt-3 ml-2 top-0"
                  : "font-semibold text-base ml-2 top-2/4"
              } `}
            >
              Password
            </span>
            <input
              className="bg-gray-50 text-base font-sans w-full h-full pl-2 pt-2 rounded border-solid border border-slate-700 hover:bg-gray-100 focus:hover:bg-gray-50 focus:outline-none focus:border-purple-300 focus:shadow-as focus:shadow-purple-700 dark:border-purple-200 dark:focus:shadow-purple-200"
              type={`${reveledPassword ? "text" : "password"}`}
              name="password"
              id="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              onFocus={() => setIsPasswordFocus(true)}
              onBlur={handleBlurPassword}
            />
          </label>
          <span className="mr-2 absolute right-0 translate-y-[-50%] top-2/4">
            {reveledPassword ? (
              <PiEyeSlash
                className="text-lg cursor-pointer"
                onClick={() => setReveledPassword(!reveledPassword)}
              />
            ) : (
              <PiEye
                className="text-lg cursor-pointer"
                onClick={() => setReveledPassword(!reveledPassword)}
              />
            )}
          </span>
          <span className="text-gray-800 text-xs text-gray-50 cursor-pointer select-none hover:text-purple-500 dark:text-gray-50 dark:hover:text-purple-300">
            I forgot my password
          </span>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="bg-purple-400 font-bold select-none w-full h-14 rounded hover:bg-purple-500 dark:bg-purple-500 dark:hover:bg-purple-600"
        >
          Login
        </button>
        <p className="text-gray-800 text-sm text-gray-50 select-none mt-4 dark:text-gray-50">
          {`Don't have an account? `}
          <span className="cursor-pointer hover:text-purple-500 dark:hover:text-purple-300">
            Sign Up
          </span>
        </p>
      </div>
    </form>
  );
};

export default Login;
