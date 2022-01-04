
     import React from 'react';
     import { NavLink } from 'react-router-dom';
     import Navigation from '../Navigation/Navigation.js';
     function Header(props) {

  return (
       <header className={props.nav ? 'header' : 'header header-alt' }>
        <h1 className="header__title">&lt;DesireeJoy /&gt;</h1>
       <Navigation />
      </header>
  )};
  export default Header;