import React from "react";

const Service = () => {
  return (
    <div className=" container-fluid  Service-tation">
      <div className=" container pt-5 pb-5    d-md-flex flex-wrap align-items-center justify-content-between">
        <div className="d-flex service-Point ">
          <div className="  Service-Num">
            <p>
              <i class="fas fa-map-marker-alt "></i> 25<sup>+</sup>
              <p style={{ fontSize: "20px", fontWeight: "500" }}>
                Service Points
              </p>
            </p>
          </div>
        </div>

        <div className="d-flex service-Point ">
          <div className="m-1  Service-Num">
            <p>
              <i class="fa fa-user"></i> 300<sup>+</sup>
              <p style={{ fontSize: "20px", fontWeight: "500" }}>
                Engineers & Workers
              </p>
            </p>
          </div>
        </div>

        <div className="d-flex service-Point ">
          <div className="m-1  Service-Num">
            <p>
              <i class="fa fa-users"></i> 40K<sup>+</sup>
              <p style={{ fontSize: "20px", fontWeight: "500" }}>
                Happy Clients
              </p>
            </p>
          </div>
        </div>

        <div className="d-flex service-Point ">
          <div className="m-1  Service-Num">
            <p>
              <i class="fa fa-check"></i> 5K<sup>+</sup>
              <p style={{ fontSize: "20px", fontWeight: "500" }}>
                Projects Completed
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
