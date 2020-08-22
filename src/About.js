import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AboutBlock from "./conponents/AboutBlock";
import Breadcrum from "./conponents/Breadcrum";
import web from "./images/img-1.svg";
import icon3 from "./images/icon-3.png";

const About = () => {
  return (
    <>
      <Breadcrum span="We are Techtroopers" heading="About Us" />
      <section className="aboutPage">
    	 <div className="container">
			 <div className="careerGrid">
				<div className="careerPhoto">
					{/* <img src={icon3} className="img-fluid" /> */}
				</div>
				<div className="careerBlock">
					<div className="flexContent">
						<span>Join Us</span>
						<h1>Reach new heights with Techtroopers</h1>
						<p>We believe happy employees deliver the best services. Come join us.</p>
					</div>
					<a to="/contact" className="myBtn mtBtnColor1">Contact Us <i class="fa fa-arrow-right"></i></a>
				</div>
			 </div>
		 </div>
      </section>
      <AboutBlock imgsrc={web} visit="/service" />
    </>
  );
};

export default About;
