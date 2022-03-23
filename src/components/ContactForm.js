import React from 'react';
import './Styles.css';
import {ArcData} from "../data/AchievementData";
import {CotData} from "../data/ContactData.js";
function ContactForm() {
  return (
    <div className="">
        <section className="contact" id="contact">

            <h1 className="heading" data-aos="fade-up"> 
                <span>contact me</span> 
            </h1>

                <form action="" method="post">
                    <div className="flex">
                        <input data-aos="fade-right" type="text" name="name" placeholder="Enter Your Name" className="box" required/>
                        <input data-aos="fade-left" type="email" name="email" placeholder="Enter Your Email" className="box" required/>
                    </div>
                    <input data-aos="fade-up" type="mobile number"  name="number" placeholder="Enter Your Number" className="box" required/>
                    <textarea data-aos="fade-up" name="message" className="box" required placeholder="Enter Your Message" cols="30" rows="10"/>
                    <input type="submit" data-aos="zoom-in" value="send message" name="send" className="btn"/>
                </form>

                <div className="box-container">

                    {
                    CotData.map((abc) => {
                        return (
                            <div className="box" data-aos="zoom-in">
                                <i className={abc.class}></i>
                                <h3>{abc.tittle}</h3>
                                <p>{abc.description}</p>
                            </div>
                        )})
                    }

                </div>

        </section>
    </div>
  );
}

export default ContactForm;