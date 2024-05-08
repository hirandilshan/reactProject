import React, { useEffect, useState } from 'react';
import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import { Link } from "react-router-dom";
import './index.css';






export default function Index() {
    const [review, setReview] = useState("");
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
      


    

    const sendData = (e) => {
        e.preventDefault();
        
        if (!review) {
            alert("Missing review");
            return;
        }
        
            const newReview = { userName, review };

        axios.post("http://localhost:8070/review/addReview", newReview)
            .then(() => {
                alert("Review submitted");
                setReview(""); // Clear the review state
            })
            .catch(error => {
                console.error("Error submitting review:", error);
                alert("Failed to submit review: " + error.message);
            });
        
    };

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:8070/review/display")
        .then((response) => {
            setReviews(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

  return (
    
        
      
      <div className="home">
        <div className="main_slide">
            <div>

                
                <h1>Enjoy <span>Delicious Food</span> is Your Healthy Life.</h1>
                <p>EAT OUT Restaurant has been a local favorite for more than a decade, situated near the coastal lines of the western province of Sri Lanka. Savannah is known for its authentic Sri Lankan food, exotic Indian and Chinese cuisine and a blend of western and continental dishes.</p>
                <Link to="/foodMenu">
                    <button type="submit" className="red_btn">Visit Now</button>
                </Link>
            </div>
            <div>
                <img src="images/burger.jpg" alt="burger"></img>
            </div>
        </div>
        <div className="food-items">
            <div className="item">
                <div>
                    <img src="images/burger.jpg" alt="food item"></img>
                </div>
                <h3>Burger</h3>
                <p>chicken burgur with spicy chicken and potato chips </p>
                <Link to="/foodMenu">
                    <button type="submit" className="red_btn">See Menu</button>
                </Link>
            </div>
            <div className="item">
                <div>
                    <img src="images/cheese-kottu.png" alt="food item"></img>
                </div>
                <h3>Cheese Koththu</h3>
                <p>Using curd instead of cheese, this kottu has a tart kick that's also fatty and milky in a way that works with spices at play</p>
                <Link to="/foodMenu">
                    <button type="submit" className="red_btn">See Menu</button>
                </Link>
            </div>
            <div className="item">
                <div>
                    <img src="images/biriyani.jpg" alt="food item"></img>
                </div>
                <h3>Biriyani</h3>
                <p>Biryani, flavourful rice dish of Persian origin that has become a popular celebratory dish in South Asia</p>
                <Link to="/foodMenu">
                    <button type="submit" className="red_btn">See Menu</button>
                </Link>
            </div>
        </div>
        <div className="main_slide2">
            <div className="foodimg">
                <img src="images/chicken devel.jpg" alt=""></img>
            </div>
            <div className="question">
                <div>
                    <h2>Why people chose us?</h2>
                </div>
                <div>
                    <div className="q-ans">
                        <div>
                            <img src="images/fried fish.jpg" alt=""></img>
                        </div>
                        <div>
                            <h4>Choose your favorite</h4>
                            <p>Fresh, Locally Sourced Ingredients</p>
                        </div>
                    </div>
                    <div className="q-ans">
                        <div>
                            <img src="./img/fries.jpeg" alt=""></img>
                        </div>
                        <div>
                            <h4>Choose your favorite</h4>
                            <p>Attentive and Friendly Service </p>
                        </div>
                    </div>
                    <div className="q-ans">
                        <div>
                            <img src="./img/bev.jpeg" alt=""></img>
                        </div>
                        <div>
                            <h4>Choose your favorite food</h4>
                            <p>Food for valuve for money</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="main_slide3">
            <div className="fav-head">
                <h3>Our Popular Food Items</h3>
                <p></p>
            </div>
            <div className="fav-food">
                <div className="item">
                    <div>
                        <img src="images/cheese-kottu.png" alt=""></img>
                    </div>
                    <h3>Cheese Koththu</h3>
                    <p>Using curd instead of cheese, this kottu has a tart kick that's also fatty and milky in a way that works with spices at play</p>
                    <p className="fav-price">Rs800</p>
                </div>
                <div className="item">
                    <div>
                        <img src="images/biriyani.jpg" alt=""></img>
                    </div>
                    <h3>Biriyani</h3>
                    <p>Biryani, flavourful rice dish of Persian origin that has become a popular celebratory dish in South Asia</p>
                    <p className="fav-price">Rs1200</p>
                </div>
                <div className="item">
                    <div>
                        <img src="images/chicken_fried_rice00032a-1200x1200-1.jpg" alt=""></img>
                    </div>
                    <h3>Chicken friedrice</h3>
                    <p>Devil chicken,chopsi and chilipate</p>
                    <p className="fav-price">Rs800</p>
                </div>
                <div className="item">
                    <div>
                        <img src="images/chicken dramstic.jpg" alt=""></img>
                    </div>
                    <h3>Chicken Dramstic</h3>
                    <p>10pcs of chicken dramstic bucket</p>
                    <p className="fav-price">Rs1800</p>
                </div>
            </div>
            <div className="dsgn"></div>
        </div>
        <div className="main_slide4">
            <div className="chef-feed">
                <h2>Customer <span style={{ color: 'red' }}>Feedback</span></h2>
                <p>I recently had the pleasure of dining at this amazing restaurant, and I must say it was an absolute delight. From the moment I walked in, the ambiance was welcoming and comforting. The decor was tasteful and set the perfect mood for a delightful meal</p>
                <div className="chef-detail">
                    <div>
                        <img src="images/download.jpeg" alt=""></img>
                    </div>
                    <div>
                        <h6>HD Creations</h6>
                        <p>Web Developer</p>
                    </div>
                </div>

            </div>
            <div className="chef">
                <img src="images/chef.jpg" alt="chef"></img>
            </div>
        </div>

        
  <p>Logged in user: {userName}</p>

        <div className="letter">
                <div className="letter-head">
                    <h2>Submit <span>Review</span></h2>
                </div>
                <form onSubmit={sendData}>
                    <div className="letter-input">
                        <div>
                            <input
                                type="text"
                                name="review"
                                placeholder="Rate Us"
                                value={review}
                                required
                                onChange={(e) => setReview(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="red_btn">Submit</button>
                    </div>
                </form>
            </div>
        
           
            {reviews.map((reviews) => {
              return (
                <>
                  <div class="reviews">
                    <p>Review: {reviews.review}<br/> user: {reviews.userName}<br/></p>
                  </div>
                </>
              );
            })}
            
        </div>
      
    
    
    
    
  )
}