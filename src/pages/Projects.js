import React, { Component } from 'react';
import Project from '../conponents/project.js/Project';
import {projects} from './../helpers/projectList';

import './../styles/main.css';

export class Projects extends Component {
  render() {
    return (
      <div>

        <main className="main">
          <div className="container"> 
            <h2 className="main__title">Projects</h2>
            <ul className="projects">

                {projects.map((project, index) => {
                  return <Project
                    key={project.id} 
                    title={project.title} 
                    img={project.img} 
                    index={index}
                    gitLink={project.gitHubLink}
                    gitPageLink={project.gitPageLink}
                    desc={project.desc}
                  />
                })}
                                
            </ul>
          </div>
        </main>

      </div>
    )
  }
}

export default Projects;