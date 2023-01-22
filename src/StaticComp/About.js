import React from "react";
import AboutImg from "../assets/car-repairing-services-1.jpg";

const About = () => {
  return (
    <div className="About container ">
      <div className=" text-start">
        <div className="about-heading h3 text-center m-5">About Us</div>
        <div className="d-block d-lg-flex align-items-center justify-content-center">
          <img className=" about-img " src={AboutImg} />
          <div className="About-point m-lg-5 text-start">
            <h2>car washing and servicing</h2>

            <div>
              <p className="About-descre">
                We are committed to quality and take car care seriously.
                Top-notch service is our main auto motive. Skilled
                technicians.Hands that understand cars well.Genuine spares.For
                long lasting protection.Service warranty.The one you can always
                count on.
              </p>
              <ul className="About-point-icon">
                <li>
                  <i class="far fa-check-circle"></i>Service right at your
                  doorstep.
                </li>
                <li>
                  <i class="far fa-check-circle"></i>Online payments. Hassle
                  free and safe.
                </li>
                <li>
                  <i class="far fa-check-circle"></i>Fast delivery. We value
                  your time.
                </li>
                <li>
                  <i class="far fa-check-circle"></i>Up front pricing.Restoring
                  your trust in car service.
                </li>
              </ul>
              <a class="btn btn-custom" href="">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
