
import React from 'react';
import linkedIn from '../../images/linkedin.svg';
import twitter from '../../images/twitter.svg';
import github from '../../images/github.svg';

function Footer(props) {
  return (
    <footer className='footer'>
       Content © Desiree Joy Bradish
       <div className='footer__links'>
    
           <a href="https://www.linkedin.com/in/desireejoy/" ><img className='footer__icons' src={linkedIn} /></a>
           <a href="https://twitter.com/DesireeJoy" ><img className='footer__icons' src={twitter} /></a>
           <a href="https://github.com/DesireeJoy" ><img className='footer__icons' src={github} /></a>

       </div>
     </footer>
        )
}

export default Footer;
