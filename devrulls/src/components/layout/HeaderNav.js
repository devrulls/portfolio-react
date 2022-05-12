import React from "react";
import "../../global_variables.css"
import "./headerNav.css"
import {NavLink} from "react-router-dom";

export const HeaderNav = () => {
    return (
        <header className="header">
            <div className="logo">
                <span>RH</span>
                <h3>Raul Hernandez WEB</h3>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/home"
                            className={({isActive}) => isActive ? "active" : ""}
                        >Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/portfolio"
                            className={({isActive}) => isActive ? "active" : ""}
                        >Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/services"
                            className={({isActive}) => isActive ? "active" : ""}
                        >Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/curriculum"
                            className={({isActive}) => isActive ? "active" : ""}
                        >Curriculum
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({isActive}) => isActive ? "active" : ""}
                        >Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}