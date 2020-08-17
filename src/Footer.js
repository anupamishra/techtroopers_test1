import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
              <div className="topBlock2Inner">
                <h2>Techtroopers</h2>
                <p>
                  {" "}
                  Team collaboratively define our scope of work and put every
                  minor detail in it.
                </p>
                <a className="myBtn mtBtnColor1">
                  Stay in Touch <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="topBlock2Inner">
                <h5>Our Services</h5>
                <ul>
                  <li>
                    <a>Software Servive</a>
                  </li>
                  <li>
                    <a>IT Services</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="topBlock2Inner">
                <h5>Quick links</h5>
                <ul>
                  <li>
                    <a>About Us </a>
                  </li>
                  <li>
                    <a>Why Choose Us</a>
                  </li>
                  <li>
                    <a>Career</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="topBlock2Inner">
                <h5>Support</h5>
                <ul>
                  <li>
                    <a>
                      <i className="fa fa-envelope"></i> info@techtroopers.in
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="main">
                <div className="left">
                  <p>© 2020 | All Rights Reserved</p>
                </div>
                <div className="right">
                  <div className="d-flex align-items-center">
                    <a className="facebook">
                      <i className="fa fa-facebook facebook"></i>
                    </a>
                    <a>
                      <i className="fa fa-twitter twitter"></i>
                    </a>
                    <a>
                      <i className="fa fa-instagram instagram"></i>
                    </a>
                    <a>
                      <i className="fa fa-linkedin linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
