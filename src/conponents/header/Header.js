import React from 'react'
import './header.css'

export default function Header() {
  return (
    <header className="header">
          <div className="header__wrapper">
              <h1 className="header__title"><strong>Hi, my name is <em>Oleg</em></strong><br/>
              a frontend developer
              </h1>
              <p className="header__text">better than yesterday</p>
              <a href="https://drive.google.com/file/d/1uCHmwotK5-XlXVNQEmfD9M_SatVMCZKv/view" target="_blank" className="btn">Download CV</a>
              
          </div>
      </header>
  )
}
