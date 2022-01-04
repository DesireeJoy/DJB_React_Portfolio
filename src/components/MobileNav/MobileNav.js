import Navigation from '../Navigation/Navigation';
 import React from 'react';
import { NavLink } from 'react-router-dom';
function MobileNavigation(props) {

console.log(props)

    return (
        (
             <nav className={`nav-mobile nav-mobile-${props.isMobileNavOpen ? "null" : "hidden"}`}>
                <ul className="nav-mobile__cont">
            <li className="nav__item">
                    <div className='navigation__mobile-header'>
                       <button className="nav-mobile__close-btn" onClick={props.handleMobileClose}></button>
                    </div>
                   <ul className="nav__list-mobile">
            <li className="nav__item">
                <NavLink className="nav__link" activeClassName='nav__link-active' exact to='/'>about</NavLink>
            </li>
            <li className="nav__item">
                <NavLink className="nav__link" exact to='/projects'>projects</NavLink>

            </li>
            <li className="nav__item">
                  <NavLink className="nav__link" exact to='/contact'>contact</NavLink>
            </li>
          </ul>

         </li></ul>
            </nav>
        )
    )
}

export default MobileNavigation;
