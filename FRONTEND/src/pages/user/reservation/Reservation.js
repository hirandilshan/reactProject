import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import "./reservation.css";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

export default function Reservation() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [tableNum, setTableNum] = useState("");
  const [userName, setUserName] = useState("");
  const [reservations, setReservations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .get("https://reactproject-6y6b.onrender.com/user/token")
      .then((result) => {
        if (result.data.message === "Success") {
        } else {
          setUserName(null);
        }
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://reactproject-6y6b.onrender.com/reservation/getReservations")
      .then((response) => {
        const filteredReservations = response.data.filter(
          (reservations) => reservations.userName === userName
        );
        setReservations(filteredReservations);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userName]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      try {
        const decoded = jwtDecode(token); // Decoding the JWT
        console.log(decoded); // Debug: Log the decoded token to verify its contents
        if (decoded.email) {
          // Check if the decoded token has an email field
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

  function resData(e) {
    if (userName) {
      e.preventDefault();

      const newReservation = {
        date,
        time,
        tableNum,
        userName,
      };
      const isAlreadyBooked = reservations.some(
        (res) =>
          res.date === date && res.time === time && res.tableNum === tableNum
      );

      if (isAlreadyBooked) {
        alert("This table is already booked for the selected date and time.");
        return;
      }
      axios
        .post(
          "https://reactproject-6y6b.onrender.com/reservation/book",
          newReservation
        )
        .then(() => {
          alert("Reservation successful");
          setReservations([...reservations, newReservation]);
        })
        .catch((err) => {
          alert(err.response.data.message || "Error booking reservation");
        });
    } else {
      alert("Please Login");
      navigate("/login");
    }
  }

  return (
    <div>
      <div className="content">
        <div className="forms">
          <div className="form-details">
            <h2>Make Reservations</h2>
          </div>
          <div className="form-content">
            <form onSubmit={resData}>
              <div className="inputs">
                <label>Date:</label>
                <input
                  type="date"
                  name="date"
                  required
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
                <br />
              </div>
              <div className="inputs">
                <label>Time:</label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                >
                  <option>Open this select menu</option>
                  <option value="09:00:00">9 - 10</option>
                  <option value="10:00:00">10 - 11</option>
                  <option value="11:00:00">11 - 12</option>
                  <option value="12:00:00">12 - 1</option>
                  <option value="13:00:00">1 - 2</option>
                  <option value="14:00:00">2 - 3</option>
                  <option value="11:00:00">3 - 4</option>
                  <option value="11:00:00">4 - 5</option>
                </Form.Select>
              </div>

              <div className="inputs">
                <label for="tables">Table Number:</label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => {
                    setTableNum(e.target.value);
                  }}
                >
                  <option>Open this select menu</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </Form.Select>
                <br />
              </div>
              <button type="submit" value="Submit">
                Book Now
              </button>
            </form>
          </div>
          <div className="form-details">
            <h2>Previous Reservations</h2>
          </div>
          <Table striped="columns">
            <thead>
              <tr>
                <th>Reservation Date</th>
                <th>Time</th>
                <th>Table Number</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservations) => {
                return (
                  <>
                    <tr>
                      <td>{reservations.date}</td>
                      <td>{reservations.time}</td>
                      <td>{reservations.tableNum}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
