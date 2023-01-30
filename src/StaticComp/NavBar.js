import React from "react";

import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigation = useNavigate();

  const DropWonNav = (e) => {
    console.log(e.target.value);
    console.log("working");
    navigation(e.target.value);
  };
  return (
    <div className="container-fluid NavBg  fixed-top ">
      <nav className="navbar navbar-expand-lg  m-5 ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            CarService
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-NavLink" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-NavLink" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-NavLink" to="/Services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-NavLink" to="/Plane">
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-NavLink" to="/Team">
                  OurEngineers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-NavLink" to="/Officess">
                  Office
                </NavLink>
              </li>
              <li>
                <select
                  style={{
                    background: "#202c45",
                    color: "white",
                    border: "none",
                  }}
                  onChange={(e) => {
                    DropWonNav(e);
                  }}
                >
                  <option value="/">
                    <NavLink className="nav-NavLink">
                      Your Orders And Shops
                    </NavLink>
                  </option>

                  <option value="/Add-your-shop">
                    <NavLink className="nav-NavLink">Add your shop</NavLink>
                  </option>

                  <option>
                    <NavLink className="nav-NavLink" to="/Officess">
                      see Your booking
                    </NavLink>
                  </option>

                  <option value="Add-Services">
                    <NavLink className="nav-NavLink" to="/Officess">
                      Add Your Services
                    </NavLink>
                  </option>
                </select>
              </li>
            </ul>
            <span className="navbar-text">
              <NavLink className="nav-NavLink login" to="/Login">
                Login
              </NavLink>
              <NavLink className="nav-NavLink Register" to="/Registation">
                Registration
              </NavLink>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
