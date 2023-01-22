import React from "react";

const Footer = () => {
  return (
    <div className=" container-fluid  Service-tation">
      <div className=" container pt-5 pb-5    d-md-flex flex-wrap align-items-center justify-content-between">
        <div className=" ">
          <div className="FooterPint  Service-Num mt-3">
            <p style={{ fontSize: "20px", fontWeight: "500" }}>Get In Touch</p>
            <ul>
              <li>
                {" "}
                <a>
                  {" "}
                  <i class="fas fa-map-marker-alt "></i> 123 Street, vali,
                  India, MH
                </a>
              </li>
              <li>
                {" "}
                <a>
                  {" "}
                  <i class="fa fa-phone"></i> +012 345 67890
                </a>
              </li>{" "}
              <li>
                {" "}
                <a>
                  {" "}
                  <i class="far fa-envelope"></i> info@example.com
                </a>
              </li>{" "}
              <li className="footer-media-list">
                {" "}
                <div className="fotter-icons">
                  <a className="footer-media btn">
                    <i class="fa fa-facebook "></i>
                  </a>
                  <a className="footer-media btn">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a className="footer-media btn">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a className="footer-media btn">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className=" ">
          <div className="FooterPint  Service-Num">
            <p style={{ fontSize: "20px", fontWeight: "500" }}>Popular Links</p>
            <ul>
              <li>
                {" "}
                <a>About Us</a>
              </li>
              <li>
                {" "}
                <a>Contact Us</a>
              </li>{" "}
              <li>
                {" "}
                <a>Our Service</a>
              </li>{" "}
              <li>
                <a>Service Points</a>
              </li>
              <li>
                <a>Pricing Plan</a>
              </li>
            </ul>
          </div>
        </div>

        <div className=" ">
          <div className="FooterPint  Service-Num">
            <p style={{ fontSize: "20px", fontWeight: "500" }}>Useful Links</p>
            <ul>
              <li>
                {" "}
                <a> Terms of use</a>
              </li>
              <li>
                {" "}
                <a>Privacy policy</a>
              </li>{" "}
              <li>
                {" "}
                <a>Privacy policy</a>
              </li>{" "}
              <li>
                <a>Help</a>
              </li>{" "}
              <li>
                <a>FQAs</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-5 ">
          <form className="form-fotter ">
            <input type="text" className=" form-control" placeholder="Name" />
            <input
              type="number"
              className="form-control"
              placeholder="Contact number"
            />

            {/* <input
              type="text"
              className="form-description form-control "
              placeholder="Description"
            /> */}
            <button type="submit" className="btn form-btn form-control">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
