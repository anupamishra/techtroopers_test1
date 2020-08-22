import React from "react";
import Breadcrum from "./conponents/Breadcrum";
import icon3 from "./images/icon-3.png";

const Contact = () => {
  return (
    <>
      <Breadcrum imgsrc={icon3} span="Contact Us" heading="Reach out to us" />

      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 offset-xl-3">
				<div className="row">
					<div className="col">
						<div className="heading">
							<p>Schedule a meeting with us</p>
							<h1>Get in touch with our support team</h1>
						</div>
					</div>
				</div>
              <div className="ContactForm">
                <form>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="email"
                      className="form-control"
                      id=""
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="number"
                      className="form-control"
                      id=""
                      placeholder="Contact Number"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <textarea
                      className="form-control"
                      id=""
					  rows="4"
					  placeholder="Your Message"
                    ></textarea>
                  </div>
				  <button className="myBtn mtBtnColor2">
                    View Our Services <i className="fa fa-arrow-right"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
