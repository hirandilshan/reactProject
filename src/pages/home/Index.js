import React from 'react'
import Header from '../../components/Header'
import './index.css'
import Footer from '../../components/Footer'

export default function Index() {
  return (
    <div>
        <Header/>
      <div>
      <div class="home">
        <div class="main_slide">
            <div>
                <h1>Enjoy <span>Delicious Food</span> is Your Healthy Life.</h1>
                <p>EAT OUT Restaurant has been a local favorite for more than a decade, situated near the coastal lines of the western province of Sri Lanka. Savannah is known for its authentic Sri Lankan food, exotic Indian and Chinese cuisine and a blend of western and continental dishes.</p>
                <form method='POST' action='./frontend/user/facilities'>
                    <button type="submit" class="red_btn">Visit Now</button>
                </form>
            </div>
            <div>
                <img src="images/burger.jpg" alt="burger"></img>
            </div>
        </div>
        <div class="food-items">
            <div class="item">
                <div>
                    <img src="images/burger.jpg" alt="food item"></img>
                </div>
                <h3>Burger</h3>
                <p>chicken burgur with spicy chicken and potato chips </p>
                <form method='POST' action='./frontend/user/foodMenu'>
                    <button type="submit" class="red_btn">See Menu</button>
                </form>
            </div>
            <div class="item">
                <div>
                    <img src="images/cheese-kottu.png" alt="food item"></img>
                </div>
                <h3>Cheese Koththu</h3>
                <p>Using curd instead of cheese, this kottu has a tart kick that's also fatty and milky in a way that works with spices at play</p>
                <form method='POST' action='./frontend/user/foodMenu'>
                    <button type="submit" class="red_btn">See Menu</button>
                </form>
            </div>
            <div class="item">
                <div>
                    <img src="images/biriyani.jpg" alt="food item"></img>
                </div>
                <h3>Biriyani</h3>
                <p>Biryani, flavourful rice dish of Persian origin that has become a popular celebratory dish in South Asia</p>
                <form method='POST' action='./frontend/user/foodMenu'>
                    <button type="submit" class="red_btn">See Menu</button>
                </form>
            </div>
        </div>
        <div class="main_slide2">
            <div class="foodimg">
                <img src="images/chicken devel.jpg" alt=""></img>
            </div>
            <div class="question">
                <div>
                    <h2>Why people chose us?</h2>
                </div>
                <div>
                    <div class="q-ans">
                        <div>
                            <img src="images/fried fish.jpg" alt=""></img>
                        </div>
                        <div>
                            <h4>Choose your favorite</h4>
                            <p>Fresh, Locally Sourced Ingredients</p>
                        </div>
                    </div>
                    <div class="q-ans">
                        <div>
                            <img src="./img/fries.jpeg" alt=""></img>
                        </div>
                        <div>
                            <h4>Choose your favorite</h4>
                            <p>Attentive and Friendly Service </p>
                        </div>
                    </div>
                    <div class="q-ans">
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
        <div class="main_slide3">
            <div class="fav-head">
                <h3>Our Popular Food Items</h3>
                <p></p>
            </div>
            <div class="fav-food">
                <div class="item">
                    <div>
                        <img src="images/cheese-kottu.png" alt=""></img>
                    </div>
                    <h3>Cheese Koththu</h3>
                    <p>Using curd instead of cheese, this kottu has a tart kick that's also fatty and milky in a way that works with spices at play</p>
                    <p class="fav-price">Rs800</p>
                </div>
                <div class="item">
                    <div>
                        <img src="images/biriyani.jpg" alt=""></img>
                    </div>
                    <h3>Biriyani</h3>
                    <p>Biryani, flavourful rice dish of Persian origin that has become a popular celebratory dish in South Asia</p>
                    <p class="fav-price">Rs1200</p>
                </div>
                <div class="item">
                    <div>
                        <img src="images/chicken_fried_rice00032a-1200x1200-1.jpg" alt=""></img>
                    </div>
                    <h3>Chicken friedrice</h3>
                    <p>Devil chicken,chopsi and chilipate</p>
                    <p class="fav-price">Rs800</p>
                </div>
                <div class="item">
                    <div>
                        <img src="images/chicken dramstic.jpg" alt=""></img>
                    </div>
                    <h3>Chicken Dramstic</h3>
                    <p>10pcs of chicken dramstic bucket</p>
                    <p class="fav-price">Rs1800</p>
                </div>
            </div>
            <div class="dsgn"></div>
        </div>
        <div class="main_slide4">
            <div class="chef-feed">
                <h2>Customer <span style={{ color: 'red' }}>Feedback</span></h2>
                <p>I recently had the pleasure of dining at this amazing restaurant, and I must say it was an absolute delight. From the moment I walked in, the ambiance was welcoming and comforting. The decor was tasteful and set the perfect mood for a delightful meal</p>
                <div class="chef-detail">
                    <div>
                        <img src="images/download.jpeg" alt=""></img>
                    </div>
                    <div>
                        <h6>HD Creations</h6>
                        <p>Web Developer</p>
                    </div>
                </div>

            </div>
            <div class="chef">
                <img src="images/chef.jpg" alt="chef"></img>
            </div>
        </div>
        <div class="letter">
            <div class="letter-head">
                <h2>Submit <span>Review</span></h2>
            </div>
            <form method="POST" action="./backend/user/reviewP">
                <div class="letter-input">

                    <div>
                        <input type="text" name="review" placeholder="Rate Us" required></input>
                    </div>
                    <button type="submit" class="red_btn">Submit</button>

                </div>
            </form>
        </div>
        </div>
      
    </div>
    <Footer/>
    </div>
  )
}
