import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <aside className="h-screen w-[300px] bg-gray-800 text-white flex flex-col [&>*]:mt-3 [&>*]:rounded-md [&>*]:p-3  text-xl items-center">
        <Link className="hover:bg-gray-600" to="/chatbot">
          <div>Chatbot</div>
        </Link>
        <Link className="hover:bg-gray-600" to="/chatbot">
          <div className="hover:bg-gray-600">Form</div>
        </Link>
        <Link className="hover:bg-gray-600" to="/chatbot">
          <div className="hover:bg-gray-600">home</div>
        </Link>
      </aside>
    </div>
  );
}
