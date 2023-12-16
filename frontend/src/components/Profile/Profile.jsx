import React, { useEffect } from "react";
import "./profile.css";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { LuBox } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/actions/userAction";
import { GrLocation } from "react-icons/gr";
import { toast } from "react-hot-toast";

const Profile = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user, error, message } = useSelector(
    (state) => state.user
  );

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
                    <Link
                      className="group-item-active group-item"
                      to={"/profile"}
                    >
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
                <h1 className="my-account-page-title">Overview</h1>
                <div className="ContactInformation">
                  <h2 className="my-account-block-title">
                    Account Information
                  </h2>
                  <div className="name-data">
                    <h2 className="my-account-block-subtitle">
                      Contact Information
                    </h2>
                    <p>{user && user.name}</p>
                    <p>{user && user.email}</p>
                    <p>{user && user.phoneNumber}</p>
                    <div className="name-data-editing">
                      <Link to={"/account-settings/change-name"}>Edit</Link>
                      <Link to={"/account-settings/change-password"}>
                        Change Password
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="address-main-container">
                  <div className="address-title">
                    <h2>Address Book</h2>
                    <Link to={"/my-address"}>Manage Addresses</Link>
                  </div>
                  <h2 className="default-heading">Default Address</h2>
                  <div className="address-box">
                    <p className="name-para">
                      <b>{user && user.name}</b>
                    </p>
                    <div>
                      <p>{user && user.country}</p>
                      <p>{user && user.state}</p>
                    </div>
                    <div>
                      <p>{user && user.city}</p>
                      <p>{user && user.zipCode}</p>
                    </div>
                    <p>{user && user.address}</p>
                    <p className="edit-link">
                      <Link to={"/my-address"}>Edit</Link>
                    </p>
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

export default Profile;
