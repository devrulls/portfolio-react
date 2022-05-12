import React from "react";
import "../../global_variables.css";
import "./porfolio.css";
import {Link} from "react-router-dom";
import {PortfolioList} from "../portfolioList/PortfolioList";

export const Portfolio = () => {
    return (
        <div className="page">
            <h1 className="heading">Portfolio page</h1>
            <section className="works">
                <PortfolioList/>
            </section>
        </div>
    )
}