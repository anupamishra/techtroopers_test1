import React from "react";
import AboutBlock from "./conponents/AboutBlock";
import web from "../src/images/img-1.png";
import web2 from "../src/images/img-2.png";
import team1 from "../src/images/team-1.jpeg";
import apple from "../src/images/apple.svg";
import android from "../src/images/android.svg";
import website from "../src/images/website.svg";
import seo from "../src/images/seo.svg";
import androidApp from "../src/images/android-Logo.png";
import angular from "../src/images/angular-logo.png";
import java from "../src/images/java-logo.png";
import node from "../src/images/node-logo.png";
import python from "../src/images/python-logo.png";
import react from "../src/images/react-logo.png";
import swift from "../src/images/swift-logo.png";
import anupam from "../src/images/anupam.jpg";
import shubham from "../src/images/shubham.jpg";
import priyanshu from "../src/images/priyanshu.jfif";

const Home = () => {
  return (
    <>
      <AboutBlock 
      nameh2="All Software &amp; IT Services"
      nameh1="Beautiful &amp; <span>Creative</span> Solution"
      text="We specialize in IT and Software Development related services
      such as Websites, Mobile App, IT Management, Cloud
      Infrastructure, Blockchain, etc. Our dedicated team strives to
      place clients’ satisfactory at the first priority and figure
      out solutions that best fits your demand and nail it."
      />

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

      <section className="thirdBlock">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12">
              <img src={web2} className="img-fluid" />
            </div>
            <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 firstBlockRight">
              <div className="listFlex">
                <div className="listItem">
                  <div className="numberText">1</div>
                  <p>
                    <strong>We have a bias for action. </strong>We act fast with
                    clear priorities. We value speed, but take time to reflect
                    when required.
                  </p>
                </div>
                <div className="listItem">
                  <div className="numberText">2</div>
                  <p>
                    <strong>We value diversity of thought. </strong>We believe
                    that a variety of ideas encourages newer and more
                    forward-thinking solutions. We leverage unique talents and
                    insights.
                  </p>
                </div>
                <div className="listItem">
                  <div className="numberText">3</div>
                  <p>
                    <strong>We love our team. </strong>We support each other and
                    ask for help when we are stuck. We value a good laugh during
                    and outside of work. And yes, you can wear your pink unicorn
                    suit to work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <section className="teamBlock">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="heading">
                <span>Join our global team and enjoy the ride!</span>
                <h1>
                Meet Your Colleagues
                </h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-4 col-md-4 col-xs-12">
              <div className="team">
                <img className="img-fluid" src={shubham} />
                <h4>Shubham Rawat</h4>
                <h6>Founder</h6>
                <p>"As an designer, I love the technical challenges that come with a fast growing company."</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-xs-12">
              <div className="team">
                <img className="img-fluid" src={priyanshu} />
                <h4>Priyanshu Singh</h4>
                <h6>CEO</h6>
                <p>"As an designer, I love the technical challenges that come with a fast growing company."</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-xs-12">
              <div className="team">
                <img className="img-fluid" src={anupam} />
                <h4>Anupam Mishra</h4>
                <h6>Director</h6>
                <p>"As an designer, I love the technical challenges that come with a fast growing company."</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="technology">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={java} className="img-fluid" />
            </div>
            <div className="col">
              <img src={node} className="img-fluid" />
            </div>
            <div className="col">
              <img src={react} className="img-fluid" />
            </div>
            <div className="col">
              <img src={angular} className="img-fluid" />
            </div>
            <div className="col">
              <img src={python} className="img-fluid" />
            </div>
            <div className="col">
              <img src={swift} className="img-fluid" />
            </div>
            <div className="col">
              <img src={androidApp} className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
