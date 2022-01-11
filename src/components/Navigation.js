import React from 'react';
import '../App.css';
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
         </div>
      </div>
    );
}
 
export default Navigation;