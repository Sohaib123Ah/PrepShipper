import React from "react";
import "./contact.css"

const GlobalContact = () => {
  return (
    <>
      {" "}
      <section class="global-contact">
        <div class="global-contact-container">
          <div class="global-contact-right">
            <form class="global-contact-form">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default GlobalContact;
