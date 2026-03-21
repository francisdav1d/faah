import "./navbar.css"
import logo from "../assets/react.svg"

export default function Navbar(){
    return(
        <div className="navbar">
            <img src={logo} alt="Logo" className="logo"/>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>TOP Artists</li>
                |
                <li><button id="login-btn">Login</button></li>
                <li><button id="register">Register</button></li>
            </ul>
        </div>
    )
}