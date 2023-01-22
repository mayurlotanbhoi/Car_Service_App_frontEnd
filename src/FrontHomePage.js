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
  CarLogo,
} from "./StaticComp";

import { Shops } from "./DynamicComp";

import React from "react";

const FrontHomePage = () => {
  return (
    <div>
      {/* <TopBar />
      <NavBar /> */}
      <Home />
      <About />
      <WhatWeDo />
      <ServiceTastion />
      <Plane />
      <Shops />
      <OurEngineer />
      <Officess />
      <CarLogo />
    </div>
  );
};

export default FrontHomePage;
