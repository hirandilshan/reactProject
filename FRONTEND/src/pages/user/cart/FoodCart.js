import React from "react";
import "./cart.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';

export default function FoodCart() {
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

      
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/cart/getItems")
      .then((response) => {
        const filteredItems = response.data.filter(
          (items) => items.userName === userName
        );
        setItems(filteredItems);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userName]);


    function removeItem(itemId) {
      const cartItems = items.find(items => items._id === itemId);
        const newItem = {
            item: cartItems.item,
            price: cartItems.price,
            numOfItems: cartItems.numOfItems,
            userName: userName
        };
      
        axios.delete(`http://localhost:8070/cart/remove/${cartItems._id}`)
          .then(() => {
            alert("remove from the cart");
            setItems(currentItems => currentItems.filter(item => item._id !== itemId));
            
          })
          .catch((err) => {
            alert("Failed to remove from cart: " + err.message);
          });
    }

    function increse(itemId) {
      const cartItems = items.find(items => items._id === itemId);
      const newItem = {
          item: cartItems.item,
          price: cartItems.price,
          numOfItems: cartItems.numOfItems,
          userName: userName
      };
      
        axios.put(`http://localhost:8070/cart/increse/${cartItems._id}`, newItem)
          .then(() => {
            setItems(currentItems => currentItems.map(item => {
              if (item._id === itemId) {
                  return { ...item, numOfItems: item.numOfItems + 1 };
              }
              return item;
          }));
          })
          .catch((err) => {
            alert("Failed to remove from cart: " + err.message);
          });
    }

    function decrese(itemId) {
      const cartItems = items.find(items => items._id === itemId);
      const newItem = {
          item: cartItems.item,
          price: cartItems.price,
          numOfItems: cartItems.numOfItems,
          userName: userName
      };
      
        axios.put(`http://localhost:8070/cart/decrese/${cartItems._id}`, newItem)
          .then(() => {
            setItems(currentItems => currentItems.map(item => {
              if (item._id === itemId) {
                  return { ...item, numOfItems: item.numOfItems - 1 };
              }
              return item;
          }));
          })
          .catch((err) => {
            alert("Failed to remove from cart: " + err.message);
          });
    }

  return (
    <div>
      <div class="content">
        <div class="cart-container">
          <table>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>(-)</th>
              <th>Number of Items</th>
              <th>(+)</th>
              <th>Remove</th>
            </tr>
            
            {items.map((items) => {
              return (
                <>
                  <tr>
                    <td>{items.item}</td>
                    <td>Rs.{items.price}</td>
                    <td>
                      <button onClick={() => decrese(items._id)} name="minus">(-)</button>
                    </td>
                    <td>{items.numOfItems}</td>
                    <td>
                      <button onClick={() => increse(items._id)} name="plus">(+)</button>
                    </td>
                    <td>
                      <button onClick={() => removeItem(items._id)} name="remove">Remove</button>
                    </td>
                  </tr>
                </>
              );
            })}
          </table>
          <h2>Your Cart</h2>
          <div class="cart-items"></div>
          <div class="total">
            <h3>Total:</h3>
            <p id="cart-total">$total</p>
          </div>
          <button id="checkout-btn" disabled>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
