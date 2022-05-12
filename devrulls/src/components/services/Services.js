import React from "react";
import "../../global_variables.css";
import "./services.css";

export const Services = () => {
    return (
        <div className="page">
            <h1>Services</h1>
            <section className="services">
                <article className="service">
                    <h2>Web design</h2>
                    <p>Make your website beautiful and elegant</p>
                </article>
                <article className="service">
                    <h2>Web development</h2>
                    <p>Create your amazing website </p>
                </article>
                <article className="service">
                    <h2>Web positioning</h2>
                    <p>More visibility for your website</p>
                </article>

            </section>
        </div>
    )
}