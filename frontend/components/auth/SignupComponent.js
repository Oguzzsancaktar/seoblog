import React, { useState } from "react";
import { signup } from "../../actions/auth";

const SignupComponent = () => {
  const [values, setValues] = useState({
    name: "Taha",
    email: "taha@gmail.com",
    password: "tttttt",
    error: "",
    message: "",
    showForm: true,
    loading: false,
  });

  const { name, email, password, error, loading, showForm, message } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.table({ name, email, password, error,loading, showForm, message });

    setValues({ ...values, loading: true, error: false });
    const user = { name, email, password };

    signup(user).then((data) => {
      console.log(data);

      //   if (data.error) {
      //     setValues({ ...values, error: data.error, loading:false });
      //   } else {
      //     setValues({
      //       ...values,
      //       name: "",
      //       email: "",
      //       password: "",
      //       error: "",
      //       loading: false,
      //       message: data.message,
      //       showForm:false
      //     });
      //   }
    });
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const signupForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            value={name}
            onChange={handleChange("name")}
            placeholder="Enter your name"
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            value={email}
            onChange={handleChange("email")}
            placeholder="Enter your email"
            type="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            value={password}
            onChange={handleChange("password")}
            placeholder="Enter your password"
            type="password"
            className="form-control"
          />
        </div>
        <div>
          <button className="btn btn-primary">Signup </button>
        </div>
      </form>
    );
  };

  return <React.Fragment>{signupForm()}</React.Fragment>;
};

export default SignupComponent;
