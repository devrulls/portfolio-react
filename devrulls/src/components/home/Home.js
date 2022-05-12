import React from "react";
import "../../global_variables.css";
import "./home.css";
import {Link} from "react-router-dom";
import {PortfolioList} from "../portfolioList/PortfolioList";

export const Home = () => {
    return (
        <div  className="home">
            <h1>
                Hi I'm Raul Hernandez, I'm a <strong>web developer</strong> located in Montpellier and I would like to provide my
                services of <strong>programming and development</strong> in web projects.
            </h1>
            <h2 className="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa dicta ducimus eum laborum
                maiores obcaecati temporibus voluptatum? Aspernatur cupiditate dicta distinctio expedita illum iusto
                quidem quis, reiciendis voluptates voluptatum.  <Link to="/contact">Get in touch with me.</Link>
            </h2>
            <section className="last-works">
                <h2 className="heading">
                    Here you will find some of my projects
                </h2>
                <p>Here are some of my projects</p>
            <PortfolioList limit="2"/>
            </section>
        </div>
    )
}