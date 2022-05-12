import React from "react";
import "../../global_variables.css";
import "../portfolio/porfolio.css";
import {works} from "../../data/works";
import {Link} from "react-router-dom";

export const PortfolioList = ({limit}) => {
    return (
        <section className="works">
            {
                works.slice(0,limit).map(work => {
                    return (
                        <article key={work.id} className="work-item">
                            <div className="mask">
                                <img src={"/img/" + work.id + ".jpg"}/>
                            </div>
                            <span>{work.categories}</span>
                            <h2><Link to={/project/ + work.id}>{work.title}</Link></h2>
                            <h3>{work.technologies}</h3>
                        </article>
                    )
                })
            }
        </section>
    )
}