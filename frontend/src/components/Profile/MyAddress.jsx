import React, { useEffect, useState } from "react";
import "./profile.css";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { LuBox } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  changeAddress,
  loadUser,
  logoutUser,
} from "../../redux/actions/userAction";
import { GrLocation } from "react-icons/gr";
import { Country, State } from "country-state-city";
import { toast } from "react-hot-toast";

const MyAddress = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user, error, message } = useSelector(
    (state) => state.user
  );

  const [name, setName] = useState("");
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

  const addressHandler = () => {
    dispatch(changeAddress(countryName, stateName, phone, city, zip, address));
    dispatch(loadUser());
  };

  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logoutUser());
    if (!isAuthenticated) {
      navigate("/");
    }
  };

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
      <div className="my-container">
        <div className="profile">
          <div className="profile-container">
            <div className="profile-left">
              <div className="account-navigation">
                <div className="navigation-list">
                  <h3 className="account-title">
                    Welcome, {user && user.name}!
                  </h3>
                  <div className="account-group-btns">
                    <h4 className="group-title">Overview</h4>
                    <Link className="group-item" to={"/profile"}>
                      <LuBox />
                      <span>Overview</span>
                      <FaArrowRight />
                    </Link>
                    <h4 className="group-title">Orders</h4>
                    <Link className="group-item" to={"/orders"}>
                      <LuBox />
                      <span>View All Orders</span>
                      <FaArrowRight />
                    </Link>
                    <h4 className="group-title">Settings</h4>
                    <Link className="group-item" to={"/account-settings"}>
                      <IoSettingsOutline />
                      <span>Account Settings</span>
                      <FaArrowRight />
                    </Link>
                    <Link
                      className="group-item-active group-item"
                      to={"/my-address"}
                    >
                      <GrLocation />
                      <span>My Address</span>
                      <FaArrowRight />
                    </Link>
                    <button className="sign-out-btn" onClick={logoutHandler}>
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-right">
              <div className="myaccount-content">
                <h1 className="my-account-page-title">Edit Address</h1>
                <div className="ContactInformation">
                  <div className="edit-address-main-container">
                    <div className="edit-address-item">
                      <label>Full Name</label>
                      <input
                        type="text"
                        placeholder={user && user.name}
                        readOnly
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="edit-address-item">
                      <label>Phone Number</label>
                      <input
                        type="text"
                        placeholder={user && user.phoneNumber}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="edit-address-item">
                      <label htmlFor="phone">Country</label>
                      <select
                        value={country}
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
                    <div className="edit-address-item">
                      <label>State</label>
                      <select
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
                    <div className="input-wraper">
                      <div className="edit-address-item">
                        <label htmlFor="city">City</label>
                        <input
                          type="text"
                          id="city"
                          placeholder={user && user.city}
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                      <div className="edit-address-item">
                        <label htmlFor="zip">Zip Code</label>
                        <input
                          type="number"
                          id="zip"
                          placeholder={user && user.zipCode}
                          value={zip}
                          onChange={(e) => setZip(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="edit-address-item">
                      <label htmlFor="address">Street Address</label>
                      <input
                        type="text"
                        id="address"
                        placeholder={user && user.address}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <button className="btn" onClick={addressHandler}>
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAddress;
