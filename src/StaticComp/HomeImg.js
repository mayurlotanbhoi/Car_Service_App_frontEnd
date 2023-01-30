import React, { useEffect } from "react";
import HomeBg from "../assets/car-repairing-services-1.jpg";

const HomeImg = () => {
  // useEffect(() => {
  //   async function fettchuser() {
  //     const res = await fetch("http://localhost:5000/user", {
  //       // method: "get",
  //       // headers: { "Content-Type": "application/json" },
  //       method: "GET",
  //       credentials: "include",
  //       // body: JSON.stringify(formData),
  //     });
  //     const reData = await res.json();
  //     console.log(reData);
  //   }
  //   fettchuser();
  // },[]);

  return (
    <div
      className=" container-fluid Home-img"
      style={{
        backgroundImage: `url(${HomeBg})`,
      }}
    >
      <div className="d-block text-center w-100 topbar-heading">
        <div className="car-subhead">
          {" "}
          <span>Washing And Reparing</span>
        </div>

        <p className="home-heading">
          <span> Keep Your Car New</span>
        </p>

        <p>
          We are committed to quality and take car care seriously. Top-notch
          service is our main auto motive.
        </p>
        <button className="btn">Explore More</button>
      </div>
    </div>
  );
};

export default HomeImg;
