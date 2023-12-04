import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import "./food.css";
import { Link } from "react-router-dom";

export default function Burgers() {
  return (
    <div>
      <Header />
      <div class="menu">
        <div class="list">
          <Link to="/menu">Back to Menu</Link>

          <div class="section2">
            <img src="../../../img/buger.jpeg" alt="option1" />
            <Link to="/burgers">Burgers</Link>
          </div>
          <div class="section2">
            <img src="../../../img/nuggets.jpeg" alt="option2" />
            <Link to="/nuggets">Nuggets</Link>
          </div>
          <div class="section2">
            <img src="../../../img/salads.jpeg" alt="option3" />
            <Link to="/salads">Salads</Link>
          </div>
          <div class="section2">
            <img src="../../../img/fries.jpeg" alt="option4" />
            <Link to="/fries">Fries</Link>
          </div>
          <div class="section2">
            <img src="../../../img/muffin.jpeg" alt="option5" />
            <Link to="/muffins">Muffins</Link>
          </div>
          <div class="section2">
            <img src="../../../img/biskcuit.jpeg" alt="option6" />
            <Link to="/biscutes">Biscuits</Link>
          </div>
          <div class="section2">
            <img src="../../../img/ices.jpeg" alt="option7" />
            <Link to="/ice">Frosty</Link>
          </div>
          <div class="section2">
            <img src="../../../img/bev.jpeg" alt="option8" />
            <Link to="/beverage">Drinks</Link>
          </div>
          <div class="section2">
            <img src="../../../img/coffee.jpeg" alt="option9" />
            <Link to="/coffee">Coffee</Link>
          </div>

          <div class="section2">
            <img src="../../../img/pizza.jpeg" alt="option10" />
            <Link to="/pizza">Pizza</Link>
          </div>
          <div class="section2">
            <img src="../../img/sides.jpeg" alt="option11" />
            <Link to="/sides">Sides</Link>
          </div>
          <div class="section2">
            <img src="../../img/mealDeals.jpeg" alt="option12" />
            <Link to="/deals">Deals</Link>
          </div>
        </div>

        <div class="choice">
          <p>Burgers</p>
          <div class="foods">
            <div class="food-item">
              <img src="$img" alt="Food 1" />
              <h3> $item</h3>
              <h4>Rs $price</h4>
              <form method="POST" action="../../backend/user/cartP">
                <input type="hidden" name="foodId" value="$foodId" />
                <input type="hidden" name="item" value="$item" />
                <input type="hidden" name="price" value="$price" />
                <button type="submit" name="addToCart">
                  Add to Cart
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
