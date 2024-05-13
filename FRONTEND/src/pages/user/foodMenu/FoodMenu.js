import React from "react";
import { useNavigate } from "react-router-dom";
import "./foodMenu.css";

export default function FoodMenu() {
  const navigate = useNavigate();

  // Function to handle navigation
  const handleNavigate = (foodType) => {
    navigate(`/foodItems`, { state: { submitedFoodType: foodType } });
  };

  return (
    <div className="foodTypes">
      <div className="foodMenu">
        <div className="intro">
          <div className="intro-image">
            <img src="../../img/menu.jpg" alt="Menu" />
            <h1>Our Menu</h1>
          </div>
        </div>

        <div className="menu">
          {[
            {
              type: "Burgers",
              label: "Burgers",
              imgSrc: "../../img/buger.jpeg",
            },
            {
              type: "Nuggets",
              label: "Nuggets",
              imgSrc: "../../img/nugget.jpeg",
            },
            {
              type: "Salads",
              label: "Salads",
              imgSrc: "../../img/salads.jpeg",
            },
            { type: "Fries", label: "Fries", imgSrc: "../../img/fries.jpeg" },
            {
              type: "Muffins",
              label: "Muffins",
              imgSrc: "../../img/muffin.jpeg",
            },
            {
              type: "Biscutes",
              label: "Biscuits",
              imgSrc: "../../img/biskcuit.jpeg",
            },
            { type: "Ice", label: "Frosty", imgSrc: "../../img/ices.jpeg" },
            {
              type: "Beverages",
              label: "Drinks",
              imgSrc: "../../img/bev.jpeg",
            },
            {
              type: "Coffee",
              label: "Coffee",
              imgSrc: "../../img/coffee1.jpeg",
            },
            { type: "Pizza", label: "Pizza", imgSrc: "../../img/pizza.jpeg" },
            {
              type: "Sides",
              label: "Sides & more",
              imgSrc: "../../img/sides.jpeg",
            },
            {
              type: "Deals",
              label: "Meal Deals",
              imgSrc: "../../img/mealDeals.jpeg",
            },
          ].map((item, index) => (
            <div className="section" key={index}>
              <h2>{item.label}</h2>
              <button
                onClick={() => handleNavigate(item.type)}
                className="image-button"
              >
                <img src={item.imgSrc} alt={item.label} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
