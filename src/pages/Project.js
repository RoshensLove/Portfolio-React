import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import BtnGitHub from './../conponents/btnGitHub/BtnGitHub';
import LiveDemo from '../conponents/DemoPages/LiveDemo.js';
import { projects } from '../helpers/projectList';



const Project = () => {
    const {id} = useParams();
    const project = projects[id]; 

    return (
      <div>

        <main className="main">
            <div className="container">
                <div className="project-details">
                    <h1 className="main__title">{project.title}</h1>
                    <div className="project-details__desc">
                      <p>{project.desc}</p>
                    </div>
                    <img src={project.bigImg} alt={project.title} className="project-details__img"/>
                    <div className="project-details__desc">
                      <p>{project.skills}</p>
                    </div>
                    
                    <LiveDemo link={project.liveDemo}/>
                    <BtnGitHub link={project.gitHubLink}/>
                </div>
            </div>
        </main>

      </div>
    )
  }


export default Project