import React from "react";
import {Routes, Route, NavLink, Navigate} from "react-router-dom";
import {Home} from "../components/home/Home";
import {Portfolio} from "../components/portfolio/Portfolio";
import {Services} from "../components/services/Services";
import {Curriculum} from "../components/cv/Curriculum";
import {Contact} from "../components/contact/Contact";
import {Error} from "../components/error/Error";



export const Routing = () => {
  return(
      // Header && NavBar

      // Container Principal
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/curriculum" element={<Curriculum/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>

      //Footer

  )
}