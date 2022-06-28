import React from 'react';
import './Styles.css';
import {EduData} from "../data/EducationData.js";
import {ExpData} from "../data/ExperienceData.js";
function Education() {

   


  return (
   <div className="">

      <div className="edu-exp">

         <h1 className="heading" data-aos="fade-up"> <span>education & experience</span> </h1>

         <div className="row">

            <div className="box-container">
               <h3 className="title" data-aos="fade-right">education</h3>
               {
                  EduData.map((abc) => {
                     return (
                        <div className="box" data-aos="fade-right">
                           <span>{abc.Time} | {abc.College}</span>
                           <h3>{abc.Course}</h3>
                           <span>{abc.Mark}</span>
                           <p>{abc.Details}</p>
                        </div>)})
               }
            
            </div>

            <div className="box-container">

               <h3 className="title" data-aos="fade-left">experience</h3>
               {
                  ExpData.map((abc) => {
                     return (
                        <div className="box" data-aos="fade-right">
                           <span>{abc.Time} | {abc.Company}</span>
                           <h3>{abc.Position}</h3>
//                            <span> . </span>
                           <p>{abc.Details}</p>
                        </div>)})
               }

            </div>



         </div>

      </div>
   </div>
  );
}

export default Education;
