import React from "react";
import "./service.css";
import { Link } from "react-router-dom";
import { S1, S2, S3, S4 } from "./WareHousing";

const FBA = () => {
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
              <button>
                <Link to="/return-relabel">Return-Relabel</Link>
              </button>
              <button style={{ background: "#edf6fc" }}>
                <Link to="/fba-transfer">FBA Transfer</Link>
              </button>
            </div>
          </div>
          <div class="services-right">
            <S1
              heading={"1. PrepShipper FBA Transfer"}
              para1={
                "As your business scales, you will reach a point where you will need a logistical expert to assist you in your growth. PrepShipper can provide that industry knowledge! When the seller needs to replenish their inventory at Amazon, PrepShipper will prep and transfer the inventory to the designated FBA fulfillment center. PrepShipper can guarantee the coordination and solutions regarding prepping, storing, handling, and transferring."
              }
              para2={
                "By using a fulfillment service like PrepShipper during peak holiday seasons, a seller can be confident that they can maximize their sales on account of having supplemental inventory available at a 3PL warehouse."
              }
              image={"/images/S4.webp"}
            />
            <S2
              heading={"2. FBA Transfer Advantages"}
              b1={"Same-Day Prep & Transfer"}
              b2={"Strategically Located Warehouses"}
              b3={"Efficient Transfer"}
              b4={"Flexible Operations"}
              p1={
                "A 99.9% same-day turnaround for prep and transfer. Depending on which Amazon fulfillment center the inventory is being transferred to, your merchandise will be available to fulfill Amazon orders within five business days."
              }
              p2={
                "Multiple warehouses are strategically located throughout the United States: CA, IL, MS, and PA."
              }
              p3={
                "Integrated freight carrier advantages are available inhouse for PrepShipper LTL transfer services within the United States or seller can utilize the Amazon LTL transfer services."
              }
              p4={
                "With Amazon’s ever-changing standards, PrepShipper has the flexibility and experience to sustain prep and transfer Amazon thresholds."
              }
            />
            <S3
              heading={"3. FBA Transfer Process"}
              p1={
                "Merchant prepares inventory and ships to PrepShipper warehouse"
              }
              p2={"Provide Advanced Shipment Notice"}
              p3={
                "PrepShipper warehouse receives inventory, and verify quantity received"
              }
              p4={"Put away the inbound inventory"}
              p5={"Inventory visible in System, and ready for transfer order"}
              p6={
                "Merchant submits transfer order to system, warehouse prepare the order, palletizing as needed"
              }
              image={"/images/return-label.png"}
            />
            <S4
              heading={"4. FBA Transfer Pricing"}
              s4={"Inbound Handling"}
              c8={"$250/ 20′ container"}
              c9={"$420/40′ container"}
              c10={"$500/40′ HQ container"}
              s1={"Storage Fee"}
              c1={"$0.60/cubic foot"}
              s3={"FBA Prep and Transfer"}
              c6={"Low to $1.5/package, based on billable weight."}
              c7={"$0.60/additional pick"}
              show1={true}
              show2={false}
              show3={true}
              show4={true}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FBA;
