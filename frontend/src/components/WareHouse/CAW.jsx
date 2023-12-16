import React from "react";
import "./warehouse.css";
import GlobalContact from "../Contact/GlobalContact";
import WareSec from "./WareSec";
import Tracy from "./Tracy";
import WareBox from "./WareBox";
import WareBusiness from "./WareBusiness";
import WareRed from "./WareRed";

const CAW = () => {
  return (
    <>
      <section class="banner">
        <div class="banner-img">
          <img src="/images/caw.jpg" alt="" />
        </div>
      </section>
      <div className="padding">
        <WareSec
          heading={"Tracy, CA"}
          para1={
            "PrepShipper Tracy warehouse is in Northern California. The total capacity of the warehouse is 90,000 square feet. The Tracy warehouse provides an alternative option that avoids the congested Los Angeles port. The Tracy warehouse is a short distance (51 miles) from the Oakland port which minimizes your freight cost. There are many FBA warehouses, and the transfer speed is optimal."
          }
          para2={
            "The Tracy warehouse can provide e-commerce sellers with fulfillment services, support omni-channel integrations, FBA prep and transfer, Amazon SFP shipping services, and can provide customized services according to PrepShipper needs."
          }
          area={"90,000"}
          order={"5,000"}
        />
        <Tracy
          heading={"Tracy Warehouse Services"}
          image={"/images/tracy.webp"}
          para1={"90,000 sq ft"}
          para2={"5,000"}
        />
        <WareBox />
        <WareBusiness />
        <WareRed />
      </div>
      <GlobalContact />
    </>
  );
};

export default CAW;
