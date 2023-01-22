import React from "react";

import ShopCard from "./ShopCard";

const ShopsNeerU = () => {
  const arr = [
    {
      mobile: "77054845454",
      shopName: "mayur garage",
      price: "50",
      Special: false,
      Oil_change: true,
      Poc_test: true,
      Instrument_Alignmen: true,
      Wheel_Alignment: true,
      Full_Servicing: true,
    },
    {
      mobile: "77054845454",
      shopName: "mayur garage",
      price: "50",
      Special: true,
      Oil_change: true,
      Poc_test: true,
      Instrument_Alignmen: true,
      Wheel_Alignment: true,
      Full_Servicing: true,
    },
    {
      mobile: "77054845454",
      shopName: "mayur garage",
      price: "50",
      Special: true,
      Oil_change: true,
      Poc_test: true,
      Instrument_Alignmen: true,
      Wheel_Alignment: true,
      Full_Servicing: true,
    },
    {
      mobile: "77054845454",
      shopName: "mayur garage",
      price: "50",
      Special: true,
      Oil_change: true,
      Poc_test: true,
      Instrument_Alignmen: true,
      Wheel_Alignment: true,
      Full_Servicing: true,
    },
    {
      mobile: "77054845454",
      shopName: "mayur garage",
      price: "50",
      Special: true,
      Oil_change: false,
      Poc_test: true,
      Instrument_Alignmen: true,
      Wheel_Alignment: true,
      Full_Servicing: true,
    },
    ,
    {
      mobile: "77054845454",
      shopName: "mayur garage",
      price: "50",
      Special: true,
      Oil_change: false,
      Poc_test: true,
      Instrument_Alignmen: true,
      Wheel_Alignment: true,
      Full_Servicing: true,
    },
    ,
    {
      mobile: "77054845454",
      shopName: "mayur garage",
      price: "50",
      Special: true,
      Oil_change: false,
      Poc_test: true,
      Instrument_Alignmen: true,
      Wheel_Alignment: true,
      Full_Servicing: true,
    },
    ,
    {
      mobile: "77054845454",
      shopName: "mayur garage",
      price: "50",
      Special: true,
      Oil_change: false,
      Poc_test: true,
      Instrument_Alignmen: true,
      Wheel_Alignment: true,
      Full_Servicing: true,
    },
    ,
    {
      mobile: "77054845454",
      shopName: "mayur garage",
      price: "50",
      Special: true,
      Oil_change: false,
      Poc_test: true,
      Instrument_Alignmen: true,
      Wheel_Alignment: true,
      Full_Servicing: true,
    },
  ];

  return (
    <div className=" container text-center ">
      <div className="">
        {" "}
        <h3 className="page-top-heading">Shops</h3>
        <h1 className="about-heading">Our Shops Near You</h1>
      </div>
      <div className="d-flex justify-content-end mt-5 ">
        <a className="btn text-bg-primary">See More</a>
      </div>
      <div className="d-flex    card-contaner">
        <div class="container">
          <div class="row card-row ">
            {arr.map((shopDetail) => {
              return <ShopCard shopDetail={shopDetail} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopsNeerU;
