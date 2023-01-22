import React from "react";

const TopBar = () => {
  return (
    <div className=" container" id="homeimg">
      <div className="row">
        <div className="col-lg-4 col-12 text-start text-center">
          <span className="h1 Top-logo">Car</span>
        </div>

        <div className="col d-none d-lg-flex text-center mt-2 ">
          <div className="col d-none d-md-block text-start ">
            <div className="top-bar-item d-flex">
              <span className="top-icon">
                <i className="far fa-clock"></i>
              </span>

              <div className="topbar-text">
                <h3>Opening Hour</h3>
                <p>Mon - Fri, 8:00 - 9:00</p>
              </div>
            </div>
          </div>
          <div className="col d-none d-md-block text-start ">
            <div className="top-bar-item d-flex">
              <span className="top-icon">
                <i class="fa fa-phone"></i>
              </span>

              <div className="topbar-text">
                <h3>Call Us</h3>
                <p>+012 345 6789</p>
              </div>
            </div>
          </div>

          <div className="col d-none d-md-block text-start  ">
            <div className="top-bar-item d-flex">
              <span className="top-icon">
                <i class="far fa-envelope"></i>
              </span>

              <div className="topbar-text">
                <h3>Email Us</h3>
                <p>info@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      .
    </div>
  );
};

export default TopBar;
