import React from 'react';
import './Styles.css';
import {BioData} from "../data/BiographyData.js";
import pdfFile from "../data/resume.pdf";
function Biography() {
  return (
    <div className="">
        <h1 className="heading" data-aos="fade-up"> <span>biography</span> </h1>

        <div className="biography">

            <div className="bio">

              {
                  BioData.map((abc) => {
                    return (
                      <h3 data-aos="zoom-in"> <span>{abc.item} :</span> {abc.description}</h3>
                    )})
              }

            </div>

            <a href={pdfFile} class="btn" data-aos="fade-up"> download CV </a>

        </div>
    </div>
  );
}

export default Biography;
