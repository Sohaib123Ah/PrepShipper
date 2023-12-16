import React from "react";
import "./service.css";
import { Link } from "react-router-dom";
import { S1, S2, S3, S4 } from "./WareHousing";

const ReturnLabel = () => {
  return (
    <>
      <section class="services">
        <div class="services-container">
          <div class="services-left">
            <div class="services-left-btns">
              <button>
                <Link to="/warehousing-fulfillment">Warehousing</Link>
              </button>
              <button>
                <Link to="/order-fulfillment">Order Fulfillment</Link>
              </button>
              <button style={{ background: "#edf6fc" }}>
                <Link to="/return-relabel">Return-Relabel</Link>
              </button>
              <button>
                <Link to="/fba-transfer">FBA Transfer</Link>
              </button>
            </div>
          </div>
          <div class="services-right">
            <S1
              heading={"1. PrepShipper Return and Relabel"}
              para1={
                "PrepShipper offers returns and relabeling options to e-commerce sellers. If a product is returned by the buyer and the product is damaged during shipping or the seller’s account is cancelled, it would be beneficial to use PrepShipper’s return services."
              }
              para2={
                "If the product is returned and is deemed resalable, PrepShipper can provide the value-added service by updating the labels, repackaging and restocking the items in the warehouse and made available for all future orders."
              }
              image={"/images/S3.webp"}
            />
            <S2
              heading={"2. Return and Relabeling Advantages"}
              b1={"Professional Team"}
              b2={"Experience"}
              b3={"Competitive Price"}
              b4={"Return Options"}
              p1={
                "More than eight years of experience in ecommerce warehouse operation alongside professional teams located in both China and the United States."
              }
              p2={
                "Proficient in handling any rework or relabeling for all omnichannel ecommerce returns."
              }
              p3={
                "PrepShipper’s return service is clear and transparent. There are no hidden fees."
              }
              p4={
                "Returns can be handled in three different ways: disposal of returned inventory, donated returned items, or returns can be returned to the seller."
              }
            />
            <S3
              heading={"3. Return and Relabel Process"}
              p1={
                "Merchant creates remove order and sends products to PrepShipper Warehouse"
              }
              p2={"PrepShipper warehouse receives products, update system"}
              p3={"Merchant sends relabel & rework instruction"}
              p4={
                "Warehouse processes the rework based on specific requirement"
              }
              p5={"Warehouse provides rework result with carton information"}
              p6={
                "Merchant creates shipment plan to send to Amazon or other marketplaces"
              }
              image={"/images/return-label.png"}
            />
            <S4
              heading={"4. Return and Relabel Pricing"}
              s1={"Return Inbound Handling"}
              c1={"$4.50/box + $1.50/SKU"}
              show1={true}
              show2={false}
              show3={false}
              show4={false}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ReturnLabel;
