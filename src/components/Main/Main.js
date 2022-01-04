 import React from 'react';
 

 function Main(props) {

  return (
        <>
          <h2>function About(props) {'{'}</h2>

          <div>
            &lt;div&gt;
            <ul>
              <li className="main__listItem">
                &lt;h1&gt;<span className="first">Full Stack Developer</span>&lt;/h1&gt;
              </li>
              <li className="main__listItem">
                &lt;h2&gt;<span className="second">Practicum Yandex Full Stack Bootcamp Graduate</span>&lt;/h1&gt;
              </li>
              <li className="main__listItem">
                &lt;h3&gt;<span className="third">Accesibility Enthusiest</span>&lt;/h1&gt;
              </li>
            </ul>
            ); {'}'}
            <p>export default DesireeJoy;</p>
            <div>&lt;/div&gt;</div>
            )
            <h3>{'}'}</h3>
          </div>
          <div className="object">
            <div className="object__list">
              props:<br />
              ref: Stack;
              <button className='object__triangle tri-stack' onClick={(e) => props.handleStackTriangleClick(e) } /> 
              {/* {props.expanded === true ? <button className='object__triangle' onClick={(e) => props.handleStackTriangleClick(e) } /> : <button className='object__triangle' onClick={(e) => props.handleTriangleReturnClick(e)}  /> } */}
                <div className='object__list-cont cont-stack'> 
              <div className="object__list-item">M. = MongoDB</div>
              <div className="object__list-item">E. = ExpressJS</div>
              <div className="object__list-item">R. = ReactJS</div>
              <div className="object__list-item">N. = NodeJS</div>
              </div>
 
            </div>
            <div className="object__list">
               More:<br />
              ref: Other Tech;
              <button className='object__triangle tri-tech' onClick={(e) => props.handleTechTriangleClick(e) } /> 
       
                <div className='object__list-cont cont-tech'> 
              <div className="object__list-item">HTML5, CSS, BEM methodology</div>
              <div className="object__list-item">Javascript</div>
              <div className="object__list-item">Nginx, Certbot</div>
 
              </div>
 
            </div>
      
          </div>
   </>
          )};
  export default Main;