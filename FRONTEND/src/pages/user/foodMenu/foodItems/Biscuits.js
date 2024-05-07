import React from "react";
import "./food.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Biscuits() {


  function sendData(foods) {
    const newItem = {
      foodItem: foods.item,
      foodPrice: foods.price
    };
  
    axios.post("http://localhost:8070/cart/add", newItem)
      .then(() => {
        alert("Added to the cart");
        
      })
      .catch((err) => {
        alert("Failed to add to cart: " + err.message);
      });
  }
  

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/foods/getFoods")
      .then((response) => {
        const filteredFoods = response.data.filter(
          (foods) => foods.foodType === "Biscutes"
        );
        setFoods(filteredFoods);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="item-menu">
        <div className="list">
          <Link to="/foodMenu">Back to Menu</Link>

          <div className="section2">
            <img src="../../../img/buger.jpeg" alt="option1" />
            <Link to="/burgers">Burgers</Link>
          </div>
          <div className="section2">
            <img src="../../../img/nuggets.jpeg" alt="option2" />
            <Link to="/nuggets">Nuggets</Link>
          </div>
          <div className="section2">
            <img src="../../../img/salads.jpeg" alt="option3" />
            <Link to="/salads">Salads</Link>
          </div>
          <div className="section2">
            <img src="../../../img/fries.jpeg" alt="option4" />
            <Link to="/fries">Fries</Link>
          </div>
          <div className="section2">
            <img src="../../../img/muffin.jpeg" alt="option5" />
            <Link to="/muffins">Muffins</Link>
          </div>
          <div className="section2">
            <img src="../../../img/biskcuit.jpeg" alt="option6" />
            <Link to="/biscuits">Biscuits</Link>
          </div>
          <div className="section2">
            <img src="../../../img/ices.jpeg" alt="option7" />
            <Link to="/ice">Frosty</Link>
          </div>
          <div className="section2">
            <img src="../../../img/bev.jpeg" alt="option8" />
            <Link to="/beverage">Drinks</Link>
          </div>
          <div className="section2">
            <img src="../../../img/coffee.jpeg" alt="option9" />
            <Link to="/coffee">Coffee</Link>
          </div>

          <div className="section2">
            <img src="../../../img/pizza.jpeg" alt="option10" />
            <Link to="/pizza">Pizza</Link>
          </div>
          <div className="section2">
            <img src="../../img/sides.jpeg" alt="option11" />
            <Link to="/sides">Sides</Link>
          </div>
          <div className="section2">
            <img src="../../img/mealDeals.jpeg" alt="option12" />
            <Link to="/deals">Deals</Link>
          </div>
        </div>

        <div className="choice">
          <p>Biscuits</p>
          <div className="foods">
            {foods.map((foods) => {
              return (
                <>
                  <div className="food-item">
                    <img src={foods.img} alt="Food 1" />
                    <h3> {foods.item}</h3>
                    <h4>Rs.{foods.price}</h4>
                    <button onClick={() => sendData(foods)}>Add to Cart</button>
                    
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
