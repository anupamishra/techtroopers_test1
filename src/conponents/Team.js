import React from "react";

const Team = () => {
  return (
    <>
      <section className="teamBlock">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="heading">
                <span>Join our global team and enjoy the ride!</span>
                <h1>Meet Your Colleagues</h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-4 col-md-4 col-xs-12">
              <div className="team">
                <img className="img-fluid" src={shubham} />
                <h4>Shubham Rawat</h4>
                <h6>Founder</h6>
                <p>
                  "As an designer, I love the technical challenges that come
                  with a fast growing company."
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-xs-12">
              <div className="team">
                <img className="img-fluid" src={priyanshu} />
                <h4>Priyanshu Singh</h4>
                <h6>CEO</h6>
                <p>
                  "As an designer, I love the technical challenges that come
                  with a fast growing company."
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-xs-12">
              <div className="team">
                <img className="img-fluid" src={anupam} />
                <h4>Anupam Mishra</h4>
                <h6>Director</h6>
                <p>
                  "As an designer, I love the technical challenges that come
                  with a fast growing company."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
