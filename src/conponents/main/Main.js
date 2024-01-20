import React from 'react'
import './comp-main.css'

import html from '../../img/tools/html.png'
import css from '../../img/tools/css.png'
import js from '../../img/tools/js.png'
import react from '../../img/tools/react.png'
import bem from '../../img/tools/bem.png'
import bootstrap from '../../img/tools/bootstrap.png'
import git from '../../img/tools/git.png'
import figma from '../../img/tools/figma.png'
import jira from '../../img/tools/jira.png'

import autocad from '../../img/tools/autocad.png'
import revit from '../../img/tools/revit.png'
import navisworks from '../../img/tools/navisworks.png'


export default function Main() {
  return (
    <main className="main">
          <div className="container">
              <ul className="main-list">
                  <li className="main-list__item">
                    <h2 className="main__title">Frontend</h2>
                    <div class="Section_info">
                        <div class="Tools_container">
                            <div class="Tools_card">
                                <figure>
                                    <img src={html} alt="html"></img>
                                    <figcaption>HTML</figcaption>
                                </figure>
                            </div>
                            <div class="Tools_card">
                                <figure>
                                    <img src={css} alt="css"></img>
                                    <figcaption>CSS</figcaption>
                                </figure>
                            </div>
                            <div class="Tools_card">
                                <figure>
                                    <img src={js} alt="js"></img>
                                    <figcaption>JS</figcaption>
                                </figure>
                            </div>
                            <div class="Tools_card">
                                <figure>
                                    <img src={react} alt="react"></img>
                                    <figcaption>React</figcaption>
                                </figure>
                            </div>
                            <div class="Tools_card">
                                <figure>
                                    <img src={bootstrap} alt="bootstrap"></img>
                                    <figcaption>Bootstrap</figcaption>
                                </figure>
                            </div>
                            <div class="Tools_card">
                                <figure>
                                    <img src={git} alt="git"></img>
                                    <figcaption>Git</figcaption>
                                </figure>
                            </div>
                            <div class="Tools_card">
                                <figure>
                                    <img src={bem} alt="bem"></img>
                                    <figcaption>BEM</figcaption>
                                </figure>
                            </div>
                            <div class="Tools_card">
                                <figure>
                                    <img src={figma} alt="figma"></img>
                                    <figcaption>Figma</figcaption>
                                </figure>
                            </div>
                            <div class="Tools_card">
                                <figure>
                                    <img src={jira} alt="jira"></img>
                                    <figcaption>Jira</figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                  </li>
              </ul>
              <ul className="main-list">
                  <li className="main-list__item">
                    <h2 className="main__title">Project engineer</h2>
                    <div class="Section_info">
                        <div class="Tools_container">
                            <div class="Tools_card">
                                <figure>
                                    <img src={autocad} alt="autocad"></img>
                                    <figcaption>Autocad</figcaption>
                                </figure>
                            </div>
                            <div class="Tools_card">
                                <figure>
                                    <img src={revit} alt="revit"></img>
                                    <figcaption>Revit</figcaption>
                                </figure>
                            </div>
                            <div class="Tools_card">
                                <figure>
                                    <img src={navisworks} alt="navisworks"></img>
                                    <figcaption>Navisworks</figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                  </li>
              </ul>
          </div>
      </main>
  )
}
