import React from "react";
import Title from "./components/Title";
import { featured } from "./components/data";

const Tours = () => {
    return (
        <section className="section" id="tours">
            <Title title="featured" subTitle="tours" />

            <div className="section-center featured-center">
                {featured.map(
                    ({
                        id,
                        icon,
                        startDate,
                        description,
                        title,
                        country,
                        days,
                        price,
                    }) => {
                        return (
                            <article className="tour-card" key={id}>
                                <div className="tour-img-container">
                                    <img
                                        src={icon}
                                        className="tour-img"
                                        alt=""
                                    />
                                    <p className="tour-date">{startDate}</p>
                                </div>
                                <div className="tour-info">
                                    <div className="tour-title">
                                        <h4>{title}</h4>
                                    </div>
                                    <p>{description}</p>
                                    <div className="tour-footer">
                                        <p>
                                            <span>
                                                <i className="fas fa-map"></i>
                                            </span>{" "}
                                            {country}
                                        </p>
                                        <p>{days}</p>
                                        <p>{price}</p>
                                    </div>
                                </div>
                            </article>
                        );
                    }
                )}
            </div>
        </section>
    );
};

export default Tours;
