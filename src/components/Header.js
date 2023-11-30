import React from "react";
import "./style.css";

export default function Header() {
  return (
    <div>
      <header>
        <div class="header">
          <div class="headerbar">
            <div class="account">
              <ul>
                <li>
                  <a href="/foodMenu">Order Now</a>
                </li>
                <li>
                  <a href="././backend/user/goToCart">
                    <i class="material-icons">&#xe8cc;</i>
                  </a>
                </li>

                <a href="#">
                  <li>
                    <i class="material-icons" id="search-icon1">
                      &#xe8b6;
                    </i>
                  </li>
                </a>
                <div class="search" id="searchinput1">
                  <form method="POST" action="/searchP">
                    <input
                      type="search"
                      id="search-box"
                      name="Search-box"
                    ></input>

                    <button class="search_btn" type="submit" id="searchBtn">
                      Search
                    </button>
                  </form>
                </div>
              </ul>
            </div>
            <div class="nav">
              <ul>
                <a href="/foodMenu">
                  <li>Food Menu</li>
                </a>
                <a href="/serviceTypes">
                  <li>Service Types</li>
                </a>
                <a href="/galary">
                  <li>Galary</li>
                </a>
                <a href="/facilities">
                  <li>Facilities</li>
                </a>
                <a href="/offers">
                  <li>Offers</li>
                </a>
                <a href="/about">
                  <li>About</li>
                </a>
                <a href="/reservation">
                  <li>Reservation</li>
                </a>
              </ul>
            </div>
          </div>

          <div class="logo">
            <a href="/index">
              <img src="./images/eatout logo.jpg" alt="" width="50"></img>
            </a>
          </div>
          <div class="nav">
            <ul>
              <a href="/foodMenu">
                <li>Food Menu</li>
              </a>
              <a href="/serviceTypes">
                <li>Service Types</li>
              </a>
              <a href="/galary">
                <li>Galary</li>
              </a>
              <a href="/facilities">
                <li>Facilities</li>
              </a>
              <a href="/offers">
                <li>Offers</li>
              </a>
              <a href="/About">
                <li>About</li>
              </a>
              <a href="/reservation">
                <li>Reservation</li>
              </a>
            </ul>
          </div>
          <div class="bar">
            <ul>
              <a href="#">
                <li>
                  <i class="material-icons" id="navbar-icon">
                    &#xe5d2;
                  </i>
                </li>
              </a>
              <a href="">
                <li>
                  <i class="material-icons" id="cancel">
                    &#xe5c9;
                  </i>
                </li>
              </a>
            </ul>
          </div>
          <form method="POST" action="/searchP">
            <div class="search-input">
              <div>
                <input type="search" id="search-box" name="Search-box"></input>
              </div>
              <button class="search_btn" type="submit" id="searchBtn">
                Search
              </button>
            </div>
          </form>

          <div class="icon">
            <ul>
              <li>
                <a href="/foodMenu">Order Now</a>
              </li>
              <li>
                <a href="././backend/user/goToCart">
                  <i class="material-icons">&#xe8cc;</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
