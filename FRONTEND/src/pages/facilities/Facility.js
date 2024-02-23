import React from 'react'
import './facilities.css'



export default function Facility() {
  return (
    <div>
      
      <div className="content">
        <div className="intro">
            <div className="intro-image">
                <img src="../../img/background.jpeg" alt="facility"/>
                <h1>Our Facilities</h1>
            </div>
        </div>

        <div className="facilities">
            <div className="facility">
                <img src="../../img/wifi.jpeg" alt="WiFi Icon"/>
                <div>
                    <h3>Free WiFi</h3>
                    <p>Stay connected with our high-speed WiFi while you dine.Whether it's for business or leisure, our WiFi service ensures you're always connected.</p>

                </div>
            </div>
            <div className="facility">
                <img src="../../img/parking.jpeg" alt="Parking Icon"/>
                <div>
                    <h3>Ample Parking</h3>
                    <p>Convenient and spacious parking for our valued guests.Never worry about finding a parking spot - we have ample space to accommodate all our patrons.</p>

                </div>
            </div>
            <div className="facility">
                <img src="../../img/outdoor.jpeg" alt="Outdoor Seating Icon"/>
                <div>
                    <h3>Outdoor Seating</h3>
                    <p>Enjoy the open air and great weather in our outdoor seating area.Perfect for a relaxed meal with friends and family while enjoying the outdoors.</p>

                </div>
            </div>
            <div className="facility">
                <img src="../../img/private.jpeg" alt="Private Dining Icon"/>
                <div>
                    <h3>Private Dining</h3>
                    <p>Book our private dining area for special events and gatherings. Ideal for special occasions, gatherings, and private events with personalized service.</p>

                </div>
            </div>
            <div className="facility">
                <img src="../../img/bar.jpeg" alt="Bar Icon"/>
                <div>
                    <h3> Bar</h3>
                    <p>Enjoy a variety of drinks and cocktails at our full-service bar.Our skilled bartenders craft the perfect drinks to complement your dining experience.</p>

                </div>
            </div>
        </div>

    </div>
    
    </div>
  )
}
