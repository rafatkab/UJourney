import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Chatbot from "./pages/Chatbot";
import Chat from "./pages/Chat";

export default function App() {
  return (
    <div className="flex flex-row">
      <NavBar />
      <Routes>
        <Route path="/chatbot" element={<Chat />}></Route>
      </Routes>
    </div>
  );
}
