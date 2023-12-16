import React from "react";
import { FaBoxOpen, FaDatabase, FaTruck } from "react-icons/fa";
import { FaDolly, FaChartBar, FaPersonDotsFromLine } from "react-icons/fa6";

const WareBox = () => {
  return (
    <>
      {" "}
      <section class="warehouse-boxes">
        <div class="warehouse-boxes-container">
          <div class="warehouse-boxes-item">
            <FaBoxOpen />
            <h3>Drop Ship Service</h3>
            <p>
              A 99.9% same-day order delivery turnaround paired with efficient
              carrier logistics regarding dimensional weight factor for
              packages.
            </p>
          </div>
          <div class="warehouse-boxes-item">
            <FaDatabase />
            <h3>FBA Transfer Service</h3>
            <p>
              Amazon fulfillment centers such as ONT8/SMF3/MDW6 are in proximity
              and goods can be efficiently shipped out within 24 hours.
            </p>
          </div>
          <div class="warehouse-boxes-item">
            <FaDolly />
            <h3>Return and Relabel Service</h3>
            <p>
              Returns can be relabeled and restocked to replenish your inventory
              so that your product is available for future orders.
            </p>
          </div>
          <div class="warehouse-boxes-item">
            <FaTruck />
            <h3>Omni-Channel Services</h3>
            <p>
              E-commerce channel integration with markets such as Amazon,
              Walmart, Wayfair, Shopify, etc. Don’t miss out on anything!
            </p>
          </div>
          <div class="warehouse-boxes-item">
            <FaChartBar />
            <h3>Other Value-Added Services</h3>
            <p>
              Bundling, kitting, repackaging, pallet and carton labeling,
              cross-docking, expedited order processing, etc.
            </p>
          </div>
          <div class="warehouse-boxes-item">
            <FaPersonDotsFromLine />
            <h3>Exclusive Customized Service</h3>
            <p>
              PrepShipper warehouse management system can be customized to
              support modifications for sellers’ needs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WareBox;
