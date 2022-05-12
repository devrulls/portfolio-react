import React, {useEffect, useState} from "react";
import "../../global_variables.css";
import "./project.css";
import {useNavigate, useParams} from "react-router-dom";
import {works} from "../../data/works";

export const Project = () => {
    const {id} = useParams();
    const [project, setProject] = useState({});
    useEffect(() => {
        let project_filter = works.filter(work => work.id === id)
        setProject(project_filter[0]);

    }, []);
    console.log("project state ====>", project);


    return (
        <div className="page page-work">
            <div className="mask">
                <img src={"/img/" + project.id + ".jpg"}/>
            </div>
            <h1 className="heading">Project: {project.title}</h1>
            <p>{project.description}</p>
            <a href={"http://"+ project.url} target="_blank">Go to project</a>
        </div>
    )
}