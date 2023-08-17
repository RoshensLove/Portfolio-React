import React from 'react'
import './comp-main.css'

export default function Main() {
  return (
    <main className="main">
          <div className="container">
              <ul className="main-list">
                  <li className="main-list__item">
                      <h2 className="main__title">Frontend</h2>
                      <p className="main__text">HTML, CSS, JavaScript, TypeScript, ReactJS, NPM, BootStrap, TailwindCSS, Git</p>
                  </li>
              </ul>
              <ul className="main-list">
                  <li className="main-list__item">
                      <h2 className="main__title">Project engineer</h2>
                      <p className="main__text">AutoCad, Revit</p>
                  </li>
              </ul>
          </div>
      </main>
  )
}
