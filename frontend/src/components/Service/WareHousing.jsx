import React from "react";
import "./service.css";
import { Link } from "react-router-dom";
import {
  FaWarehouse,
  FaHandHoldingUsd,
  FaTruck,
  FaDollarSign,
  FaAngleDoubleDown,
} from "react-icons/fa";

const WareHousing = () => {
  return (
    <>
      <section class="services">
        <div class="services-container">
          <div class="services-left">
            <div class="services-left-btns">
              <button style={{ background: "#edf6fc" }}>
                <Link to="/warehousing-fulfillment">Warehousing</Link>
              </button>
              <button>
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
              heading={"1. PrepShipper Warehousing and Distribution"}
              para1={
                "PrepShipper is a fulfillment service provider with 8 years of experience in e-commerce fulfillment and warehouse operations. At present, we have over 500,000 square feet of warehouse capacity throughout the United States. The warehouses are operated by experienced PrepShipper employees and equipped with an adaptable warehouse management system. Additionally, the key areas in the warehouses are monitored with video surveillance, equipped with high-tech security systems at all exits and docks, and our warehouse personnel are certified in safety protocols."
              }
              para2={
                "PrepShipper provides a variety of services such as FBA and FBM fulfillment, B2B and B2C, warehouse storage, and omnichannel integration. PrepShipper has developed partnerships with UPS, FedEx, and other carriers to offer a seamless fulfillment experience."
              }
              image={"/images/S1.webp"}
            />
            <S2
              heading={"2. Warehousing and Distribution Advantages"}
              b1={"Smart Storage"}
              b2={"Flat-fee Warehousing"}
              b3={"2-Day Delivery"}
              b4={"Efficient Freight Rates"}
              p1={
                "PrepShipper has a selective system that automates the organization of bins, shelves, or pallets according to the size of SKU or unit quantity."
              }
              p2={
                "Storage fees are calculated as a flat rate across all our warehouses. The storage rate is dependent upon the order volume shipped out of our warehouse."
              }
              p3={
                "Inventory that is diversified across all PrepShipper warehouses can achieve 2-day delivery to 90% of the US population."
              }
              p4={
                "Customers can take advantage of our negotiated low-cost freight rates if they utilize the PrepShipper carrier partners."
              }
            />
            <div class="services-right-3">
              <div class="services-right-3-heading">
                <h2 class="services-page-heading">
                  3. Warehousing and Distribution Process
                </h2>
              </div>
              <div class="services-right-3-img">
                <img src="/images/Warehouse-SOP.png" alt="" />
              </div>
            </div>
            <S4
              heading={"4. Warehousing and Distribution Pricing"}
              para={
                "Our standard charging items include storage fee, warehouse rent, order operation fee, transportation fee, etc. The specific quotation table will be customized as per your business needs. The cost of items and cost standards are simple and transparent. You are welcome to contact PrepShipper for a quote consultation."
              }
              s1={"Storage Fee"}
              s2={"Inbound Receiving"}
              s3={"Pick and Pack"}
              s4={"Special Projects"}
              c1={"$0.60/cubic foot"}
              c2={"$3/carton"}
              c3={"$17/pallet"}
              c4={"$420/40′ container"}
              c5={"$500/40′ HQ container"}
              c6={"Low to $1.5/package, based on billable weight."}
              c7={"$0.60/additional pick"}
              c8={"$0.70/label"}
              c9={"$5/unit for kitting/bundling"}
              c10={"$24/pallet + $7 per SKU on the pallet"}
              show1={true}
              show2={true}
              show3={true}
              show4={true}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WareHousing;

export function S1({ heading, image, para1, para2 }) {
  return (
    <>
      <div class="services-right-1">
        <div class="services-right-1-heading">
          <h2 class="services-page-heading">{heading}</h2>
        </div>
        <div class="services-right-1-container">
          <div class="services-right-1-left">
            <div class="services-right-1-left-para">
              <p>{para1}</p>
              <p>{para2}</p>
            </div>
          </div>
          <div class="services-right-1-right">
            <div class="services-right-1-right-img">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function S2({ heading, b1, b2, b3, b4, p1, p2, p3, p4 }) {
  return (
    <>
      <div class="services-right-2">
        <div class="services-right-2-heading">
          <h2 class="services-page-heading">{heading}</h2>
        </div>
        <div class="services-right-2-container">
          <div class="services-right-2-box">
            <div class="services-right-2-box-icon-text">
              <div class="services-icon">
                <FaWarehouse />
              </div>
              <h3>{b1}</h3>
            </div>
            <div class="services-right-2-box-para">
              <p>{p1}</p>
            </div>
          </div>
          <div class="services-right-2-box">
            <div class="services-right-2-box-icon-text">
              <div class="services-icon">
                <FaHandHoldingUsd />
              </div>
              <h3>{b2}</h3>
            </div>
            <div class="services-right-2-box-para">
              <p>{p2}</p>
            </div>
          </div>
          <div class="services-right-2-box">
            <div class="services-right-2-box-icon-text">
              <div class="services-icon">
                <FaTruck />
              </div>
              <h3>{b3}</h3>
            </div>
            <div class="services-right-2-box-para">
              <p>{p3}</p>
            </div>
          </div>
          <div class="services-right-2-box">
            <div class="services-right-2-box-icon-text">
              <div class="services-icon">
                <FaDollarSign />
              </div>
              <h3>{b4}</h3>
            </div>
            <div class="services-right-2-box-para">
              <p>{p4}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function S3({ heading, p1, p2, p3, p4, p5, p6, image }) {
  return (
    <>
      {" "}
      <div class="services-right-3">
        <div class="services-right-3-heading">
          <h2 class="services-page-heading">{heading}</h2>
        </div>
        <div class="services-right-3-container">
          <div class="services-right-3-left">
            <ul>
              <li>
                <div class="outer-div">
                  <div class="sercices-icon">
                    <FaAngleDoubleDown />
                  </div>
                  <span>{p1}</span>
                </div>
              </li>
              <li>
                <div class="outer-div">
                  <div class="sercices-icon">
                    <FaAngleDoubleDown />
                  </div>
                  <span>{p2}</span>
                </div>
              </li>
              <li>
                <div class="outer-div">
                  <div class="sercices-icon">
                    <FaAngleDoubleDown />
                  </div>
                  <span>{p3}</span>
                </div>
              </li>
              <li>
                <div class="outer-div">
                  <div class="sercices-icon">
                    <FaAngleDoubleDown />
                  </div>
                  <span>{p4}</span>
                </div>
              </li>
              <li>
                <div class="outer-div">
                  <div class="sercices-icon">
                    <FaAngleDoubleDown />
                  </div>
                  <span>{p5}</span>
                </div>
              </li>
              <li>
                <div class="outer-div">
                  <div class="sercices-icon">
                    <FaAngleDoubleDown />
                  </div>
                  <span>{p6}</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="services-right-3-right">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export function S4({
  heading,
  para,
  s1,
  s2,
  s3,
  s4,
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  c10,
  show1,
  show2,
  show3,
  show4,
}) {
  return (
    <>
      <div class="services-right-4">
        <div class="services-right-4-heading">
          <h2 class="services-page-heading">{heading}</h2>
        </div>
        <div class="services-right-4-para">
          <p>{para}</p>
        </div>
      </div>
      <div class="table">
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {show1 ? (
              <tr>
                <td>{s1}</td>
                <td>{c1}</td>
              </tr>
            ) : null}
            {show2 ? (
              <tr>
                <td>{s2}</td>
                <td>
                  <li>{c2}</li>
                  <li>{c3}</li>
                  <li>{c4}</li>
                  <li>{c5}</li>
                </td>
              </tr>
            ) : null}
            {show3 ? (
              <tr>
                <td>{s3}</td>
                <td>
                  <li>{c6}</li>
                  <li>{c7}</li>
                </td>
              </tr>
            ) : null}
            {show4 ? (
              <tr>
                <td>{s4}</td>
                <td>
                  <li>{c8}</li>
                  <li>{c9}</li>
                  <li>{c10}</li>
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </>
  );
}
