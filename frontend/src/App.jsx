import "./App.css"
import Navbar from "./components/navbar"
import  Hero from "./components/hero"

export default function App(){
    return(
        <div className="root">
            <Navbar/>
            <Hero/>
        </div>
    )
}