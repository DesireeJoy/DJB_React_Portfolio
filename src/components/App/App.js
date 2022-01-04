
import './App.css';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
  HashRouter as Router,
  // BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Projectlist from '../Project-list/Project-list';

function App() {
    const [theme, setTheme] = useState('dark');
    const [isMobile, setIsMobile] = useState('');
    const [nav, setNav] = useState(false)
    const [stackCollapse, setStackCollapse] = useState(false)
    const [techCollapse, setTechCollapse] = useState(false)
    //Added to have classList not toggle on initial mounting of component
    const isInitialMountS = useRef(true);
    const isInitialMountT = useRef(true);


  useEffect(() => {
     changeBackground()
     // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })


  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY <= 400)  {
      setNav(true)
    } else {
      setNav(false)
    }
  }
//Checks if the dropdown info should be displayed on state change
useEffect(() => {
  if (isInitialMountS.current) {
     isInitialMountS.current = false;
  } else {
       document.querySelector('.cont-stack').classList.toggle('collapsed');
  }
},[stackCollapse]);

useEffect(() => {
  if (isInitialMountT.current) {
     isInitialMountT.current = false;
  } else {
       document.querySelector('.cont-tech').classList.toggle('collapsed');
  }
},[techCollapse]);






//Toggle the state variable

function toggleState(stateVar){
  if (stateVar === "stack"){
    setStackCollapse(!stackCollapse)
  }
  if (stateVar === "tech"){
    setTechCollapse(!techCollapse)
  }
}
// Toggle the triangle rotation

function rotateTriangle(stateVar){
  const triangle = document.querySelector(stateVar);
  triangle.classList.toggle('object__triangle-rotate');
}

//What to do if they click the triangle for stack
  function handleStackTriangleClick(e){
          e.preventDefault();
          setStackCollapse(true);
          toggleState("stack")
          rotateTriangle('.tri-stack');
    }

  function handleTechTriangleClick(e){
          e.preventDefault();
          setTechCollapse(true);
          toggleState("tech")
          rotateTriangle('.tri-tech');
    }
     

  return (
<>
      <div className="page">
      <Header theme={theme} nav={nav} />

<Routes>


    <Route path='/projects' element={<Projectlist />}/>
        <Route path='/Contact' element={<Contact />}/>
    <Route exact path="/" element={<Main theme={theme} handleStackTriangleClick={handleStackTriangleClick} handleTechTriangleClick={handleTechTriangleClick}/>} />



</Routes>
      

<Footer />
             </div>
             </>

    );
  }


export default App;
