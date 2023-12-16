import React from "react";
import "./warehouse.css";
import GlobalContact from "../Contact/GlobalContact";
import WareSec from "./WareSec";
import Tracy from "./Tracy";
import WareBox from "./WareBox";
import WareBusiness from "./WareBusiness";
import WareRed from "./WareRed";

const MSW = () => {
  return (
    <>
      <section class="banner">
        <div class="banner-img">
          <img src="/images/caw.jpg" alt="" />
        </div>
      </section>
      <div className="padding">
        <WareSec
          heading={"Southaven, MS"}
          para1={
            "PrepShipper Southaven warehouse is in Mississippi with a total warehouse capacity of 90,000 square feet. Southaven is the third largest city in Mississippi and the second most populated. It has a large transportation and aviation network for the Southern region of the United States. In addition, the Mississippi River traverses the urban area of Southaven, where two interstate highways meet, and where the railway network is established. Cargo is transported in containers on ships upstream from the Mississippi River and can reach most parts of the United States within 10 hours."
          }
          para2={
            "The Southaven warehouse can provide e-commerce sellers with fulfillment services, support omni-channel integrations, FBA prep and transfer, Amazon SFP shipping services, and can provide customized services according to sellers’ needs."
          }
          area={"90,000"}
          order={"5,000"}
        />
        <Tracy
          heading={"Allentown Warehouse Services"}
          image={"/images/ms-warehouse.webp"}
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

export default MSW;
