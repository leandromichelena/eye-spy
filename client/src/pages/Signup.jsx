import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/Auth";

import loginImg from "../images/login-signup-img.png";

const SignUp = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="container-fluid px-3 px-md-5 py-4 py-md-5 mb-5">
      <div className="row justify-content-center align-items-center min-vh-75">
        <div className="col-12 col-md-6 col-lg-5 mb-4 mb-md-0 d-flex justify-content-center">
          <img
            src={loginImg}
            className="img-fluid d-none d-md-block"
            alt="couple paddle boarding"
            style={{ maxWidth: "400px", height: "auto" }}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-5">
          <form
            onSubmit={handleFormSubmit}
            className="bg-white p-4 rounded shadow-sm"
          >
            <div className="text-center mb-4">
              <h1 className="header-font mb-4 pb-3 border-bottom border-dark">
                Sign Up Today!
              </h1>
            </div>
            {/* input username */}
            <div className="mb-3">
              <label htmlFor="username" className="form-label fw-bold">
                Username
              </label>
              <input
                className="form-control p-2"
                placeholder="Your username"
                name="username"
                type="text"
                id="username"
                value={formState.username}
                onChange={handleChange}
                required
              />
            </div>
            {/* input email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">
                Email
              </label>
              <input
                className="form-control p-2"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
            {/* input password */}
            <div className="mb-4">
              <label htmlFor="password" className="form-label fw-bold">
                Password
              </label>
              <input
                className="form-control p-2"
                placeholder="********"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
                required
              />
            </div>
            {/* submit signup data */}
            <div className="text-center">
              <button
                className="all-btns p-2 px-4 rounded fw-bold"
                type="submit"
                id="submit-signup"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* catch signup error */}
          {error && (
            <div className="alert alert-danger mt-3 text-center">
              Signup failed. Please try again.
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default SignUp;
