import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import Cards from "./components/Hero/Cards";
import Login from "./components/Login";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
    </>
  );
}

export default function App() {
  return (
    <div className="root">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}