import React from "react";
import "./service.css";
import { Link } from "react-router-dom";
import { S1, S2, S3, S4 } from "./WareHousing";

const OrderFull = () => {
  return (
    <>
      <section class="services">
        <div class="services-container">
          <div class="services-left">
            <div class="services-left-btns">
              <button>
                <Link to="/warehousing-fulfillment">Warehousing</Link>
              </button>
              <button style={{ background: "#edf6fc" }}>
                <Link to="/order-fulfillment">Order Fulfillment</Link>
              </button>
              <button>
                <Link to="/return-relabel">Return-Relabel</Link>
              </button>
              <button>
                <Link to="/fba-transfer">FBA Transfer</Link>
              </button>
            </div>
          </div>
          <div class="services-right">
            <S1
              heading={"1. PrepShipper Order Fulfillment"}
              para1={
                "Among other logistical services, PrepShipper offers order fulfillment services which include storing merchandise from sellers who are ordering directly from wholesalers: PrepShipper fulfills those orders and stores the goods in the warehouse. When a customer orders from the seller, we provide the picking, packing, and shipping of those goods and the products are delivered to the customer through one of our carrier partners. Using a fulfillment company like PrepShipper saves the seller stress and money on inventory storage, warehousing management, packaging, and shipping fees. Additionally, E-commerce sellers can actualize the timeliness of delivery by using our strategically located warehouses to deliver goods all over the United States."
              }
              para2={
                "PrepShipper order fulfillment service provides 99.9% same-day delivery turnaround and 99.9% order accuracy."
              }
              image={"/images/S2.webp"}
            />
            <S2
              heading={"2. Order Fulfillment Advantages"}
              b1={"Timely Pick, Pack & Prep"}
              b2={"API Integrations"}
              b3={"Dimensional Weight Factors"}
              b4={"Inventory Accuracy"}
              p1={
                "An order received by 12 PM local warehouse time will be picked, packed, and prepped for delivery the same day. All orders received after 12 PM will be ready to ship the next day."
              }
              p2={
                "PrepShipper has 100+ integration options and can connect to most ecommerce marketplaces and shopping cart platforms."
              }
              p3={
                "PrepShipper has pre-arranged a beneficial dimensional shipping divisor that can help reduce shipping costs."
              }
              p4={
                "Efficient warehouse management system helps achieve 99.9% turnaround on same-day delivery and 99.9% order accuracy."
              }
            />
            <S3
              heading={"3. Order Fulfillment Process"}
              p1={
                "Seller prepares inventory to be shipped to PrepShipper warehouse"
              }
              p2={"PrepShipper warehouse receives inventory, verifies the ASN"}
              p3={
                "Inventory is put away onto warehouse shelves and is updated in the WMS"
              }
              p4={"API order integration (or through manual template)"}
              p5={"Warehouse picks and packs the order"}
              p6={
                "Order ships out to the buyer, tracking number created within PrepShipper app"
              }
              image={"/images/order-fulfillment.png"}
            />
            <S4
              heading={"4. Order Fulfillment Pricing"}
              s2={"Inbound Receiving"}
              s3={"Pick and Pack"}
              c2={"$3/carton"}
              c3={"$17/pallet"}
              c4={"$420/40′ container"}
              c5={"$500/40′ HQ container"}
              c6={"Low to $1.5/package, based on billable weight."}
              c7={"$0.60/additional pick"}
              show1={false}
              show2={true}
              show3={true}
              show4={false}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderFull;
