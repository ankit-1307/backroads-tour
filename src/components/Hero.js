import React from "react";

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-banner">
                <h1>Backroads App</h1>
                <p>
                    Take the first step, the rest will follow. Book the ticket,
                    apply for the job, send the email, jump into the water. The
                    rest gets easier from there.
                </p>
                <a href="#tours" className="btn hero-btn">
                    explore tours
                </a>
            </div>
        </section>
    );
};

export default Hero;
