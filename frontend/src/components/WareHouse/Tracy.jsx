import React from "react";
import "./warehouse.css";

const Tracy = ({ heading, image, para1, para2 }) => {
  return (
    <>
      {" "}
      <section class="tracy">
        <div class="tracy-heading">
          <h2>{heading}</h2>
        </div>
        <div class="tracy-container">
          <div class="tracy-left">
            <div class="tracy-img">
              <img src={image} alt="" />
            </div>
          </div>
          <div class="tracy-right">
            <div class="tracy-text">
              <p>
                <strong>Warehouse Services:</strong> fulfillment, returns and
                relabeling, FBA transfer, repackaging, Amazon self-pickup,Amazon
                SFP fulfillment and shipping, customized logistics through
                warehouse management system, etc.
              </p>
              <p>
                <strong>Delivery Channels:</strong>
                UPS, USPS, FedEx, LTL local trucking
              </p>
              <p>
                <strong>Warehouse Area:</strong> {para1}
              </p>
              <p>
                <strong>Daily Orders Processed:</strong> {para2}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tracy;
