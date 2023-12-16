import React, { useEffect, useState } from "react";
import "./auth.css";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/userAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isAuthenticated, error, message } = useSelector(
    (state) => state.user
  );

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  return (
    <>
      <div className="container">
        <div className="login-container">
          <div className="login-inner-container">
            <div className="login-left">
              <div className="login-form">
                <div className="login-heading">
                  <h2>Login</h2>
                  <p>
                    Doesn't have an account yet?{" "}
                    <Link to={"/sign-up"}>Sign Up</Link>
                  </p>
                </div>
                <form onSubmit={submitHandler}>
                  <div className="input-div">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="xyz@gmail.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-div">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter 8 character or more"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="forget-password-div">
                    <Link to={"/"}>Forget Password</Link>
                  </div>
                  <div className="login-btn">
                    <button className="btn" type="submit">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="login-right">
              <div className="login-img">
                <img src="/images/3pl.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
