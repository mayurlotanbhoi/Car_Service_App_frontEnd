import React, { useState } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [Email, setEmail] = useState(null);
  const [Pass, setPass] = useState(null);

  const navigation = useNavigate();
  const formValidation = (e) => {
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
    if (e.target.name === "password") {
      console.log();
      if (e.target.value.length < 4) {
        setPass("is-invalid");
      } else {
        setPass(null);
      }
    }
  };

  const submiteformData = async (e) => {
    e.preventDefault();
    const data = {
      Email: e.target.email.value,
      passWord: e.target.password.value,
    };

    if (e.target.email.value === "") {
      setEmail("is-invalid");
      return;
    } else {
      setEmail(null);
    }

    if (e.target.email.value === "") {
      setPass("is-invalid");
      return;
    } else {
      setPass(null);
    }

    const res = await fetch("https://car-service-api.onrender.com/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data),
    });
    const reData = await res.json();

    console.log(reData);

    if (res.status === 200) {
      swal(`${reData.massege}`, "login successfull!", "success");
      navigation("/");
    } else {
      swal(`${reData.massege}`, "Try Again!", "error");
    }
  };

  return (
    <div className=" container-fluid ">
      <h1 className="text-center">Login</h1>
      <div className=" container  loginform">
        <div class="card">
          <i className="fa fa-lock text-center "></i>
          <form
            onSubmit={(e) => submiteformData(e)}
            onChange={(e) => formValidation(e)}
          >
            <div class="form-group ">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                className={`form-control ${Email}`}
                id="inputEmail4"
                placeholder="Email"
                name="email"
              />
            </div>
            {Email && <span className="form_Error">Wrong Email ID</span>}
            <div class="form-group ">
              <label for="inputPassword4">Password</label>
              <input
                type="password"
                className={`form-control ${Pass}`}
                id="inputPassword4"
                placeholder="Password"
                name="password"
              />
            </div>
            {Pass && (
              <span className="form_Error">
                Password should contain minimum 4 charector
              </span>
            )}
            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
