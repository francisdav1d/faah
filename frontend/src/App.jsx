import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import Cards from "./components/Hero/Cards";
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'

function Home(){
  return (
    <div className="root">
      <Navbar />
      <Hero />
      <Cards />
    </div>
  )
}

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  )
}
