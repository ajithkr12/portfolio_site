import React from 'react';
// import './Page-Style.css';
import "../components/Styles.css";
import user_photo from "../images/user-img.jpg"
function Home() {
  return (
    <div className="">
        <section className="home" id="home">

            <div className="image" data-aos="fade-right">
                <img src={user_photo} alt=""/>
            </div>

            <div className="content">
                <h3 data-aos="fade-up">hi, i am ajith k r</h3>
                <span data-aos="fade-up">Reactjs developer & Embedded system Designer</span>
                <p data-aos="fade-up">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis labore recusandae minima molestias aliquam nostrum.</p>
                <a data-aos="fade-up" href="#about" className="btn">about me</a>
            </div>

        </section>
    </div>
  );
}

export default Home;
