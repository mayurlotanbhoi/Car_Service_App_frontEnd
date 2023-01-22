import React from "react";
import Form from "./Form";

const Login = () => {
  return (
    <div className=" container-fluid ">
      <h1 className="text-center">Login</h1>
      <div className=" container  loginform">
        <div class="card">
          <i className="fa fa-lock text-center "></i>
          <form>
            <div class="form-group ">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                class="form-control "
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div class="form-group ">
              <label for="inputPassword4">Password</label>
              <input
                type="password"
                class="form-control"
                id="inputPassword4"
                placeholder="Password"
              />
            </div>
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
