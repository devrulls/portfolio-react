import React from "react";
import "../../global_variables.css";
import "./home.css";
import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <h1>
                Hi I'm Raul Hernandez, I'm a web developer located in Montpellier and I would like to provide my
                services of programming and development in web projects.
            </h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa dicta ducimus eum laborum
                maiores obcaecati temporibus voluptatum? Aspernatur cupiditate dicta distinctio expedita illum iusto
                quidem quis, reiciendis voluptates voluptatum.  <Link to="/contact">Get in touch with me.</Link>
            </h2>
            <section className="last-works">
                <h2>
                    Here you will find some of my projects
                </h2>
                <div className="works">

                </div>

            </section>
        </div>
    )
}