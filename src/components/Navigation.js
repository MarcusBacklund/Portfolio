import React from 'react';
import '../App.css';
import '../mobilenav.js';
import '../mobilenav.css';
import logo from '../logo-new.svg';
 
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
       <div className="navbar">
         <div className="navwrapper">
            <NavLink to="/"><img className="logo" src={logo} alt="Logo"/></NavLink>
            <div className="menuitems">
               <NavLink to="/">Home</NavLink>
               <NavLink to="/Projects">Projects</NavLink>
               <NavLink to="/Contact">Contact</NavLink>
            </div>

            <p style={{paddingRight: 20}}>Dark mode</p>
            <label class="switch">
                    <input type="checkbox" />
                <span class="slider round"></span>
            </label>

            <button id="btn" className="btn">☰</button>

            <nav id="nav">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/Projects">Projects</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
            </ul>
        </nav>
         </div>
      </div>
    );
}
 
export default Navigation;