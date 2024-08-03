import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaWpforms, FaBars } from "react-icons/fa";
import { CiChat2 } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <aside
        className={`h-screen bg-gray-800 text-white flex flex-col justify-between  duration-300 ${
          isOpen ? "w-[20vw]" : "w-[5vw]"
        }`}
      >
        <div className="flex flex-col items-center [&>*]:mt-3">
          <button
            onClick={toggleNavBar}
            className="self-end p-2 mr-4 text-xl duration-300"
          >
            <FaBars />
          </button>
          {isOpen && (
            <>
              <Link
                className="w-[250px] flex items-center hover:bg-gray-600 rounded-md p-3 text-xl"
                to="/home"
              >
                <IoHomeOutline />
                <div className="ml-3">Home</div>
              </Link>
              <Link
                className="w-[250px] flex items-center hover:bg-gray-600 rounded-md p-3 text-xl"
                to="/chatbot"
              >
                <CiChat2 />
                <div className="ml-3">Chatbot</div>
              </Link>
              <Link
                className="w-[250px] flex items-center hover:bg-gray-600 rounded-md p-3 text-xl"
                to="/form"
              >
                <FaWpforms />
                <div className="ml-3">Form</div>
              </Link>
            </>
          )}
          {!isOpen && (
            <div className="flex flex-col">
              <Link
                className="flex items-center hover:bg-gray-600 rounded-md p-3 text-xl"
                to="/home"
              >
                <IoHomeOutline />
              </Link>
              <Link
                className=" flex items-center hover:bg-gray-600 rounded-md p-3 text-xl"
                to="/chatbot"
              >
                <CiChat2 />
              </Link>
              <Link
                className="flex items-center hover:bg-gray-600 rounded-md p-3 text-xl"
                to="/form"
              >
                <FaWpforms />
              </Link>
            </div>
          )}
        </div>
        {isOpen && (
          <div className="flex justify-center">
            <Link to="/signup">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
              >
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button
                type="button"
                className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
              >
                Log In
              </button>
            </Link>
          </div>
        )}
      </aside>
    </div>
  );
}
