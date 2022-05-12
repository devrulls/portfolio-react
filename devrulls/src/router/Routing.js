import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {Home} from "../components/home/Home";
import {Portfolio} from "../components/portfolio/Portfolio";
import {Services} from "../components/services/Services";
import {Curriculum} from "../components/cv/Curriculum";
import {Contact} from "../components/contact/Contact";
import {Error} from "../components/error/Error";
import {HeaderNav} from "../components/layout/HeaderNav";
import {Footer} from "../components/layout/Footer";
import {Project} from "../components/portfolio/Project";


export const Routing = () => {
    return (
        <>
            {/*// Header && NavBar*/}
            <HeaderNav/>

            {/*// Container Principal*/}
            <section className="content">
                <Routes>
                    <Route path="/" element={<Navigate to="/home"/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/curriculum" element={<Curriculum/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/project/:id" element={<Project/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </section>
            {/*//Footer*/}
            <Footer/>
        </>
    )
}