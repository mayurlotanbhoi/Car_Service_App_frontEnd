import React from "react";

import team_1 from "../assets/team-1.jpg";
import team_2 from "../assets/team-2.jpg";
import team_3 from "../assets/team-3.jpg";
import team_4 from "../assets/team-4.jpg";

const OurEngineer = () => {
  return (
    <div className="  container text-center ">
      <div className="">
        {" "}
        <h3 className="page-top-heading">MEET OUR TEAM</h3>
        <h1 className="about-heading">Our Engineers & Workers</h1>
      </div>

      <div className="row">
        <div className="col-11 col-lg-3  ">
          <div className="card Engineer" style={{ maxWidth: "100%" }}>
            <img
              class="card-img-top Engineer-img  "
              src={team_1}
              alt="Card image cap"
            />
            <div class="card-body enginner-icons">
              <div className="d-flex justify-content-around">
                <a className="enginner-icon-div btn">
                  <i class="fa fa-facebook "></i>
                </a>
                <a className="enginner-icon-div btn">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a className="enginner-icon-div btn">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a className="enginner-icon-div btn">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
              <span class="card-text">
                <div className="Eng-Name">Mayur Bhoi</div>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </span>
            </div>
          </div>
        </div>
        <div className="col-11 col-lg-3">
          <div className="card Engineer" style={{ maxWidth: "100%" }}>
            <img
              class="card-img-top Engineer-img  "
              src={team_2}
              alt="Card image cap"
            />
            <div class="card-body enginner-icons">
              <div className="d-flex justify-content-around">
                <a className="enginner-icon-div btn">
                  <i class="fa fa-facebook "></i>
                </a>
                <a className="enginner-icon-div btn">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a className="enginner-icon-div btn">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a className="enginner-icon-div btn">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
              <span class="card-text">
                <div className="Eng-Name">Pankaj borse</div>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </span>
            </div>
          </div>
        </div>
        <div className="col-11 col-lg-3">
          <div className="card Engineer" style={{ maxWidth: "100%" }}>
            <img
              class="card-img-top Engineer-img  "
              src={team_3}
              alt="Card image cap"
            />
            <div class="card-body enginner-icons">
              <div className="d-flex justify-content-around">
                <a className="enginner-icon-div btn">
                  <i class="fa fa-facebook "></i>
                </a>
                <a className="enginner-icon-div btn">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a className="enginner-icon-div btn">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a className="enginner-icon-div btn">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
              <span class="card-text">
                <div className="Eng-Name">Prashant Patil</div>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </span>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-3">
          <div className="card Engineer" style={{ maxWidth: "100%" }}>
            <img
              class="card-img-top Engineer-img  "
              src={team_4}
              alt="Card image cap"
            />
            <div class="card-body enginner-icons">
              <div className="d-flex justify-content-around">
                <a className="enginner-icon-div btn">
                  <i class="fa fa-facebook "></i>
                </a>
                <a className="enginner-icon-div btn">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a className="enginner-icon-div btn">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a className="enginner-icon-div btn">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
              <span class="card-text">
                <div className="Eng-Name">Sarvesh Rajput</div>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEngineer;
