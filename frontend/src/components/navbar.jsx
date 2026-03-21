import "./navbar.css"

export default function Navbar(){
    return(
        <div className="navbar">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>TOP Artists</li>
                |
                <li><button  id="login-btn">Login</button></li>
                <li><button id="register">Register</button></li>
            </ul>
        </div>
    )
}