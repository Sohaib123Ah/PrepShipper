import React from "react";
import "./warehouse.css";
import { FaShapes, FaFaceSmile, FaBoxesStacked } from "react-icons/fa6";
import { FaTruck, FaUserAstronaut, FaArrowCircleUp } from "react-icons/fa";

const WareRed = () => {
  return (
    <>
      {" "}
      <section class="reduced">
        <div class="reduced-heading">
          <h2>PrepShipper: Reduced Cost and Increased Efficiency</h2>
        </div>
        <div class="reduced-container">
          <div class="reduced-boxes-container">
            <div class="reduced-box-item">
              <div class="reduced-icon">
                <FaShapes />
              </div>
              <h3>Reduce Logistics Costs</h3>
              <p>
                Goods that are fulfilled in our PrepShipper warehouses are
                delivered to your customers or Amazon fulfillment centers. Our
                services reduce various costs concerning pick, pack, prep, and
                shipping. PrepShipper can fulfill more than 25,000+ orders per
                day, and as the order volume increases, additional discounts can
                be applied.
              </p>
            </div>
            <div class="reduced-box-item">
              <div class="reduced-icon">
                <FaTruck />
              </div>
              <h3>Order Accuracy and Same-Day Delivery</h3>
              <p>
                PrepShipper prides itself in actualizing 99.9% order accuracy
                and same-day shipping. By following through on these metrics
                PrepShipper will ensure that all orders are delivered to your
                customers on the expected delivery date.
              </p>
            </div>
            <div class="reduced-box-item">
              <div class="reduced-icon">
                <FaUserAstronaut />
              </div>
              <h3>Internally Managed Operations</h3>
              <p>
                PrepShipper has several years of experience in inventory
                management and fulfillment services. Our company manages and
                operates four strategically located warehouses in California,
                Illinois, Mississippi, and Pennsylvania. Our professional
                customer service team is available 24 hours a day to support
                your business.
              </p>
            </div>
            <div class="reduced-box-item">
              <div class="reduced-icon">
                <FaArrowCircleUp />
              </div>
              <h3>Scalable Fulfillment Solutions</h3>
              <p>
                PrepShipper can offer services to all businesses big and small.
                We can provide omnichannel integrations to help boost your
                marketplace exposure and increase sales. PrepShipper facilitates
                scalable fulfillment solutions through our customizable
                automated warehouse management system.
              </p>
            </div>
            <div class="reduced-box-item">
              <div class="reduced-icon">
                <FaFaceSmile />
              </div>
              <h3>Customer Satisfaction = Revenue</h3>
              <p>
                Companies place a great deal of focus on customer satisfaction
                because it can have a major impact on revenue. At PrepShipper,
                we make customer satisfaction a priority through the application
                of our industry experience and knowledge by setting clear goals
                and striving to exceed your business expectations.
              </p>
            </div>
            <div class="reduced-box-item">
              <div class="reduced-icon">
                <FaBoxesStacked />
              </div>
              <h3>Simple, Speedy, Scalable</h3>
              <p>
                PrepShipper offers a full-service end-to-end solution. Simple
                pricing, speedy onboarding, and scalable business opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WareRed;
