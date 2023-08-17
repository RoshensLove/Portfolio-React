import React, { Component } from 'react'
import github from './../../img/icons/github.svg';


import './../btnGitHub/btnGitHub.css';


const BtnGitPage = ({link}) => {
    return (
      <div>
          <a href={link} rel="noreferrer" target='_blank' className="btn-outline">
              <img src={github} alt="github-img"/>
              GitHub page
          </a>
      </div>
      );
  };


export default BtnGitPage;
