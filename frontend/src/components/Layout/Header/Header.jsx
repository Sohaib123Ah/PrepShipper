import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import "./header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <div className="header-left">
            <Link to={"/"}>
              <img src="/images/logo.png" alt="" />
            </Link>
          </div>
          <div className="header-center">
            <ul className="main-ul">
              <li className="main-li">
                <Link className="main-link" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="main-li">
                <Link className="main-link" to={"/ca-warehouse"}>
                  <span>Warehouse</span>
                  <span className="arrow">
                    <MdKeyboardArrowDown />
                  </span>
                </Link>
                <ul className="inner-ul">
                  <li>
                    <Link to={"/ca-warehouse"}>CA Warehouse</Link>
                  </li>
                  <li>
                    <Link to={"/pa-warehouse"}>PA Warehouse</Link>
                  </li>
                  <li>
                    <Link to={"/il-warehouse"}>IL Warehouse</Link>
                  </li>
                  <li>
                    <Link to={"/ms-warehouse"}>MS Warehouse</Link>
                  </li>
                </ul>
              </li>
              <li className="main-li">
                <Link className="main-link" to={"/warehousing-fulfillment"}>
                  <span>Services</span>
                  <span className="arrow">
                    <MdKeyboardArrowDown />
                  </span>
                </Link>
                <ul className="inner-ul">
                  <li>
                    <Link to={"/warehousing-fulfillment"}>Warehousing</Link>
                  </li>
                  <li>
                    <Link to={"/order-fulfillment"}>Order Fulfillment</Link>
                  </li>
                  <li>
                    <Link to={"/return-relabel"}>Return Relabel</Link>
                  </li>
                  <li>
                    <Link to={"/fba-transfer"}>FBA Transfer</Link>
                  </li>
                </ul>
              </li>
              <li className="main-li">
                <Link className="main-link" to={"/wms"}>
                  <span>Software</span>
                </Link>
              </li>
              <li className="main-li">
                <Link className="main-link" to={"/product-categories"}>
                  <span>Customers</span>
                </Link>
              </li>
              <li className="main-li">
                <Link className="main-link" to={"/about-us"}>
                  <span>About Us</span>
                  <span className="arrow">
                    <MdKeyboardArrowDown />
                  </span>
                </Link>
                <ul className="inner-ul">
                  <li>
                    <Link to={"/about-us"}>About Us</Link>
                  </li>
                  <li>
                    <Link to={"/our-team"}>Our Team</Link>
                  </li>
                  <li>
                    <Link to={"/contact-us"}>Contact Us</Link>
                  </li>
                </ul>
              </li>
              <div className="login-btn">
                {isAuthenticated ? (
                  <Link to={"/profile"}>
                    <FaRegUserCircle />
                    <span>Account</span>
                  </Link>
                ) : (
                  <Link to={"/sign-in"}>
                    <FaRegUserCircle />
                    <span>Sign in</span>
                  </Link>
                )}
              </div>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
