import React from "react";
import Form from "../DynamicComp/Form";

const Offeces = () => {
  return (
    <div className=" plance container text-center d-flex flex-column align-items-center justify-content-center">
      <div className="">
        {" "}
        <h3 className="page-top-heading">Car Servecing Points</h3>
        <h1 className="about-heading">Car Washing & Care Points</h1>
      </div>
      <div className="row">
        <div className="col-12 point d-flex flex-wrap col-md-6">
          <h2 style={{ fontWeight: "900" }}>Premium Washing Services</h2>
          <div className="d-flex ">
            <div className="addres">
              <p className="pointName">
                {" "}
                <i class="fas fa-map-marker-alt "></i> car washing poin
              </p>
              <div className="point-Streat">
                <p>123 Street, vali, India, MH</p>
                <p>Call:+012 345 6789</p>
              </div>
            </div>
          </div>
          <div className="d-flex ">
            <div className="addres">
              <p className="pointName">
                {" "}
                <i class="fas fa-map-marker-alt "></i> car washing poin
              </p>
              <div className="point-Streat">
                <p>568 Street, Pune, India, MH</p>
                <p>Call:+012 345 6789</p>
              </div>
            </div>
          </div>
          <div className="d-flex ">
            <div className="addres">
              <p className="pointName">
                {" "}
                <i class="fas fa-map-marker-alt "></i> car washing poin
              </p>
              <div className="point-Streat">
                <p>568 Street, Dhule, India, MH</p>
                <p>Call:+012 345 6789</p>
              </div>
            </div>
          </div>
          <div className="d-flex ">
            <div className="addres">
              <p className="pointName">
                {" "}
                <i class="fas fa-map-marker-alt "></i> car washing poin
              </p>
              <div className="point-Streat">
                <p>856 Street, Mumbai, India, MH</p>
                <p>Call:+012 345 6789</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 request-form-div">
          <div className="request"> Rrquest for Servicing</div>
          <form className="form ">
            <input type="text" className=" form-control" placeholder="Name" />
            <input
              type="number"
              className="form-control"
              placeholder="Contact number"
            />

            <input
              type="text"
              className="form-description form-control "
              placeholder="Description"
            />
            <button type="submit" className="btn form-btn form-control">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Offeces;
