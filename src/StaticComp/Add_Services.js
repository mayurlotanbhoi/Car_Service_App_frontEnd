import React, { useState } from "react";
import swal from "sweetalert";

const AddServices = () => {
  const [phone, setphone] = useState(null);

  const Services = [
    "Special_washing",
    "Oil_change",
    "Poc_test",
    "Instrument_Alignment",
    "Wheel_Alignment",
    "Full_Servicing",
  ];

  const [description, setdescription] = useState(null);

  // const [State, setState] = useState(null);
  // const [universelValidation, setuniverselValidation] = useState(null);

  const formValidation = (e) => {
    // console.log(e.target.name ==== "passWord");
    // console.log(
    //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)
    // );

    //     console.log(e.target.name);
    if (e.target.name === "description") {
      if (e.target.value.length < 20) {
        console.log("ksnjn");
        setdescription("is-invalid");
      } else {
        setdescription(null);
      }
    }
    if (e.target.name === "phone") {
      console.log(e.target.name);
      if (e.target.value.length < 10) {
        setphone("is-invalid");
      } else {
        setphone(null);
      }
    }
  };

  const postUserData = async (e) => {
    e.preventDefault();

    console.log(e.target.phone.value);
    const formData = {
      Email: e.target.description.value,
      phone: e.target.phone.value,
    };

    if (e.target.description.value.length < 20) {
      setdescription("is-invalid");
      return;
    } else {
      setdescription(null);
    }

    formData.Special_washing = e.target.Special_washing.checked;
    formData.Oil_change = e.target.Oil_change.checked;
    formData.Poc_test = e.target.Poc_test.checked;
    formData.Poc_test = e.target.Poc_test.checked;
    formData.Instrument_Alignment = e.target.Instrument_Alignment.checked;
    formData.Wheel_Alignment = e.target.Wheel_Alignment.checked;
    formData.Full_Servicing = e.target.Full_Servicing.checked;

    

    console.log(formData);

    // const res = await fetch("http://localhost:5000/user/addShop", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });
    // const reData = await res.json();
    // if (res.status === 201) {
    //   swal(`${reData.massege}`, "Please Login!", "success");
    // } else {
    //   swal(`${reData.massege}`, "Try Again!", "error");
    // }
    // console.log(reData);
    // setpostResponce(reData);
  };

  return (
    <>
      <div className=" container-fluid  d-flex align-items-center justify-content-center">
        <div className=" container m-5 Registation ">
          <h1 className="text-center">Add Your</h1>
          <div>
            <form
              onSubmit={(e) => {
                postUserData(e);
              }}
              method="post"
              onChange={(e) => formValidation(e)}
            >
              {" "}
              <div class="form-row">
                <div class="form-group ">
                  <label for="inputEmail4">Shop Phone Number</label>
                  <input
                    type="number"
                    name="phone"
                    className={`form-control ${phone}`}
                    id="inputEmail4"
                    placeholder="Shop Phone Number"
                  />

                  {phone && (
                    <span className="form_Error">Wrong Phone Number</span>
                  )}
                </div>

                {Services.map((data) => {
                  return (
                    <div class="form-group">
                      <div
                        class="form-check form-check-inline"
                        name="cheackbox"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value={data}
                          name={data}
                        />
                        <label class="form-check-label" for="inlineCheckbox1">
                          {data}
                        </label>
                      </div>
                    </div>
                  );
                })}

                <div class="form-group">
                  <label for="inputEmail4">Add Description</label>
                  <input
                    type="text"
                    name="description"
                    className={`form-control ${description}`}
                    id="inputEmail4"
                    placeholder="Shop Phone Number"
                  />

                  {description && (
                    <span className="form_Error">Wrong Phone Number</span>
                  )}
                </div>

                <button type="submit" class="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddServices;
