import React from 'react'
import './serviceType.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from "react-router-dom";

export default function ServiceType() {
  return (
    <div>
      <Header/>
      <div class="content">
        <div class="intro">
            <div class="intro-image">
                <img src="../../img/servis.jpg" alt="Services"/>
                <h1>Our Service Types</h1>
            </div>
        </div>
        <div class="service-types">
            <div class="service-type">
                <img src="../../img/dinein.jpeg" alt="Dine-In "/>
                <h3>Dine-In</h3>
                <Link to="/reservation" class="button">Reservations</Link>
                <p>Enjoy a delicious meal in our comfortable dining area.Immerse yourself in a warm and inviting ambiance while relishing our chef's specialties.</p>
            </div>
            <div class="service-type">
                <img src="../../img/takeaway.jpeg" alt="Takeaway"/>
                <h3>Takeaway</h3>
                <p>Order your favorite dishes and enjoy them on the go.Perfect for a quick meal on a busy day or a picnic in the park.</p>
            </div>
            <div class="service-type">
                <img src="../../img/delivery.jpeg" alt="Delivery"/>

                <h3>Delivery</h3>
                <Link to="/foodMenu" class="button">Order Now</Link>
                <p>We'll deliver your meal right to your doorstep.Enjoy a restaurant-quality meal in the comfort of your own home without any hassle.</p>
            </div>

        </div>

    </div>
      <Footer/>
    </div>
  )
}
