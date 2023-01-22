import React from "react";
import Icons from "./IconArray";

// import { ReactComponent as Battery } from "../assets/battery.svg";
// import { ReactComponent as Body } from "../assets/body_repair.svg";
// import { ReactComponent as Break } from "../assets/brake-clutch-suspension.svg";
// import { ReactComponent as Car } from "../assets/car-repairing-services-1.jpg";
// import { ReactComponent as Ac } from "../assets/car_ac.svg";
// import { ReactComponent as Care } from "../assets/car_care_services.svg";
// import { ReactComponent as Fitman } from "../assets/fitments-new.svg";
// import { ReactComponent as Daignostic } from "../assets/inspections_and_diagnostics.svg";

const WhatWeDo = () => {
  return (
    <section className=" container text-center ">
      <h3 className="page-top-heading">What We do</h3>
      <h1 className="about-heading">Premium Washing Services</h1>
      <div className=" row">
        {Icons.map((data) => {
          return (
            <>
              <div className="col-lg-3 col-md-6 servicess">
                <div className="service-item text-start">
                  {data.icon}

                  <h3>{data.heading}</h3>
                  <p>{data.description}</p>
                  <a className="btn">Explore More</a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default WhatWeDo;
