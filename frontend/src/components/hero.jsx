import "./hero.css"

function Hero(){
    return(
        <section className="hero">

            <h1 className="hero-title">
                YOUR MUSIC.<br/>
                THEIR EARS.
            </h1>

            <p className="hero-subtext">
                The platform for high-fidelity social listening
                and ritualistic track discovery.
            </p>

            <div className="hero-actions">

                <button className="primary-btn">
                    GET EARLY ACCESS
                </button>

                <span className="secondary-link">
                    SEE HOW IT WORKS
                </span>

            </div>

        </section>
    )
}

export default Hero