import React from 'react';
import "../components/Styles.css";
// import './Page-Style.css';
import Biography from '../components/Biography';
import Skills from '../components/Skills';
import Education from '../components/Education';
function About() {
  return (
   // <div className="App">
      <section class="about" id="about">
         <Biography/>
         <Skills/>
         <Education/>
      </section>
   // </div>
  );
}

export default About;
