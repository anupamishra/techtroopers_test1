import React from "react";

const AboutBlock = (props) => {
  return (
    <>
      <section className="firstBlock">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 firstBlockRight order-2 order-lg-1">
              <div className="innerBlock">
                <h2 className="">All Software &amp; IT Services</h2>
                <h1>
                  Beautiful &amp; <span>Creative</span> Solution
                </h1>
                <p className="">
                  We specialize in IT and Software Development related services
                  such as Websites, Mobile App, IT Management, Cloud
                  Infrastructure, Blockchain, etc. Our dedicated team strives to
                  place clients’ satisfactory at the first priority and figure
                  out solutions that best fits your demand and nail it.
                </p>
                <div className="col">
                  <a to={props.visit} className="myBtn mtBtnColor1">
                    Explore More <i className="fa fa-arrow-right"></i>
                  </a>
                  <a className="myBtn mtBtnColor2">
                    View Our Services <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 order-1 order-lg-1">
              <img src={props.imgsrc} className="img-fluid"  data-aos="flip-up" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutBlock;
