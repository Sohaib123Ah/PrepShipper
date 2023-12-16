import React from "react";
import "./warehouse.css";
import GlobalContact from "../Contact/GlobalContact";
import WareSec from "./WareSec";
import Tracy from "./Tracy";
import WareBox from "./WareBox";
import WareBusiness from "./WareBusiness";
import WareRed from "./WareRed";

const PAW = () => {
  return (
    <>
      <section class="banner">
        <div class="banner-img">
          <img src="/images/caw.jpg" alt="" />
        </div>
      </section>
      <div className="padding">
        <WareSec
          heading={"Allentown, PA"}
          para1={
            "PrepShipper Allentown warehouse is located in Pennsylvania with a total warehouse capacity of 112,000 square feet. The warehouse has a unique geographical location, close to New York Harbor, the largest seaport in the United States. The New York Harbor has a vast hinterland, road, railway, inland waterway, and air transportation networks extend in all directions. In addition, the Allentown warehouse is near New York City: the largest city in the United States and the main consumer market and economic center. The warehouse location is also near the political center in Washington, D.C. It also covers 99% of the East Coast population. While there are many FBA warehouses around, Allentown is efficient and can reach 10,000+ orders per day and offers 2-day fulfillment and shipping."
          }
          para2={
            "The Allentown warehouse can provide e-commerce sellers with fulfillment services, support omni-channel integrations, FBA prep and transfer, Amazon SFP shipping services, and can provide customized services according to sellers’ needs."
          }
          area={"112,000"}
          order={"10,000"}
        />
        <Tracy
          heading={"Allentown Warehouse Services"}
          image={"/images/tracy.webp"}
          para1={"112,000 sq ft"}
          para2={"10,000"}
        />
        <WareBox />
        <WareBusiness />
        <WareRed />
      </div>
      <GlobalContact />
    </>
  );
};

export default PAW;
