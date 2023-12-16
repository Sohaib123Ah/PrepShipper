import React from "react";
import "./home.css";
import GlobalContact from "../Contact/GlobalContact";
import { FaWarehouse, FaBox, FaBoxOpen, FaIdCard } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { MdLabelImportant } from "react-icons/md";

const Home = () => {
  return (
    <>
      <div className="banner">
        <div class="banner-img">
          <img src="/images/home-banner.jpg" alt="" />
        </div>
      </div>
      <div class="services-section">
        <div class="services-heading">
          <h1>Our Services</h1>
        </div>
        <div class="services-top">
          <div class="services-top-container">
            <div class="serivces-top-item">
              <div class="services-top-item-icon">
                <FaWarehouse />
              </div>
              <div class="services-top-item-heading">
                <h3>Omni-Channel</h3>
              </div>
              <div class="services-top-item-para">
                <h4>Marketplaces for Your Business</h4>
              </div>
            </div>
            <div class="serivces-top-item">
              <div class="services-top-item-icon">
                <FaBox />
              </div>
              <div class="services-top-item-heading">
                <h3>Fulfillment</h3>
              </div>
              <div class="services-top-item-para">
                <h4>Pick, Pack, Label, and Ship</h4>
              </div>
            </div>
            <div class="serivces-top-item">
              <div class="services-top-item-icon">
                <FaHouse />
              </div>
              <div class="services-top-item-heading">
                <h3>FBA Transfer</h3>
              </div>
              <div class="services-top-item-para">
                <h4>Amazon Prep and Replenishment</h4>
              </div>
            </div>
            <div class="serivces-top-item">
              <div class="services-top-item-icon">
                <MdLabelImportant />
              </div>
              <div class="services-top-item-heading">
                <h3>Return & Relabel</h3>
              </div>
              <div class="services-top-item-para">
                <h4>Cost and Inventory Recovery</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="services-bottom">
          <div class="services-bottom-container">
            <div class="serivces-bottom-item green">
              <div class="services-bottom-item-heading">
                <h2>Platform Integration</h2>
              </div>
              <div class="services-bottom-item-back">
                <h2>Software Development</h2>
                <p>
                  Standard API and EDI integrations to enable connections with
                  multiple e-commerce platforms for omni-channel fulfillment.
                </p>
              </div>
            </div>
            <div class="serivces-bottom-item blue">
              <div class="services-bottom-item-heading">
                <h2>Inventory Distribution</h2>
              </div>
              <div class="services-bottom-item-back">
                <h2>Warehouse Transfers</h2>
                <p style={{ color: "#fff" }}>
                  Multi-warehouse delivery capabilities with optimized efficient
                  delivery options and flexible pricing.
                </p>
              </div>
            </div>
            <div class="serivces-bottom-item green">
              <div class="services-bottom-item-heading">
                <h2>Customer Service</h2>
              </div>
              <div class="services-bottom-item-back">
                <h2>Customer Support</h2>
                <p>
                  US customer service team is available online 24 hours a day to
                  assist with all client related needs.
                </p>
              </div>
            </div>
            <div class="serivces-bottom-item blue">
              <div class="services-bottom-item-heading">
                <h2>System Support</h2>
              </div>
              <div class="services-bottom-item-back">
                <h2>Automated System</h2>
                <p style={{ color: "#fff" }}>
                  The warehouse management system can be automated for order
                  processing, receiving, and inventory management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="warehouse-location">
        <div class="warehouse-location-heading">
          <h2>warehouse-location</h2>
        </div>
        <div class="warehouse-location-img">
          <img src="/images/map.png" alt="" />
        </div>
      </div>
      <section class="about-us">
        <div class="about-us-heading">
          <h2>About Us</h2>
        </div>
        <div class="about-us-container">
          <div class="about-us-left">
            <div class="video">
              <video src="/images/Prepshipper.mp4" controls></video>
            </div>
          </div>
          <div class="about-us-right">
            <div class="text-box">
              <p>
                With eight years of warehouse operations in e-Commerce,
                PrepShipper provides fulfillment and logistics services for
                furniture, home furnishing, gardening and outdoor materials,
                sporting goods, pet supplies, household appliances, daily
                consumption goods, apparel, bags, toys, gifts, electronics, and
                more. PrepShipper nationwide warehouses also offer two-day
                shipping, FBA transfer, return and replacement of items,
                inventory storage and management, and a variety of other
                services.
              </p>
              <p>
                PrepShipper has four warehouses strategically located across the
                United States: East Coast, Midwest, South, and West Coast. Our
                omnichannel integrations provide simple, speedy, and scalable
                solutions for all our customers with warehouse storage
                capabilities and optimized fulfillment services. Leave your
                fulfillment to us.
              </p>
              <div class="text-box-icons">
                <div class="text-box-item-div">
                  <div class="icon">
                    <FaWarehouse />
                    <span>520,000+</span>
                  </div>
                  <div class="text-box-para">
                    <p>Total Warehouse Space (sq ft)</p>
                  </div>
                </div>
                <div class="text-box-item-div">
                  <div class="icon">
                    <FaBoxOpen />
                    <span>25,000+</span>
                  </div>
                  <div class="text-box-para">
                    <p>Fulfilled Orders</p>
                  </div>
                </div>
                <div class="text-box-item-div">
                  <div class="icon">
                    <FaIdCard />
                    <span>40+</span>
                  </div>
                  <div class="text-box-para">
                    <p>IT Developers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GlobalContact />
    </>
  );
};

export default Home;
