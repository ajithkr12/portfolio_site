import React from 'react';
import './Styles.css';
import {ArcData} from "../data/AchievementData";

function Achievement() {
  return (
    <div className="">
        <section className="services" id="services">

            <h1 className="heading" data-aos="fade-up"> <span>Achievement</span> </h1>

            <div className="box-container">

                {
                  ArcData.map((abc) => {
                    return (
                        <div className="box" data-aos="zoom-in">
                            <i className="fa-solid fa-trophy"></i>
                            <h3>{abc.heading} -- {abc.time}</h3>
                            <h4>{abc.conducted}</h4>
                            <p>{abc.dec1}</p>
                            <p>{abc.dec2}</p>
                        </div>
                    )})
                }


</div>

</section>
    </div>
  );
}

export default Achievement;
