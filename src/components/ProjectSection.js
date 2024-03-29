import React from "react";
import ProjectCard from "./ProjectCard";
import {Consumer} from "./Context";
import { Link } from "react-router-dom";

function ProjectSection() {
  return(
    <Consumer>
      {(value) => {
        const {projects} = value;
          return (
            <div className="container text-center my-5">
              <h1 className="font-weight-light blogs">
                Our <span className="text-warning">Products</span>
              </h1>
              <div className="lead projects">I build products. Just like this website</div>
              <div className="row my-5 pt-3">
                {projects.slice(0,3).map((project) => (
                  <div key={project.id} className="col-12 col-md-4 my-2">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
              <div className="my-5">
                <Link to="/allProjects" className="text-dark text-right">
                  <h5>
                    See my projects
                    <i className="fas fa-arrow-right align-middle"></i>
                  </h5>
                </Link>
              </div>
            </div>
          );
      }}
    </Consumer>
  )
}

export default ProjectSection;