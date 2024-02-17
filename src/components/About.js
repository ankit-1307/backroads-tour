import React from "react";
import aboutImg from "../images/about.jpeg";
import Title from "./Title";
const About = () => {
    return (
        <section className="section" id="about">
            <Title title="about" subTitle="us" />

            <div className="section-center about-center">
                <div className="about-img">
                    <img
                        src={aboutImg}
                        className="about-photo"
                        alt="awesome beach"
                    />
                </div>
                <article className="about-info">
                    <h3>explore the difference</h3>
                    <p>
                        Our team is made up of passionate travelers who have a
                        wealth of knowledge and experience in the travel
                        industry. From our expert travel advisors to our
                        friendly customer service team, we are all committed to
                        making your travel experience unforgettable.
                    </p>
                    <p>
                        Ready to start planning your next adventure? Explore our
                        website to find your perfect destination, or contact our
                        team for personalized travel recommendations.
                    </p>
                    <a href="#" className="btn">
                        read more
                    </a>
                </article>
            </div>
        </section>
    );
};

export default About;
