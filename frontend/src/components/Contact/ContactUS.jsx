import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa";

const ContactUS = () => {
  return (
    <>
      <div className="container">
        <section class="contact-us-banner">
          <h2>Contact Us</h2>
          <button>Phone: (833) 830-3800</button>
        </section>
        <section class="contact-us-form">
          <form class="contact-form">
            <div>
              <label for="first-name">First Name</label>
              <input
                id="first-name"
                required
                type="text"
                placeholder="First Name"
              />
            </div>
            <div>
              <label for="last-name">Last Name</label>
              <input
                id="last-name"
                required
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label for="email">Email</label>
              <input
                id="email"
                required
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div>
              <label for="phone-number">Phone Number</label>
              <input
                id="phone-number"
                required
                type="number"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <label for="company-name">Company Name</label>
              <input
                id="company-name"
                type="text"
                placeholder="Company Name (Optional)"
              />
            </div>
            <div>
              <label for="message">Message</label>
              <textarea
                id="message"
                cols="30"
                rows="2"
                required
                placeholder="Tell us about your 3PL fulfillment needs!"
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
        <div class="contact-us-box">
          <MdEmail />
          <h2>Contact Us Directly!!</h2>
          <p>info@PrepShipper.com</p>
        </div>
        <section class="contact-us-boxes">
          <div class="contact-us-boxes-container">
            <div class="contact-us-boxes-container-item">
              <FaWarehouse />
              <h2>CA Warehouse</h2>
              <p>Tracy, CA 95376</p>
              <p>Dispatch:</p>
              <p>888-566-8826</p>
              <p>dispatch@PrepShipper.com</p>
            </div>
            <div class="contact-us-boxes-container-item">
              <FaWarehouse />
              <h2>IL Warehouse</h2>
              <p>Bolingbrook, IL 60440</p>
              <p>Dispatch:</p>
              <p>888-566-8826</p>
              <p>dispatch@PrepShipper.com</p>
            </div>
            <div class="contact-us-boxes-container-item">
              <FaWarehouse />
              <h2>MS Warehouse</h2>
              <p>Southaven, MS 38671</p>
              <p>Dispatch:</p>
              <p>888-566-8826</p>
              <p>dispatch@PrepShipper.com</p>
            </div>
            <div class="contact-us-boxes-container-item">
              <FaWarehouse />
              <h2>PA Warehouse</h2>
              <p>Allentown, PA 18106</p>
              <p>Dispatch:</p>
              <p>888-566-8826</p>
              <p>dispatch@PrepShipper.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUS;
