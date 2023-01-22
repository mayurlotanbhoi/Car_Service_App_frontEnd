import React from "react";

const Plance = () => {
  return (
    <div className=" plance container text-center ">
      <div className="">
        {" "}
        <h3 className="page-top-heading">Services plan</h3>
        <h1 className="about-heading">Choose Your Washing Services Planc </h1>
      </div>

      <div className="d-flex m-5  card-contaner">
        <div class="container">
          <div class="row d-flex flex-wrap align-item-center justify-content-around  align-items-center  ">
            <div class="card ">
              <div className=" card-header"> Gold </div>
              <div className=" car-subhead">
                <p>
                  {" "}
                  <span>$</span>
                  <span>
                    25<sup>.99</sup>
                  </span>
                </p>
              </div>
              <ul className="About-point-icon plan-item plan-list">
                <li>
                  <i class="far fa-check-circle"></i>Ordnary washing
                </li>
                <li>
                  <i class="far fa-check-circle"></i>Oil change
                </li>
                <li>
                  <i class="far fa-check-circle"></i>Poc test
                </li>
                <li>
                  <i class="far fa-times-circle"></i>Instrument Alignment
                </li>

                <li>
                  <i class="far fa-times-circle"></i>Wheel Alignment
                </li>

                <li>
                  <i class="far fa-times-circle"></i>Full Servicing
                </li>
              </ul>
              <p class="card-text">
                The price show above is only for above mentioned services if
                reqest we provide other servisess with additional charges
                applicable.
              </p>
              <div className=" card-footer">
                <a className="btn">Book</a>
              </div>
            </div>

            <div class="card ">
              <div className=" card-header"> Platnium </div>
              <div className=" car-subhead">
                <p>
                  {" "}
                  <span>$</span>
                  <span>
                    35<sup>.99</sup>
                  </span>
                </p>
              </div>
              <ul className="About-point-icon plan-item plan-list">
                <li>
                  <i class="far fa-check-circle"></i>Special washing
                </li>
                <li>
                  <i class="far fa-check-circle"></i>Oil change
                </li>
                <li>
                  <i class="far fa-check-circle"></i>Poc test
                </li>
                <li>
                  <i class="far fa-check-circle"></i>Instrument Alignment
                </li>

                <li>
                  <i class="far fa-times-circle"></i>Wheel Alignment
                </li>

                <li>
                  <i class="far fa-times-circle"></i>Full Servicing
                </li>
              </ul>
              <p class="card-text">
                The price show above is only for above mentioned services if
                reqest we provide other servisess with additional charges
                applicable.
              </p>
              <div className=" card-footer">
                <a className="btn">Book</a>
              </div>
            </div>

            <div class="card ">
              <div className=" card-header"> Diamond </div>
              <div className=" car-subhead">
                <p>
                  {" "}
                  <span>$</span>
                  <span>
                    40<sup>.99</sup>
                  </span>
                </p>
              </div>
              <ul className="About-point-icon plan-item plan-list">
                <li>
                  <i class="far fa-check-circle"></i>Supper washing
                </li>
                <li>
                  <i class="far fa-check-circle"></i>Oil change
                </li>
                <li>
                  <i class="far fa-check-circle"></i>Poc test
                </li>
                <li>
                  <i class=" far fa-check-circle"></i>Instrument Alignment
                </li>

                <li>
                  <i class="far fa-check-circle"></i>Wheel Alignment
                </li>

                <li>
                  <i class="far fa-check-circle"></i>Full Servicing
                </li>
              </ul>
              <p class="card-text">
                The price show above is only for above mentioned services if
                reqest we provide other servisess with additional charges
                applicable
              </p>
              <div className=" card-footer">
                <a className="btn">Book</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plance;
