import React from 'react';
import './Styles.css';
import {SkData} from "../data/SkillData.js";
function Skills() {
  return (
    <div className="">

<div className="skill">

<h1 className="heading" data-aos="fade-up"> <span>Skills</span> </h1>

<div className="row">
{
         SkData.map((abc) => {
            return (
   <div className="box-container">
      <h3 className="title" data-aos="fade-right">{abc.skill}</h3>

               <div className="box" data-aos="fade-right">
                  <p>&rarr;{abc.dec1}</p>
                  <p>&rarr;{abc.dec2}</p>
                  <p>&rarr;{abc.dec3}</p>
               </div>
   
   </div>
   )})
  }

   
   </div>



</div>

</div>


  );
}

export default Skills;