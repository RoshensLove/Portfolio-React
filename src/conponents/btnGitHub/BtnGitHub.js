import React, { Component } from 'react'
import github from './../../img/icons/github.svg';

import './../btnGitHub/btnGitHub.css';


const BtnGitOutput = ({link}) => {
    return (
      <div>
          <a href={link} target='_blank' className="btn-outline">
              <img src={github} alt="github-img"/>
              GitHub repo
          </a>
      </div>
      );
  };


export default BtnGitOutput;
