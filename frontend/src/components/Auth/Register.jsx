import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { otpSend, registerUser } from "../../redux/actions/userAction";
import { Country, State } from "country-state-city";
import "./auth.css";
import { toast } from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [vCode, setVCode] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [address, setAddress] = useState("");
  const [countryName, setCountryName] = useState("");
  const [stateName, setStateName] = useState("");

  useEffect(() => {
    if (country) {
      setCountryName(Country.getCountryByCode(country).name);
    }
  }, [country]);

  useEffect(() => {
    if (state) {
      setStateName(State.getStateByCodeAndCountry(state, country).name);
    }
  }, [state, country]);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { otpHash, isAuthenticated, error, message } = useSelector(
    (state) => state.user
  );

  const otpHandler = () => {
    dispatch(otpSend(email));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      registerUser(
        vCode,
        otpHash,
        name,
        email,
        password,
        cPassword,
        phone,
        countryName,
        address,
        city,
        stateName,
        zip
      )
    );
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [navigate, isAuthenticated]);

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
      {" "}
      <div className="container">
        <div className="login-container">
          <div className="login-inner-container">
            <div className="login-left">
              <div className="login-form">
                <div className="login-heading">
                  <h2>Register</h2>
                  <p>
                    Allready have an account{" "}
                    <Link to={"/sign-in"}>Sign in</Link>
                  </p>
                </div>
                <form onSubmit={submitHandler}>
                  <div className="input-div">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="xyz"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="input-div">
                    <label htmlFor="name">Email Address</label>
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
                    <label htmlFor="otp">Verification</label>
                    <div className="otp-btn">
                      <input
                        id="otp"
                        type="text"
                        placeholder="Enter Verification Code"
                        required
                        value={vCode}
                        onChange={(e) => setVCode(e.target.value)}
                      />
                      <button onClick={otpHandler}>Send</button>
                    </div>
                  </div>
                  <div className="input-div">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      type="text"
                      placeholder="Enter Phone Number"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="input-div">
                    <label htmlFor="phone">Country</label>
                    <select
                      value={country}
                      required
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option value="">Country</option>
                      {Country &&
                        Country.getAllCountries().map((i) => (
                          <option value={i.isoCode} key={i.isoCode}>
                            {i.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  {country && (
                    <div className="input-div">
                      <label>State</label>
                      <select
                        required
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      >
                        <option value="">State</option>
                        {State &&
                          State.getStatesOfCountry(country).map((i) => (
                            <option value={i.isoCode} key={i.isoCode}>
                              {i.name}
                            </option>
                          ))}
                      </select>
                    </div>
                  )}
                  <div className="input-wraper">
                    <div className="input-div">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        id="city"
                        placeholder="Enter City"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                    <div className="input-div">
                      <label htmlFor="zip">Zip Code</label>
                      <input
                        type="number"
                        id="zip"
                        placeholder="Enter Zip Code"
                        required
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="input-div">
                    <label htmlFor="address">Street Address</label>
                    <input
                      type="text"
                      id="address"
                      placeholder="Enter Street Address"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
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
                  <div className="input-div">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input
                      id="cpassword"
                      type="password"
                      placeholder="Enter 8 character or more"
                      required
                      value={cPassword}
                      onChange={(e) => setCPassword(e.target.value)}
                    />
                  </div>
                  <div className="login-btn">
                    <button className="btn" type="submit">
                      Register
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

export default Register;
