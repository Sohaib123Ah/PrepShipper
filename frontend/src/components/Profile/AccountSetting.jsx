import React, { useEffect } from "react";
import "./profile.css";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { LuBox } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/actions/userAction";
import { FaPen } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { toast } from "react-hot-toast";

const AccountSetting = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user, message, error } = useSelector(
    (state) => state.user
  );

  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    if (!isAuthenticated) {
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
      {" "}
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
                    <Link
                      className="group-item-active group-item"
                      to={"/account-settings"}
                    >
                      <IoSettingsOutline />
                      <span>Account Settings</span>
                      <FaArrowRight />
                    </Link>
                    <Link className="group-item" to={"/my-address"}>
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
                <h1 className="my-account-page-title">Account Settings</h1>
                <div className="ContactInformation">
                  <div className="all-fields">
                    <div className="field-wraper">
                      <div className="outer-field">
                        <p>Name</p>
                        <div className="inner-field">
                          <span>{user && user.name}</span>
                          <Link to={"/account-settings/change-name"}>
                            <FaPen />
                          </Link>
                        </div>
                      </div>
                      <div className="outer-field">
                        <p>Password</p>
                        <div className="inner-field">
                          <span>********</span>
                          <Link to={"/account-settings/change-password"}>
                            <FaPen />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <button className="btn">Save Changes</button>
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

export default AccountSetting;
