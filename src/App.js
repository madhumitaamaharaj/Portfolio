import React from "react";
import "./style.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Login from "./components/Login";
import Register from "./components/Register";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
