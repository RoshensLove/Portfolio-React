import React, { Component } from 'react'
import output from './../../img/icons/output.svg';


import './../DemoPages/LiveDemo.css'

const BtnGitPage = ({link}) => {
    return (
      <div>
          <a href={link} rel="noreferrer" target='_blank' className="btn-outline">
              <img src={output} alt="github-img"/>
              Live Demo
          </a>
      </div>
      );
  };


export default BtnGitPage;
