import React from 'react'
import './offers.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Offers() {
  return (
    <div>
      <Header/>
      <div class="offers">
        <div class="offer">
            <img src="../../img/weekenddeal.jpeg" alt="Offer Image 1"/>
            <h3>Weekend Special</h3>
            <p>Enjoy our exclusive weekend offer on 2 Large pizza for big coke.Limited time only!</p>
            <div class="offer-details">
                <ul>
                    <li>Valid only on Fridays and Saturdays.</li>
                    <li>Includes every 2 large pizza.</li>
                    <li>Not applicable with other discounts or promotions.</li>
                </ul>
            </div>
        </div>
        <div class="offer">
            <img src="../../img/lunchCombo.jpeg" alt="Offer Image 2"/>
            <h3>Lunch Combo</h3>
            <p>Delicious lunch combo at 5% discounted price. Available every weekday.</p>
            <div class="offer-details">
                <ul>
                    <li>Available from 11:00 AM to 2:30 PM.</li>
                    <li>Choose from a variety of combos based on your preferences.</li>
                    <li>Prices vary based on the selected combo.</li>
                </ul>
            </div>
        </div>
        <div class="offer">
            <img src="../../img/familydeal.jpeg" alt="Offer Image 3"/>
            <h3>Family Meal Deal</h3>
            <p>Feast with your family with our specially curated family meal deal. Perfect for a family night out.</p>
            <div class="offer-details">
                <ul>
                    <li>Valid for a group of 4 or more.</li>
                    <li>Includes a choice of main course, sides, and beverages for each member.</li>
                    <li>Book in advance for a seamless dining experience.</li>
                </ul>
            </div>
        </div>

    </div>
      <Footer/>
    </div>
  )
}
