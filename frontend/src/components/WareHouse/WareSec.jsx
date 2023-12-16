import React from "react";
import "./warehouse.css";

const WareSec = ({ heading, para1, para2, area, order }) => {
  return (
    <>
      {" "}
      <section class="warehouse-second">
        <div class="warehouse-second-container">
          <div class="warehouse-second-left">
            <div class="warehouse-second-heading">
              <h2>{heading}</h2>
            </div>
            <div class="warehouse-second-para">
              <p>{para1}</p>
              <p>{para2}</p>
            </div>
            <div class="warehouse-second-boxes">
              <div class="warehouser-box">
                <p class="warehouser-box-para-1">{area}sq ft</p>
                <p class="warehouser-box-para-2">Warehouse Area</p>
              </div>
              <div class="warehouser-box">
                <p class="warehouser-box-para-1">{order}+</p>
                <p class="warehouser-box-para-2">Daily Orders</p>
              </div>
            </div>
          </div>
          <div class="warehouse-second-right">
            <div class="warehouse-video">
              <video src="/images/Prepshipper.mp4" controls></video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WareSec;
