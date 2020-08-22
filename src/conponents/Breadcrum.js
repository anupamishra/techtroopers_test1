import React from "react";
import icon1 from "../images/icon-1.png";
import icon2 from "../images/icon-2.png";   


const Breadcrum = (props) => {
  return (
    <>
      <section className="breadcrum">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="heading">
              <img src={props.imgsrc} className="img-fluid" />
                <p><span>{props.span}</span></p>
                <h1>{props.heading}</h1>
              </div>
            </div>
          </div>
        </div>
        <img src={icon1} className="scribble-1" />
        <img src={icon2} className="scribble-2" />
      </section>
    </>
  );
};

export default Breadcrum;
