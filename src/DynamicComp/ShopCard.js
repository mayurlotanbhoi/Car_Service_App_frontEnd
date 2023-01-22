import React from "react";

const ShopCard = ({ shopDetail }) => {
  return (
    <div class="card ">
      <div className=" card-header">
        {" "}
        <i class="fa fa-phone"></i>
        {shopDetail.mobile}{" "}
      </div>
      <div className=" card-subtitle">{shopDetail.shopName}</div>
      <div className=" car-subhead">
        <p>
          {" "}
          <span>$</span>
          <span>
            {shopDetail.price}
            <sup>.99</sup>
          </span>
        </p>
      </div>
      <ul className="About-point-icon dynamic-card plan-item plan-list">
        <li>
          {shopDetail.Special ? (
            <i className="far fa-check-circle"></i>
          ) : (
            <i className="far fa-times-circle"></i>
          )}
          Special-washing
        </li>
        <li>
          {shopDetail.Oil_change ? (
            <i className="far fa-check-circle"></i>
          ) : (
            <i className="far fa-times-circle"></i>
          )}
          Oil_change
        </li>
        <li>
          {shopDetail.Poc_test ? (
            <i className="far fa-check-circle"></i>
          ) : (
            <i className="far fa-times-circle"></i>
          )}
          Poc_test
        </li>
        <li>
          {shopDetail.Instrument_Alignmen ? (
            <i className="far fa-check-circle"></i>
          ) : (
            <i className="far fa-times-circle"></i>
          )}
          Instrument_Alignment
        </li>

        <li>
          {shopDetail.Wheel_Alignment ? (
            <i className="far fa-check-circle"></i>
          ) : (
            <i className="far fa-times-circle"></i>
          )}
          Wheel Alignment
        </li>

        <li>
          {shopDetail.Full_Servicing ? (
            <i className="far fa-check-circle"></i>
          ) : (
            <i className="far fa-times-circle"></i>
          )}
          Full Servicing
        </li>
      </ul>

      {/* <p class="card-text"> */}
      <address className=" card-text" style={{ color: "grey" }}>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </address>
      {/* </p> */}
      <div className=" card-footer">
        <a className="btn">Book</a>
      </div>
    </div>
  );
};

export default ShopCard;
