import React from "react";
import img from "../../images/avatar.png"
import linkedIn from "../../images/linkedin.png"
import "./About.css";
import "../../App.css";

function About() {
  return (
    <>
    <section>
      <div className="main-about">
        <div className="ramu">
          <h2>Ramu Bugudi</h2>
          <h6>Founder & CEO</h6>
          <div className="image_logo">
            <img className="pic" src={img} alt="Ramu" />
            <a href="#">
              <img
                className="img_linkedin"
                src={linkedIn}
                height="30"
                width="30"
                alt=""
              />
            </a>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            cupiditate aspernatur cumque, impedit repudiandae odit quam,
            necessitatibus quia ducimus ipsam excepturi est, nihil illo adipisci
            sapiente amet deserunt a eaque!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            cupiditate aspernatur cumque, impedit repudiandae odit quam,
            necessitatibus quia ducimus ipsam excepturi est, nihil illo adipisci
            sapiente amet deserunt a eaque!
          </p>
        </div>
        <div className="kalyan">
          <h2 className="head">Ramu Bugudi</h2>
          <h6>Founder & CEO</h6>
          <div className="image_logo">
            <img className="pic" src={img} alt="Ramu" />
            <a href="#">
              <img
                className="img_linkedin"
                src={linkedIn}
                height="30"
                width="30"
                alt=""
              />
            </a>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            cupiditate aspernatur cumque, impedit repudiandae odit quam,
            necessitatibus quia ducimus ipsam excepturi est, nihil illo adipisci
            sapiente amet deserunt a eaque!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            cupiditate aspernatur cumque, impedit repudiandae odit quam,
            necessitatibus quia ducimus ipsam excepturi est, nihil illo adipisci
            sapiente amet deserunt a eaque!
          </p>
        </div>
      </div>
    </section>

  <div className="goTop">
      <a href="#top">Top</a>
  </div>
       <div className="goTop">
        <a href="#top"><i className="fa fa-arrow-up"></i></a>
      </div>
      </>
  );
}

export default About;
