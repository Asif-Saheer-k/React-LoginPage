import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useForm } from "react-hook-form";

function Login(props) {
  
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/products");
    }
  }, []);
  console.log("props", props.title);
  const [error, setError] = useState("");
 

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,

    trigger,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    const email = data.email;
    const password = data.password;

  

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/users/login",
        {
          email,
          password,
        },
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      console.log("hoi");

      navigate("/products");
      console.log(data);
    } catch (error) {
      console.log(error);
      console.log(error.response.status);
      console.log(error.response.data.message);
      setError(error.response.data.message);
    }
 
   
  };

  return (
    <div className="Login">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mt-5">
            <div>
              <h3 className="text-center"> LOGIN</h3>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Email</label>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className={`form-control  ${errors.email && "invalid"}`}
                  placeholder="enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("eamil");
                  }}
                />
                {errors.email && (
                  <small className="text-danger">{errors.email.message}</small>
                )}
              </div>
              <label>Password</label>
              <div className="form-group">
                <input
                  type="password"
                  className={`form-control  ${errors.password && "invalid"}`}
                  name="password"
                  placeholder="enter your name"
                  {...register("password", {
                    required: "password is required",
                    pattern: {
                      value: /^[a-zA-Z]{8,22}$/,
                      message: "Minimum eight characters,only characters",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("password");
                  }}
                />
                {errors.password && (
                  <small className="text-danger">
                    {errors.password.message}
                  </small>
                )}
              </div>
              {error && <div className="error_msg">{error}</div>}
              <div className="text-center">
                <button type="submit" className="btn btn-primary mt-4">
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
