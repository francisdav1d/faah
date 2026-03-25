import "./App.css"
import Navbar from "./components/Navbar/navbar"
import  Hero from "./components/Hero/hero"
import Cards from "./components/Hero/Cards"

export default function App(){
    return(
        <div className="root">
            <Navbar/>
            <Hero/>
            <Cards/>
        </div>
    )
}