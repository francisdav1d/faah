import "./hero.css"
import image from "../assets/hero.png"

export default function Hero() {
    return(
        <div className="hero">
            <div className="join-box">
                <h1>TRACK WHAT YOU LOVE</h1>
                <h1>DISCOVER WHO YOU ARE</h1>
                <h1>JOIN THE COMMUNITY</h1>
            </div>

            <img src={image} alt="image" className="image"></img>
        </div>
    )
}