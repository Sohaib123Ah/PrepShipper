import React from "react";
import "./vms.css";
import { FaBoxOpen, FaLockOpen } from "react-icons/fa";
import { FaCubes, FaMapLocation } from "react-icons/fa6";

const VMS = () => {
  return (
    <>
      {" "}
      <section class="system">
        <div class="system-heading">
          <h2>
            PrepShipper WMS Inventory Management System Based on Cloud
            Technology
          </h2>
          <p>
            Help cross-border e-commerce sellers, improve order processing
            efficiency, and reduce labor costs.
          </p>
        </div>
      </section>
      <div className="padding">
        <div class="system-line"></div>
        <section class="operation">
          <div class="operation-heading">
            <h2>Warehouse Operation</h2>
          </div>
          <div class="operation-img">
            <img src="/images/system2.jpg" alt="" />
          </div>
        </section>
        <div class="system-line"></div>
        <section class="advantages">
          <div class="advantages-heading">
            <h2>PrepShipper System Advantages</h2>
          </div>
          <div class="advantages-container">
            <div class="advantages-box">
              <FaBoxOpen />
              <h3>Efficient Delivery</h3>
              <p>
                The order tracking number will be generated within 1 hour, and
                the goods will be shipped out within 24 hours.
              </p>
            </div>
            <div class="advantages-box">
              <FaCubes />
              <h3>Smart Shipping</h3>
              <p>
                Automatically merge orders from the same customer to save on
                shipping costs.
              </p>
            </div>
            <div class="advantages-box">
              <FaLockOpen />
              <h3>No Subscription Service</h3>
              <p>
                Sellers can choose their fulfillment service options at will
                with no extra added fees or subscription bundles.
              </p>
            </div>
            <div class="advantages-box">
              <FaMapLocation />
              <h3>Wrong Address Correction</h3>
              <p>
                The system automatically corrects the wrong address for
                delivered orders to avoid the loss of goods.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VMS;
