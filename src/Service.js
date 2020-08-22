import React from "react";
import Breadcrum from "./conponents/Breadcrum";
import team1 from "../src/images/team-1.jpeg";
import apple from "../src/images/apple.svg";
import android from "../src/images/android.svg";
import website from "../src/images/website.svg";
import seo from "../src/images/seo.svg";

const Service = () => {
  return (
    <>
      <Breadcrum 
      span='Services' 
      heading="We do awesome things" />
      <section className="topBlock2">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="heading">
                <span>HOW WE WORK</span>
                <h1>
                  How we delivers your <strong>projects</strong>
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
              <div className="topBlock2Inner">
                <h4>Step 1</h4>
                <h3>Ideas Concepts</h3>
                <p>
                  Every project starts with meetings and discussions to achieve
                  your goals. Team collaboratively define our scope of work and
                  put every minor detail in it
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="topBlock2Inner">
                <h4>Step 2</h4>
                <h3>UI/UX &amp; Branding</h3>
                <p>
                  The most important part, design wireframes &amp; UI/UX to get
                  you a glimpse of the final product to help you in making the
                  right decisions for your marketing.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="topBlock2Inner">
                <h4>Step 3</h4>
                <h3>Build &amp; Develop</h3>
                <p>
                  After approvel of design, we start the project development
                  with the right technologies based on clients’ requirements to
                  kickstart your business.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="topBlock2Inner">
                <h4>Step 4</h4>
                <h3>Test &amp; Deploy</h3>
                <p>
                  Once we developed the product, our team will put a lot of
                  effort into testing and deployment to ensure the product
                  quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="secondBlock">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="heading">
                <span>SERVICES WE DELIVER</span>
                <h1>
                  Preparing for your success, <br /> we provide truly prominent
                  Software solutions.
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
              <div className="row mr-3">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                  <div className="serviceInner">
                    <img src={apple} className="img-fluid" />
                    <h3>IOS Apps</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et.
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                  <div className="serviceInner">
                    <img src={android} className="img-fluid" />
                    <h3>Android Apps</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et.
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                  <div className="serviceInner">
                    <img src={website} className="img-fluid" />
                    <h3>Web Based Apps</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et.
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                  <div className="serviceInner">
                    <img src={seo} className="img-fluid" />
                    <h3>Web Designing</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <div>
                <img src={team1} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
