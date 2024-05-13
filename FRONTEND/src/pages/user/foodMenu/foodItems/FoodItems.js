import React from "react";
import "./food.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Biscuits() {
  const location = useLocation();
  const submitedFoodType = location.state?.submitedFoodType;

  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .get("https://reactproject-6y6b.onrender.com/user/token")
      .then((result) => {
        if (result.data.message === "Success") {
        } else {
          setUserName(null);
        }
      });
  }, []);

  useEffect(() => {
    console.log("searchName received:", submitedFoodType);
    if (submitedFoodType) {
    } else {
      navigate("/foodMenu");
    }
  }, [submitedFoodType, navigate]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      try {
        const decoded = jwtDecode(token); // Decoding the JWT
        console.log(decoded); // Debug: Log the decoded token to verify its contents
        if (decoded.email) {
          // Check if the decoded token has an email field
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

  const handleNavigate = (foodType) => {
    navigate(`/foodItems`, { state: { submitedFoodType: foodType } });
  };

  function sendData(foodId) {
    if (userName) {
      const foodItem = foods.find((foods) => foods._id === foodId);
      const num = 1;
      const newItem = {
        item: foodItem.item,
        price: foodItem.price,
        numOfItems: num,
        userName: userName,
      };

      axios
        .post("https://reactproject-6y6b.onrender.com/cart/add", newItem)
        .then(() => {
          alert("Added to the cart");
        })
        .catch((err) => {
          alert("Failed to add to cart: " + err.message);
        });
    } else {
      alert("Please Login");
      navigate("/login");
    }
  }

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get("https://reactproject-6y6b.onrender.com/foods/getFoods")
      .then((response) => {
        const filteredFoods = response.data.filter(
          (foods) => foods.foodType === submitedFoodType
        );
        setFoods(filteredFoods);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [submitedFoodType]);

  return (
    <div>
      <div className="item-menu">
        <div className="list">
          <div className="section2">
            <Link to="/foodMenu">Back to Menu</Link>
          </div>

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
            <div className="section2" key={index}>
              <img src={item.imgSrc} alt={item.label} />
              <button onClick={() => handleNavigate(item.type)}>
                {item.label}
              </button>
            </div>
          ))}
        </div>

        <div className="choice">
          <p>{submitedFoodType}</p>
          <div className="foods">
            {foods.map((foods) => {
              return (
                <>
                  <div className="food-item">
                    <img src={foods.img} alt="Food 1" />
                    <h3> {foods.item}</h3>
                    <h4>Rs.{foods.price}</h4>
                    <button onClick={() => sendData(foods._id)}>
                      Add to Cart
                    </button>
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
