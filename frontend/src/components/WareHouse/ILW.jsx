import React from "react";
import "./warehouse.css";
import GlobalContact from "../Contact/GlobalContact";
import WareSec from "./WareSec";
import Tracy from "./Tracy";
import WareBox from "./WareBox";
import WareBusiness from "./WareBusiness";
import WareRed from "./WareRed";

const ILW = () => {
  return (
    <>
      <section class="banner">
        <div class="banner-img">
          <img src="/images/caw.jpg" alt="" />
        </div>
      </section>
      <div className="padding">
        <WareSec
          heading={"Bolingbrook, IL"}
          para1={
            "PrepShipper Bolingbrook warehouse is located thirty-one miles southwest of Chicago, Illinois with a total warehouse capacity of 230,000 square feet. Chicago, the largest city on the Great Lakes, has a developed transportation industry and has the largest air freight center and railway hub in the United States. The warehouse’s advantageous geographical location makes it convenient for goods to be sent to the East and West coasts. It has a wide range of railway networks resulting in optimized transportation time."
          }
          para2={
            "The Bolingbrook warehouse can provide e-commerce sellers with fulfillment services, support omni-channel integrations, FBA prep and transfer, Amazon SFP shipping services, and can provide customized services according to sellers’ needs."
          }
          area={"230,000"}
          order={"5,000"}
        />
        <Tracy
          heading={"Allentown Warehouse Services"}
          image={"/images/il-warehouse.webp"}
          para1={"230,000 sq ft"}
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

export default ILW;
