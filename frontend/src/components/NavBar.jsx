import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../pages/Logout";

export default function NavBar() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div>
      <aside className="h-screen w-[300px] bg-gray-800 text-white flex flex-col justify-between">
        <div className=" flex flex-col [&>*]:w-[250px] [&>*]:text-center [&>*]:mt-3 [&>*]:rounded-md [&>*]:p-3  text-xl items-center">
          <Link className="hover:bg-gray-600" to="/chatbot">
            <div>Chatbot</div>
          </Link>
          <Link className="hover:bg-gray-600" to="/chatbot">
            <div className="hover:bg-gray-600">Form</div>
          </Link>
          <Link className="hover:bg-gray-600" to="/chatbot">
            <div className="hover:bg-gray-600">home</div>
          </Link>
        </div>
        <div className="flex justify-center">
          {isAuthenticated === true ? (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <LogoutButton />
      </div>) : (
        <>
          <Link to="/signup">
            <button
              type="button"
              class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
              >
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button
              type="button"
              class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
              >
              Log In
            </button>
          </Link>
              </>
      )}
        </div>
      </aside>
    </div>
  );
}
