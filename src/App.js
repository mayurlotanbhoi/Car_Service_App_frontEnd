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
} from "./StaticComp";

import { Shops, Login, Registation } from "./DynamicComp";
import FrontHomePage from "./FrontHomePage";

function App() {
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
