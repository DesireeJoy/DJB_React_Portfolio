 import React from 'react';
import { NavLink } from 'react-router-dom';
 
function Navigation(props) {
    const isMobile = props.mobile ? "mobile" : "";
    return (
        (
 
 <nav className="nav">
          import {'{'}
          <ul className="nav__list">
            <li className="nav__item">
                <NavLink className="nav__link" activeClassName='nav__link-active' exact to='/'>about</NavLink>,
            </li>
            <li className="nav__item">
                <NavLink className="nav__link" exact to='/projects'>projects</NavLink>,

            </li>
            <li className="nav__item">
                  <NavLink className="nav__link" exact to='/contact'>Other Contact</NavLink>
            </li>
          </ul>
          {'}'} from './portfolio'
        </nav>        )
    )
}


export default Navigation;