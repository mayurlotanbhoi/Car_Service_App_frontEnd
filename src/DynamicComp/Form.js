import React, { useState } from "react";
import swal from "sweetalert";

const Form = () => {
  const [postResponce, setpostResponce] = useState(null);
  const [Email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [pincode, setPincode] = useState(null);
  const [is_inValid_Input, setis_inValid] = useState(null);

  let state = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  const [address, setaddress] = useState(null);
  const [strit, setstrit] = useState(null);
  const [city, setcity] = useState(null);
  // const [State, setState] = useState(null);
  // const [universelValidation, setuniverselValidation] = useState(null);

  const formValidation = (e) => {
    // console.log(e.target.name ==== "passWord");
    // console.log(
    //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)
    // );
    if (e.target.name === "email") {
      if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)
      ) {
        console.log("ksnjn");
        setEmail("is-invalid");
      } else {
        setEmail(null);
      }
    }

    if (e.target.name === "passWord") {
      console.log();
      if (e.target.value.length < 4) {
        setPass("is-invalid");
      } else {
        setPass(null);
      }
    }

    if (e.target.name === "PinCode") {
      console.log();
      if (e.target.value.length < 4) {
        setPincode("is-invalid");
      } else {
        setPincode(null);
      }
    }

    if (e.target.name === "address") {
      console.log();
      if (e.target.value.length < 20) {
        setaddress("is-invalid");
      } else {
        setaddress(null);
      }
    }

    if (e.target.name === "strit") {
      console.log();
      if (e.target.value.length < 10) {
        setstrit("is-invalid");
      } else {
        setstrit(null);
      }
    }

    if (e.target.name === "city") {
      console.log();
      if (e.target.value.length < 3) {
        setcity("is-invalid");
      } else {
        setcity(null);
      }
    }
  };

  const postUserData = async (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    const formData = {
      Email: e.target.email.value,
      passWord: e.target.passWord.value,
      Address: e.target.address.value,
      Strit: e.target.strit.value,
      PinCode: e.target.PinCode.value,
      city: e.target.city.value,
      state: e.target.State.value,
    };
    if (!e.target.email.value) {
      setEmail("is-invalid");
      return;
    }
    if (!e.target.passWord.value) {
      setPass("is-invalid");
      return;
    }

    if (!e.target.address.value) {
      setaddress("is-invalid");
      return;
    }

    if (!e.target.strit.value) {
      setstrit("is-invalid");
      return;
    }

    if (!e.target.city.value) {
      setcity("is-invalid");
      return;
    }

    if (!e.target.strit.value) {
      setstrit("is-invalid");
      return;
    }
    if (e.target.State.value === "Choose...") {
      setis_inValid("is-invalid");
      return;
    } else {
      setis_inValid(null);
    }
    console.log(e.target.PinCode.value);
    if (!e.target.PinCode.value) {
      setPincode("is-invalid");
      return;
    }
    console.log(formData);
    const res = await fetch("http://localhost:5000/user/registation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const reData = await res.json();
    if (res.status === 201) {
      swal(`${reData.masseg}`, "Please Login!", "success");
    } else {
      swal(`${reData.masseg}`, "Try Again!", "error");
    }

    setpostResponce(reData);
  };

  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            postUserData(e);
          }}
          method="post"
          onChange={(e) => formValidation(e)}
        >
          <div class="form-row">
            <div class="form-group ">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                name="email"
                className={`form-control ${Email}`}
                id="inputEmail4"
                placeholder="Email"
              />
              {console.log(Email)}
              {Email && <span className="form_Error">Wrong Email ID</span>}
            </div>
            <div class="form-group ">
              <label for="inputPassword4">Password</label>
              <input
                type="password"
                name="passWord"
                className={`form-control ${pass}`}
                id="inputPassword4"
                placeholder="Password"
              />
            </div>
            {pass && (
              <span className="form_Error">
                Password should contain minimum 4 charector
              </span>
            )}
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              name="address"
              className={`form-control ${address}`}
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>

          {address && (
            <span className="form_Error">
              Address should contain minimum 20 charector{" "}
            </span>
          )}
          <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input
              type="text"
              name="strit"
              className={`form-control ${strit}`}
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
              minLength={10}
            />
          </div>
          {strit && (
            <span className="form_Error">
              {" "}
              strit shoult contain minimum 10 charector
            </span>
          )}
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input
                type="text"
                className={`form-control ${city}`}
                id="inputCity"
                name="city"
                minLength={3}
              />
            </div>
            {city && (
              <span className="form_Error">
                city shoult contain minimum 3 charector
              </span>
            )}

            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select
                id="inputState"
                className={`form-control ${is_inValid_Input}`}
                name="State"
              >
                <option selected>Choose...</option>
                {state.map((state) => {
                  return <option>{state}</option>;
                })}
              </select>
            </div>
            {is_inValid_Input && (
              <span className="form_Error">State can not be Empty</span>
            )}
            <div class="form-group col-md-2">
              <label for="inputZip">Pincode</label>
              <input
                type="number"
                className={`form-control ${pincode}`}
                id="inputZip"
                name="PinCode"
              />
            </div>
            {pincode && (
              <span className="form_Error">
                pincode should contain minimum 4 charector
              </span>
            )}
          </div>
          {/* <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div> */}
          <button type="submit" class="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
