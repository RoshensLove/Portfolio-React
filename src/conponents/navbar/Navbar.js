import React, { Component } from 'react'
import './navbar.css'

import {NavLink} from 'react-router-dom';

export class Navbar extends Component {
  render() {
    const activeLink = "nav-list__link nav-list__link--active";
    const normalLink = "nav-list__link ";

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-rov">
                    <NavLink to="/" className="logo">
                        OO
                    </NavLink>

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/projects" className={({ isActive }) => isActive ? activeLink : normalLink}>
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/contacts" className={( {isActive }) => isActive ? activeLink : normalLink}>
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
  }
}

export default Navbar