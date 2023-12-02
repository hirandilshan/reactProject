import React from 'react'
import './reservation.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Reservation() {
  return (
    <div>
      <Header/>
      <div class="content">
        <div class="forms">

            <div class="form-details">
                <h2>Make Reservations</h2>
                <p>Fill the date and time for the reservation.</p>
            </div>
            <div class="form-content">
                <form action="../../backend/user/process_booking.php" method="post">
                    <label>Date:</label>
                    <div class="inputs">

                        <input type="date" name="date" required/><br/>
                    </div>
                    <label>Time:</label>
                    <div class="inputs">

                        <input type="radio" id="time1" name="time" value="09:00:00"/>
                        <label for="time1">9 - 10</label><br/>
                    </div>
                    <div class="inputs">
                        <input type="radio" id="time2" name="time" value="10:00:00"/>
                        <label for="time2">10 - 11</label><br/>
                    </div>
                    <div class="inputs">
                        <input type="radio" id="time3" name="time" value="11:00:00"/>
                        <label for="time3">11 - 12</label><br/>
                    </div>
                    <div class="inputs">
                        <input type="radio" id="time1" name="time" value="12:00:00"/>
                        <label for="time1">12 - 1</label><br/>
                    </div>
                    <div class="inputs">
                        <input type="radio" id="time2" name="time" value="13:00:00"/>
                        <label for="time2">1 - 2</label><br/>
                    </div>
                    <div class="inputs">
                        <input type="radio" id="time3" name="time" value="14:00:00"/>
                        <label for="time3">2 - 3</label><br/>
                    </div>
                    <div class="inputs">
                        <input type="radio" id="time1" name="time" value="15:00:00"/>
                        <label for="time1">3 - 4</label><br/>
                    </div>
                    <div class="inputs">
                        <input type="radio" id="time2" name="time" value="16:00:00"/>
                        <label for="time2">4 - 5</label><br/>
                    </div>
                    <div class="inputs">
                        <input type="radio" id="time3" name="time" value="17:00:00"/>
                        <label for="time3">5 - 6</label><br/><br/>
                    </div>
                    <div class="inputs">
                        <label for="tables">Table Number:</label>
                        <select id="tables" name="tables">
                            <option value="001">001</option>
                            <option value="002">002</option>
                            <option value="003">003</option>
                            <option value="004">004</option>
                            <option value="005">005</option>
                            <option value="006">006</option>
                            <option value="007">007</option>
                            <option value="008">008</option>
                            <option value="009">009</option>
                            <option value="010">010</option>
                            <option value="011">011</option>
                            <option value="012">012</option>
                        </select> <br/>
                    </div>
                    <button type="submit" value="Submit">Book Now</button>
                </form>

            </div>



        </div>
    </div>
      <Footer/>
    </div>
  )
}
