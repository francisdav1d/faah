import "./navbar.css"
import logo from "../assets/react.svg"

export default function Navbar(){
    return(
        <div className="navbar">
            <img src={logo} alt="Logo" className="logo"/>
            <ul>
                <li>TRACK</li>
                <li>SHARE</li>
                <li>ROOMS</li>
                <li>COLLECTIVE</li>
                <button id="btn">GET EARLY ACCESS</button>
            </ul>
        </div>
    )
}