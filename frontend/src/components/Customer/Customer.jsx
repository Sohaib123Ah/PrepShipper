import React from "react";
import "./customer.css";

const Customer = () => {
  return (
    <>
      <section class="banner">
        <div class="banner-img">
          <img src="/images/product-categories.jpg" alt="" />
        </div>
      </section>
      <section class="product-categories">
        <div class="product-categories-container">
          <div class="product-categories-item">
            <div class="product-categories-item-left">
              <button>Household Items</button>
            </div>
            <div class="product-categories-item-right">
              <p>
                Small Appliances, Sofa, Table, Chairs, Trash Can, Electric Oven,
                Electric Coffee Pot, Soymilk Machine, Juicer, Water Dispenser,
                Smart Sweeper, etc.
              </p>
            </div>
          </div>
          <div class="product-categories-item">
            <div class="product-categories-item-left">
              <button>Shoes and Bags</button>
            </div>
            <div class="product-categories-item-right">
              <p>
                Suitcase, Trolley Case, Outdoor Function Bag, School Backpacks,
                Canvas Bag, Shoes, Clothing Luggage, Lock Pulley, etc.
              </p>
            </div>
          </div>
          <div class="product-categories-item">
            <div class="product-categories-item-left">
              <button>Outdoor & Gardening</button>
            </div>
            <div class="product-categories-item-right">
              <p>
                Cart, Shovel, Weeding Equipment, Irrigation Equipment, Gardening
                Lighting Accessories, Sprayer, Garden Scissors, Coffee Table,
                Wood Cutter, Leaf Shredder, etc.
              </p>
            </div>
          </div>
          <div class="product-categories-item">
            <div class="product-categories-item-left">
              <button>Fitness Equipment</button>
            </div>
            <div class="product-categories-item-right">
              <p>
                Treadmill, Exercise Bike, Dumbbell, Crank Barbell, Spring
                Tensioner, Fitness Disc Grip, Fitness Chair, Fitness Abdominal
                Body Waist Machine, etc.
              </p>
            </div>
          </div>
          <div class="product-categories-item">
            <div class="product-categories-item-left">
              <button>Other Categories</button>
            </div>
            <div class="product-categories-item-right">
              <p>
                Pet Supplies, Lighting Appliances, Sports & Outdoor Equipment,
                Mother & Baby, Toys, Auto Parts, Tires, 3C Electronics, etc.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Customer;
