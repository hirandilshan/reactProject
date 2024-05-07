import React from "react";
import "./cart.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FoodCart() {
    function removeItem(items) {
        const newItem = {
            foodItem: items.item,
            price: items.price,
            numOfItems: items.numOfItems
        };
      
        axios.post(`http://localhost:8070/cart/remove/${items._id}`, newItem)
          .then(() => {
            alert("remove from the cart");
            
          })
          .catch((err) => {
            alert("Failed to remove from cart: " + err.message);
          });
    }

    function increse(items) {
        const newItem = {
          foodItem: items.item,
          price: items.price,
          numOfItems: items.numOfItems
        };
      
        axios.post(`http://localhost:8070/cart/increse/${items._id}`, newItem)
          .then(() => {
          })
          .catch((err) => {
            alert("Failed to remove from cart: " + err.message);
          });
    }

    function decrese(items) {
        const newItem = {
          foodItem: items.item,
          price: items.price,
          numOfItems: items.numOfItems
        };
      
        axios.post(`http://localhost:8070/cart/decrese/${items._id}`, newItem)
          .then(() => {
          })
          .catch((err) => {
            alert("Failed to remove from cart: " + err.message);
          });
    }

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/cart/getItems")
      .then((response) => {
        const filteredItems = response.data.filter(
          (items) => items.userName === "Biscutes"
        );
        setItems(filteredItems);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div class="content">
        <div class="cart-container">
          <table>
            <tr>
              <th>Food ID</th>
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
                    <td>{items._id}</td>
                    <td>{items.item}</td>
                    <td>Rs.{items.price}</td>
                    <td>
                      <button onClick={() => decrese(items)} name="minus">(-)</button>
                    </td>
                    <td>{items.numOfItems}</td>
                    <td>
                      <button onClick={() => increse(items)} name="plus">(+)</button>
                    </td>
                    <td>
                      <button onClick={() => removeItem(items)} name="remove">Remove</button>
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
