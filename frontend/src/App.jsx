import "./App.css"
import Navbar from "./components/Navbar/navbar"
import  Hero from "./components/Hero/hero"

export default function App(){
    return(
        <div className="root">
            <Navbar/>
            <Hero/>
        </div>
    )
}