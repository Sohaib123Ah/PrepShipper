import React from "react";
import "./about.css";
import GlobalContact from "../Contact/GlobalContact";

const AboutUs = () => {
  return (
    <>
      <section class="banner">
        <div class="banner-img">
          <img src="/images/ShipSage.jpg" alt="" />
        </div>
      </section>
      <section class="about-us-top">
        <div class="about-us-top-container">
          <div class="about-us-top-left">
            <div class="about-us-top-left-text">
              <div class="about-us-top-heading">
                <h2>PrepShipper</h2>
              </div>
              <div class="about-us-top-para">
                <p>
                  With eight years of warehouse operations in e-Commerce,
                  PrepShipper provides fulfillment and logistics services for
                  furniture, home furnishing, gardening and outdoor materials,
                  sporting goods, pet supplies, household appliances, daily
                  consumption goods, apparel, bags, toys, gifts, electronics,
                  and more. PrepShipper nationwide warehouses also offer two-day
                  shipping, FBA transfer, return and replacement of items,
                  inventory storage and management, and a variety of other
                  services.
                </p>
                <p>
                  PrepShipper has four warehouses strategically located across
                  the United States: East Coast, Midwest, South, and West Coast.
                  Our omnichannel integrations provide simple, speedy, and
                  scalable solutions for all our customers with warehouse
                  storage capabilities and optimized fulfillment services. Leave
                  your fulfillment to us.
                </p>
              </div>
            </div>
          </div>
          <div class="about-us-top-right">
            <div class="about-us-top-right-img">
              <img src="/images/ms-warehouse.webp" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section class="about-us-box">
        <div class="about-us-box-container">
          <div class="about-us-box-item">
            <h3>9</h3>
            <p>Years of Warehouse Operation</p>
          </div>
          <div class="about-us-box-item">
            <h3>40+</h3>
            <p>IT Developers</p>
          </div>
          <div class="about-us-box-item">
            <h3>25,000+</h3>
            <p>Total Daily Fulfilled Orders</p>
          </div>
          <div class="about-us-box-item">
            <h3>522,000sq ft</h3>
            <p>Total Warehouse Area</p>
          </div>
        </div>
      </section>
      <section class="about-us-fulfillment">
        <div class="about-us-fulfillment-container">
          <div class="about-us-fulfillment-heading">
            <h2>Fulfillment in Action</h2>
          </div>
          <div class="banner-img">
            <img src="/images/warehouse-display.webp" alt="" />
          </div>
        </div>
      </section>
      <section class="about-us-Partners">
        <div class="about-us-Partners-container">
          <div class="about-us-Partners-heading">
            <h2>Our Partners</h2>
          </div>
          <div class="banner-img">
            <img src="/images/cooperation-partners.webp" alt="" />
          </div>
        </div>
      </section>
      <GlobalContact />
    </>
  );
};

export default AboutUs;
