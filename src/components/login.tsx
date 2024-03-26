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
    <form className="dark:text-gray-50 text-gray-800 flex flex-col justify-center align-center w-1/3 px-20 py-36 dark:bg-gray-800 bg-gray-200 gap-20 rounded-lg shadow-[0rem_0rem_.5rem_0rem_rgba(122,53,122,1)]">
      <h1 className="text-3xl font-semibold ">Sign In</h1>
      <div className="flex flex-col gap-6 text-zinc-700">
        <div className="relative w-full h-14">
          <label htmlFor="name" className="w-full h-full">
            <input
              className="w-full h-full peer pl-2 pt-2 bg-gray-100 focus:outline-none hover:bg-gray-200 focus:bg-gray-50 border-solid border border-slate-700 focus:border-purple-300 focus:shadow-[0rem_0rem_.25rem_0rem_rgba(122,53,122,1)] text-base font-sans rounded"
              type="text"
              name="name"
              id="name"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              onFocus={() => setIsNameFocus(true)}
              onBlur={handleBlurName}
            />
            <span
              className={`absolute left-0 translate-y-[-50%] transition-all ease-in-out ${
                isNameFocus
                  ? "top-0 mt-4 ml-2 text-sm font-semibold"
                  : "top-2/4 ml-2 text-base"
              } `}
            >
              Name
            </span>
          </label>
        </div>
        <div className="relative w-full h-14">
          <label htmlFor="password" className="w-full h-full">
            <span
              className={`absolute left-0 translate-y-[-50%] transition-all ease-in-out ${
                isPasswordFocus
                  ? "top-0 mt-4 ml-2 text-sm font-semibold"
                  : "top-2/4 ml-2 text-base"
              } `}
            >
              Password
            </span>
            <input
              className="text-base peer w-full h-full pl-2 pt-2 bg-gray-100 focus:outline-none hover:bg-gray-200 focus:bg-gray-50 border-solid border border-slate-700 focus:border-purple-300 focus:shadow-[0rem_0rem_.25rem_0rem_rgba(122,53,122,1)] text-sm font-sans rounded"
              type={`${reveledPassword ? "text" : "password"}`}
              name="password"
              id="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              onFocus={() => setIsPasswordFocus(true)}
              onBlur={handleBlurPassword}
            />
          </label>
          <span className="absolute right-0 translate-y-[-50%] top-2/4 mr-2">
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
          <span className=" dark:text-gray-50 text-gray-800 text-xs text-gray-50 hover:text-purple-300 cursor-pointer select-none">
            I forgot my password
          </span>
        </div>
      </div>
      <button
        type="submit"
        className="w-full h-14 bg-purple-500 hover:bg-purple-600 rounded font-semibold select-none"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
