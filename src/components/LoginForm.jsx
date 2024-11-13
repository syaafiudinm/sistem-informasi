import React from "react";
import "../index.css";

const LoginForm = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <svg
        width="320"
        height="320"
        viewBox="0 0 341 341"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M170.5 0C76.3125 0 0 76.3125 0 170.5C0 264.688 76.3125 341 170.5 341C264.688 341 341 264.688 341 170.5C341 76.3125 264.688 0 170.5 0ZM170.5 66C203.913 66 231 93.0875 231 126.5C231 159.913 203.913 187 170.5 187C137.087 187 110 159.913 110 126.5C110 93.0875 137.087 66 170.5 66ZM170.5 302.5C130.144 302.5 93.9812 284.212 69.7812 255.612C82.7063 231.275 108.006 214.5 137.5 214.5C139.15 214.5 140.8 214.775 142.381 215.256C151.319 218.144 160.669 220 170.5 220C180.331 220 189.75 218.144 198.619 215.256C200.2 214.775 201.85 214.5 203.5 214.5C232.994 214.5 258.294 231.275 271.219 255.612C247.019 284.212 210.856 302.5 170.5 302.5Z"
          fill="#007AFF"
        />
      </svg>
      <form className="max-w-sm mx-auto mt-14">
        <input
          type="email"
          id="email"
          className="shadow-sm border-4 border-blue-500 text-lg rounded-full focus:ring-blue-500 focus:border-blue-500 block min-w-96 h-14 px-8 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-semibold mb-5"
          placeholder="Username"
          required
        />
        <input
          type="password"
          id="password"
          className="shadow-sm border-4 border-blue-500 text-gray-900 text-lg rounded-full focus:ring-blue-500 focus:border-blue-500 block min-w-96 h-14 px-8 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-semibold mb-5"
          placeholder="Kata Sandi"
          required
        />
        <button
          type="submit"
          className="text-white bg-blue-500 hover:bg-blue-600 font-semibold text-lg rounded-full flex justify-center px-16 py-3 mx-auto"
        >
          Masuk
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
