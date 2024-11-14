import React from "react";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../firebase";

const LoginForm = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <form className="max-w-sm mx-auto border-2 border-blue-500 shadow-2xl rounded-md p-8">
        <div className="flex mb-10 items-center gap-12">
          <svg
            width="70"
            height="70"
            viewBox="0 0 341 341"
            fill="none"
            className=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M170.5 0C76.3125 0 0 76.3125 0 170.5C0 264.688 76.3125 341 170.5 341C264.688 341 341 264.688 341 170.5C341 76.3125 264.688 0 170.5 0ZM170.5 66C203.913 66 231 93.0875 231 126.5C231 159.913 203.913 187 170.5 187C137.087 187 110 159.913 110 126.5C110 93.0875 137.087 66 170.5 66ZM170.5 302.5C130.144 302.5 93.9812 284.212 69.7812 255.612C82.7063 231.275 108.006 214.5 137.5 214.5C139.15 214.5 140.8 214.775 142.381 215.256C151.319 218.144 160.669 220 170.5 220C180.331 220 189.75 218.144 198.619 215.256C200.2 214.775 201.85 214.5 203.5 214.5C232.994 214.5 258.294 231.275 271.219 255.612C247.019 284.212 210.856 302.5 170.5 302.5Z"
              fill="#007AFF"
            />
          </svg>
          <h3 className="text-3xl text-blue-500 font-bold">Login!</h3>
        </div>
        <div className="flex flex-col items-center">
          <input
            type="email"
            id="email"
            className="shadow-sm border-4 border-blue-500 text-lg rounded-full focus:ring-blue-500 focus:border-blue-500 block px-8 py-2 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-semibold mb-5"
            placeholder="Username"
            required
          />
          <input
            type="password"
            id="password"
            className="shadow-sm border-4 border-blue-500 text-gray-900 text-lg rounded-full focus:ring-blue-500 focus:border-blue-500 block  px-8 py-2 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-semibold mb-5"
            placeholder="Kata Sandi"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2 font-semibold text-sm rounded-lg flex justify-center px-16 py-3 mx-auto"
        >
          Masuk
        </button>
        <button
          type="submit"
          className="text-blue-500 border-2 border-blue-500 bg-white hover:bg-blue-500 hover:text-white font-semibold text-sm rounded-lg flex justify-center  mx-auto mt-5 px-8 py-3 group"
          onClick={signInWithGoogle}
        >
          Masuk menggunakan google
          <svg
            className="ml-3 w-6 h-6 text-blue-500 group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
