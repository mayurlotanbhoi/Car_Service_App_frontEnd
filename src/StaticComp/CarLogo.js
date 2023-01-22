import React from "react";

const CarLogo = () => {
  const carLogo = [
    {
      logo: "https://www.autocarbrands.com/wp-content/uploads/2014/04/tata.png",
      brang: "TATA",
    },
    {
      logo: "https://www.autocarbrands.com/wp-content/uploads/2014/04/renault.png",
      brang: "RNAULT",
    },
    {
      logo: "https://www.autocarbrands.com/wp-content/uploads/2014/04/skoda.png",
      brang: "SKODA",
    },
    {
      logo: "https://www.autocarbrands.com/wp-content/uploads/2014/04/toyota.png",
      brang: "TOYOTA",
    },
    {
      logo: "https://www.autocarbrands.com/wp-content/uploads/2014/04/suzuki.png",
      brang: "SUZUKI",
    },
    //     {
    //       logo: "https://www.autocarbrands.com/wp-content/uploads/2014/04/tata.png",
    //       brang: "TATA",
    //     },
    {
      logo: "https://www.autocarbrands.com/wp-content/uploads/2014/04/thumbsvolkswagen.png",
      brang: "VOLKSWAGEN",
    },
    {
      logo: "https://www.autocarbrands.com/wp-content/uploads/2014/04/volvo.png",
      brang: "VOLVO",
    },
    {
      logo: "https://www.autocarbrands.com/wp-content/uploads/2014/04/mahidra.png",
      brang: "MAHINDRA",
    },
    {
      logo: "https://www.autocarbrands.com/wp-content/uploads/2014/04/ford.png",
      brang: "FORD",
    },

    {
      logo: "https://www.autocarbrands.com/wp-content/uploads/2014/04/isuzu.png",
      brang: "ISUZU",
    },
    {
      logo: "https://www.autocarbrands.com/wp-content/uploads/2014/04/chevrolet.png",
      brang: "CHERVROLET",
    },
    {
      logo: "https://www.autocarbrands.com/wp-content/uploads/2014/04/honda.png",
      brang: "HOND",
    },
  ];
  return (
    <div className=" container-fluid mt-5">
      <div className=" container ">
        <div className=" text-center">
          {" "}
          <h3 className="page-top-heading">Our Brands</h3>
          <h1 className="about-heading">Range of Service Brand</h1>
        </div>
        <div className="row d-flex align-items-center justify-content-center">
          {carLogo.map((logo) => {
            return (
              <div className="" style={{ width: "200px" }}>
                <div className="text-center card">
                  <img src={logo.logo} />
                  <p>{logo.brang}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CarLogo;
