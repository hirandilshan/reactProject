import React from "react";
import "./food.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export default function Biscuits() {

  const [userName, setUserName] = useState("");
  const navigate = useNavigate();


    useEffect(() => {
        
        const token = localStorage.getItem('token');
        console.log(token)
        if (token) {
            try {
                const decoded = jwtDecode(token); // Decoding the JWT
                console.log(decoded); // Debug: Log the decoded token to verify its contents
                if (decoded.email) { // Check if the decoded token has an email field
                    setUserName(decoded.email); // Set userName to the email from the token
                } else {
                    console.error("JWT does not contain email:");
                }
            } catch (error) {
                console.error("JWT decoding error:", error);
            }
        } else {
            console.log("No token found in localStorage");
        }
      }, []);


  function sendData(foodId) {
    if(userName){
    const foodItem = foods.find(foods => foods._id === foodId);
    const num=1;
    const newItem = {
          item: foodItem.item,
          price: foodItem.price,
          numOfItems: num,
          userName: userName
    };
  
    axios.post("http://localhost:8070/cart/add", newItem)
      .then(() => {
        alert("Added to the cart");
        
      })
      .catch((err) => {
        alert("Failed to add to cart: " + err.message);
      });
  }else{
    alert("Please Login")
    navigate('/login');
  }
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
                    <button onClick={() => sendData(foods._id)}>Add to Cart</button>
                    
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
