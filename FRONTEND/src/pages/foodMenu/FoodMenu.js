import React from "react";
import "./foodMenu.css";
import { Link } from "react-router-dom";

export default function FoodMenu() {
  return (
    <div>
        <body>
      
      <div className="foodTypes">
        <div className="intro">
          <div className="intro-image">
            <img src="../../img/menu.jpg" alt="menu" />
            <h1>Our Menu</h1>
          </div>
        </div>

        <div className="menu">
          <div className="section">
            <h2>Burgers</h2>
            <Link to="/burgers">
              <img src="../../img/buger.jpeg" alt="Burger" />
            </Link>
          </div>

          <div className="section">
            <h2>Nuggets</h2>
            <Link to="/nuggets">
              <img src="../../img/nugget.jpeg" alt="Nuggets" />
            </Link>
          </div>

          <div className="section">
            <h2>Salads</h2>
            <Link to="/salads">
              <img src="../../img/salads.jpeg" alt="Salads" />
            </Link>
          </div>
          <div className="section">
            <h2>Fries</h2>
            <Link to="/fries">
              <img src="../../img/fries.jpeg" alt="Fries" />
            </Link>
          </div>
          <div className="section">
            <h2>Muffins</h2>
            <Link to="/muffins">
              <img src="../../img/muffin.jpeg" alt="Muffins" />
            </Link>
          </div>
          <div className="section">
            <h2>Biscuits</h2>
            <Link to="/biscutes">
              <img src="../../img/biskcuit.jpeg" alt="Biscuits" />
            </Link>
          </div>
          <div className="section">
            <h2>Frosty</h2>
            <Link to="/ice">
              <img src="../../img/ices.jpeg" alt="Ice creams" />
            </Link>
          </div>
          <div className="section">
            <h2>Drinks</h2>
            <Link to="/beverage">
              <img src="../../img/bev.jpeg" alt="Beverages" />
            </Link>
          </div>
          <div className="section">
            <h2>Coffee</h2>
            <Link to="/coffee">
              <img src="../../img/coffee1.jpeg" alt="Coffee" />
            </Link>
          </div>
          <div className="section">
            <h2>Pizza</h2>
            <Link to="/pizza">
              <img src="../../img/pizza.jpeg" alt="Pizza" />
            </Link>
          </div>
          <div className="section">
            <h2>Sides & more</h2>
            <Link to="/sides">
              <img src="../../img/sides.jpeg" alt="Sides & more" />
            </Link>
          </div>
          <div className="section">
            <h2>Meal Deals</h2>
            <Link to="/deals">
              <img src="../../img/mealDeals.jpeg" alt="Meal Deals" />
            </Link>
          </div>
        </div>
      </div>

      
      </body>
    </div>
  );
}
