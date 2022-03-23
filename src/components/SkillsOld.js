import React from 'react';
import './Styles.css';
import {SkData} from "../data/SkillData.js";
function Skills() {
  return (
    <div className="">

        <div className="skills" data-aos="fade-up">
          <h1 className="heading"> <span>skills</span> </h1>

          <div className="progress">

            {
                SkData.map((abc) => {
                  return (
                    <div className="bar" data-aos={abc.style}> 
                      <h3><span>{abc.skill}</span> <span>{abc.rate}</span></h3> 
                    </div>
                  )})
            }

          </div>


        </div>

    </div>
  );
}

export default Skills;