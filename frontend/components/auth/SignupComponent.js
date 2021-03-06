import Router from "next/router";
import React, { useEffect, useState } from "react";
import { isAuth, signup } from "../../actions/auth";

const SignupComponent = () => {
  const [values, setValues] = useState({
    name: "oguz",
    email: "oguz@oguz.com",
    password: "123456oguz",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  const { name, email, password, error, loading, message, showForm } = values;


  useEffect(()=>{
    isAuth() && Router.push('/')
  },[])

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, loading: true, error: false });
    const user = { name, email, password };

    signup(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          loading: false,
          message: data.message,
          showForm: false,
        });
      }
    });
  };

  const showLoading = () =>
    loading ? <div className="alert alert-info">Loading...</div> : "";
  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";
  const showMessage = () =>
    message ? <div className="alert alert-info">{message}</div> : "";

  const SignupForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            value={name}
            onChange={handleChange("name")}
            type="text"
            className="form-control"
            placeholder="Type your name"
          />
        </div>
        <div className="form-group">
          <input
            value={email}
            onChange={handleChange("email")}
            type="email"
            className="form-control"
            placeholder="Type your email"
          />
        </div>
        <div className="form-group">
          <input
            value={password}
            onChange={handleChange("password")}
            type="password"
            className="form-control"
            placeholder="Type your password"
          />
        </div>

        <div>
          <button className="btn btn-primary">Signup</button>
        </div>
      </form>
    );
  };
  return (
    <React.Fragment>
      {showLoading()}
      {showError()}
      {showMessage()}
      {showForm && SignupForm()}
    </React.Fragment>
  );
};

export default SignupComponent;
