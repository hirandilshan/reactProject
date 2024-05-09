import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import "./search.css";
import "./../foodMenu/foodItems/food.css";


export default function Search(foods ) {
  

  

    const [userName, setUserName] = useState("");



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
  }
    
  return (
    <div>
      <div className="choice">
        
          <div className="foods">
            {foods.map((food) => {
              return (
                <>
                  <div className="food-item">
                    <img src={food.img} alt="Food 1" />
                    <h3> {food.item}</h3>
                    <h4>Rs.{food.price}</h4>
                    <button onClick={() => sendData(food._id)}>Add to Cart</button>
                    
                  </div>
                </>
              );
            })}
          </div>
        </div>
    </div>
  )
}
