import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Chat from "./pages/Chat";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Logout from "./pages/Logout";
import LogoutButton from "./pages/Logout";
import LoginButton from "./pages/LogIn";

import Form from "./pages/Form";
import Timeline from "./pages/Timeline";

import Home from "./pages/Home";

export default function App() {
  return (
    <div className="flex flex-row">
      <NavBar />
      <Routes>
        <Route path="/chatbot" element={<Chat />}></Route>
        <Route path="/logout" element={<LogoutButton />}></Route>
        <Route path="/login" element={<LoginButton />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
    </div>
  );
}
