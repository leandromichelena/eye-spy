import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

// authentication import
import Auth from "../utils/Auth";

// image import
import loginImg from "../images/login-signup-img.png";

// component imports
// import FailModal from '../components/FailModal';

// bootstrap imports
// import Button from 'react-bootstrap/Button';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });

    console.log(formState);
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  // ADD IN --> IF LOGIN FAILED, FAIL MODAL POPS UP

  // useState variables for modals
  // const [modalShow, setModalShow] = React.useState(false);

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
                Login
              </h1>
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
            {/* submit login data */}
            <div className="text-center">
              <button
                className="all-btns p-2 px-4 rounded fw-bold"
                type="submit"
                id="submit-login"
              >
                Submit
              </button>
            </div>
          </form>

          {/* catch login error */}
          {error && (
            <div className="alert alert-danger mt-3 text-center">
              Login failed. Please check your credentials and try again.
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Login;
