import "./App.css"
import Navbar from "./components/navbar/navbar"
import  Hero from "./components/hero/hero"

export default function App(){
    return(
        <div className="root">
            <Navbar/>
            <Hero/>
        </div>
    )
}