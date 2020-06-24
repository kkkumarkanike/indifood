import React from "react";
import ramu from "../../images/ramu.jpg"
import kalyan from "../../images/kalyan.jpeg"
import "./About.css";
import "../../App.css";
import { FaTwitter,FaGithub,FaLinkedinIn } from "react-icons/fa";


function About() {
  const socialLinks = [
    "https://twitter.com/_iamramu",
    "https://github.com/bugudiramu",
    "https://www.linkedin.com/in/ramu-bugudi-2a5a5a161/",
    "https://twitter.com/_iamkalyan",
    "https://github.com/kkkumarkanike",
    "https://www.linkedin.com/in/kalyan-kumar-kanike-59086b145/"
  ]
  return (
    <>
    <section>
      <div className="main-about">
        <div className="ramu">
          
          <div className="image_logo">
            <img className="pic" src={ramu} alt="Ramu" />
            <h2>Ramu B.</h2>
          <p className="about_country">India, AP</p>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            cupiditate aspernatur cumque, impedit repudiandae odit quam,
            necessitatibus quia ducimus ipsam excepturi est, nihil illo adipisci
            sapiente amet deserunt a eaque!
          </p>
          <div className="about_socialIcons">
         <a href={socialLinks[0]} target="_blank"> <FaTwitter /></a>
         <a href={socialLinks[1]} target="_blank">  <FaGithub /></a>
          <a href={socialLinks[2]} target="_blank"> <FaLinkedinIn /></a>


          </div>
     
        </div>

        <div className="kalyan">
          
          <div className="image_logo">
            <img className="pic" src={kalyan} alt="Kalyan" />
            <h2>Kalyan Kumar K.</h2>
          <p className="about_country">India, AP</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            cupiditate aspernatur cumque, impedit repudiandae odit quam,
            necessitatibus quia ducimus ipsam excepturi est, nihil illo adipisci
            sapiente amet deserunt a eaque!
          </p>
          <div className="about_socialIcons">
         <a href={socialLinks[3]} target="_blank"> <FaTwitter /></a>
         <a href={socialLinks[4]} target="_blank">  <FaGithub /></a>
          <a href={socialLinks[5]} target="_blank"> <FaLinkedinIn /></a>


          </div>
     
        </div>
       
      </div>
    </section>


      </>
  );
}

export default About;

{/* <div className="kalyan">
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
</div> */}