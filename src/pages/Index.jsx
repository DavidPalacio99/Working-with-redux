import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import { setUser } from "../reducers/user/userSlice";

export const Index = () => {
  const emailField = useRef(null);
  const passwordField = useRef(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      const users = response.data;
      console.log(users);
      const userToLog = users.find(
        (user) => user.email === emailField.current.value
      );
      console.log(userToLog);

      if (userToLog) {
        if (userToLog.address.zipcode === passwordField.current.value) {
          console.log("Credenciales válidas");
          dispatch(
            setUser({
              email: userToLog.email,
              name: userToLog.name,
              token: Date.now(),
            })
          );
          navigate("/home");
        }
      }
    });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <h2 className="mb-4">LOGIN FORM</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" ref={emailField} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              ref={passwordField}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
