import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header>
        <link rel="shortcut icon" href="../../images/eatout logo.jpg" type="images/x-icon"/>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>EAT OUT Restaurant</title>
        <meta name="viewport" content="width=device-width,initial-scal=1.0"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <div className="header">
          <div className="headerbar">
            <div className="account">
              <ul>
                <li>
                  <Link to="/foodMenu">Order Now</Link>
                </li>
                <li>
                  <Link to="././backend/user/goToCart">
                    <i className="material-icons">&#xe8cc;</i>
                  </Link>
                </li>

                <Link to="#">
                  <li>
                    <i className="material-icons" id="search-icon1">
                      &#xe8b6;
                    </i>
                  </li>
                </Link>
                <div className="search" id="searchinput1">
                  <form method="POST" action="/searchP">
                    <input
                      type="search"
                      id="search-box"
                      name="Search-box"
                    ></input>

                    <button className="search_btn" type="submit" id="searchBtn">
                      Search
                    </button>
                  </form>
                </div>
              </ul>
            </div>
            <div className="nav">
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

          <div className="logo">
            <Link to="/index">
              <img src="./images/eatout logo.jpg" alt="" width="50"></img>
            </Link>
          </div>
          <div className="nav">
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
          <div className="bar">
            <ul>
              <Link to="#">
                <li>
                  <i className="material-icons" id="navbar-icon">
                    &#xe5d2;
                  </i>
                </li>
              </Link>
              <Link to="">
                <li>
                  <i className="material-icons" id="cancel">
                    &#xe5c9;
                  </i>
                </li>
              </Link>
            </ul>
          </div>
          <form method="POST" action="/searchP">
            <div className="search-input">
              <div>
                <input type="search" id="search-box" name="Search-box"></input>
              </div>
              <button className="search_btn" type="submit" id="searchBtn">
                Search
              </button>
            </div>
          </form>

          <div className="icon">
            <ul>
              <li>
                <Link to="/foodMenu">Order Now</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="././backend/user/goToCart">
                  <i className="material-icons">&#xe8cc;</i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
