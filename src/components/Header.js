import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header>
        <div class="header">
          <div class="headerbar">
            <div class="account">
              <ul>
                <li>
                  <Link to="/foodMenu">Order Now</Link>
                </li>
                <li>
                  <Link to="././backend/user/goToCart">
                    <i class="material-icons">&#xe8cc;</i>
                  </Link>
                </li>

                <Link to="#">
                  <li>
                    <i class="material-icons" id="search-icon1">
                      &#xe8b6;
                    </i>
                  </li>
                </Link>
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
                <Link to="/foodMenu">
                  <li>Food Menu</li>
                </Link>
                <Link to="/serviceTypes">
                  <li>Service Types</li>
                </Link>
                <Link to="/gallery">
                  <li>Gallery</li>
                </Link>
                <Link to="/facilities">
                  <li>Facilities</li>
                </Link>
                <Link to="/offers">
                  <li>Offers</li>
                </Link>
                <Link to="/about">
                  <li>About</li>
                </Link>
                <Link to="/reservation">
                  <li>Reservation</li>
                </Link>
              </ul>
            </div>
          </div>

          <div class="logo">
            <Link to="/index">
              <img src="./images/eatout logo.jpg" alt="" width="50"></img>
            </Link>
          </div>
          <div class="nav">
            <ul>
              <Link to="/foodMenu">
                <li>Food Menu</li>
              </Link>
              <Link to="/serviceTypes">
                <li>Service Types</li>
              </Link>
              <Link to="/gallery">
                <li>Gallery</li>
              </Link>
              <Link to="/facilities">
                <li>Facilities</li>
              </Link>
              <Link to="/offers">
                <li>Offers</li>
              </Link>
              <Link to="/about">
                  <li>About</li>
                </Link>
              <Link to="/reservation">
                <li>Reservation</li>
              </Link>
            </ul>
          </div>
          <div class="bar">
            <ul>
              <Link to="#">
                <li>
                  <i class="material-icons" id="navbar-icon">
                    &#xe5d2;
                  </i>
                </li>
              </Link>
              <Link to="">
                <li>
                  <i class="material-icons" id="cancel">
                    &#xe5c9;
                  </i>
                </li>
              </Link>
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
                <Link to="/foodMenu">Order Now</Link>
              </li>
              <li>
                <Link to="././backend/user/goToCart">
                  <i class="material-icons">&#xe8cc;</i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
