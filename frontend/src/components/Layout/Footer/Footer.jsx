import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter, FaFileExport } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      {" "}
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-1">
            <div class="footer-logo">
              <img src="/images/logo.png" alt="" />
            </div>
            <div class="footer-1-bottom">
              <p>
                <span>
                  <MdEmail />
                </span>
                <span>info@PrepShipper.com</span>
              </p>
              <p>
                <span>
                  <FaFileExport />
                </span>
                <span>Dispatch: 888-566-8826</span>
              </p>
            </div>
          </div>
          <div class="footer-2">
            <h3 class="footer-heading">Services</h3>
            <ul>
              <li>
                <Link to="./warehousing-fulfillment.html">Warehousing</Link>
              </li>
              <li>
                <Link to="./order_fulfillment.html">Order Fulfillment</Link>
              </li>
              <li>
                <Link to="./return-relabel.html">Return-Relabel</Link>
              </li>
              <li>
                <Link to="./fba-transfer.html">FBA Transfer</Link>
              </li>
            </ul>
          </div>
          <div class="footer-3">
            <h3 class="footer-heading">About Us</h3>
            <ul>
              <li>
                <Link to="./about-us.html">About Us</Link>
              </li>
              <li>
                <Link to="./our-team.html">Our Team</Link>
              </li>
              <li>
                <Link to="./contact-us.html">Contact Us</Link>
              </li>
              <li>
                <Link to="./privacy-policy.html">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div class="footer-4">
            <h3 class="footer-heading">Social Media</h3>
            <div class="footer-icons">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </footer>
      <div class="copy-right">
        <p>© Copyright 2019 - 2023 PrepShipper, Inc. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
