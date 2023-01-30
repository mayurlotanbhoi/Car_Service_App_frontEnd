import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

import {
  TopBar,
  NavBar,
  Home,
  About,
  WhatWeDo,
  ServiceTastion,
  Plane,
  OurEngineer,
  Officess,
  Fotter,
  AddShop,
  AddServices,
} from "./StaticComp";

import { Shops, Login, Registation } from "./DynamicComp";
import FrontHomePage from "./FrontHomePage";

function App() {
  // useEffect(() => {
  //   async function fettchuser() {
  //     const res = await fetch("http://localhost:5000/user", {
  //       // method: "get",
  //       // headers: { "Content-Type": "application/json" },
  //       method: "GET",
  //       credentials: "same-origin",
  //       // body: JSON.stringify(formData),
  //     });
  //     const reData = await res.json();

  //     console.log(reData);
  //   }
  //   fettchuser();
  // });

  return (
    <>
      <TopBar />
      <NavBar />
      <div className="app">
        <Routes>
          <Route path="/" element={<FrontHomePage />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/Services" element={<WhatWeDo />} />
          <Route path="/ServiceTastion" element={<ServiceTastion />} />
          <Route path="/Plane" element={<Plane />} />
          <Route path="/Team" element={<OurEngineer />} />
          <Route path="/Officess" element={<Officess />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Registation" element={<Registation />} />
          <Route path="/Add-your-shop" element={<AddShop />} />
          <Route path="/Add-Services" element={<AddServices />} />
        </Routes>

        {/* <Home />
          <About />
          <WhatWeDo />
          <ServiceTastion />
          <Plane />
          <Shops />
          <OurEngineer />
          <Officess />
        */}
        <Fotter />
      </div>

      <div className="home-nav">
        <a className="home-nav-icon" href="#homeimg">
          <i className=" fa fa-arrow-up"></i>
        </a>
      </div>
    </>
  );
}

export default App;
