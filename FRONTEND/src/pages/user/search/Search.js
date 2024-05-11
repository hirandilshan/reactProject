import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import "./search.css";
import "./../foodMenu/foodItems/food.css";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Search() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchName = location.state?.searchName;

  const[results,setResults] = useState([]);
  const [allFoods, setFoods] = useState([]);
  const [userName, setUserName] = useState("");


  useEffect(() => {
    console.log("searchName received:", searchName);
    if (searchName) {
      fetchData(searchName);
    }
  }, [searchName]);


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

  useEffect(() => {
    axios
      .get("https://reactproject-6y6b.onrender.com/foods/getFoods")
      .then((response) => {
        
        setFoods(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  

  const fetchData = (value) =>{
    axios
    .get("https://reactproject-6y6b.onrender.com/foods/getFoods").then(res => {
      
      const result = res.data.filter((food) => {
        return value && food && food.item && food.item.toLowerCase().includes(value.toLowerCase());
      });
      console.log(result)
      setResults(result);
    })
  }
  

  

  function sendData(foodId) {
    if(userName){ 
    const foodItem = allFoods.find(foods => foods._id === foodId);
    const num=1;
    const newItem = {
          item: foodItem.item,
          price: foodItem.price,
          numOfItems: num,
          userName: userName
    };
  
    axios.post("https://reactproject-6y6b.onrender.com/cart/add", newItem)
      .then(() => {
        alert("Added to the cart");
        
      })
      .catch((err) => {
        alert("Failed to add to cart: " + err.message);
      });
  }else{
    alert("Please Login")
    navigate('/login');
  }
}

    
  return (
    <div>
      <div className="choice">
        
          <div className="foods">
            {results.map((food) => {
              return (
                <>
                  <div className="food-item">
                    <img src={food.img} alt="Food 1" />
                    <h3> {food.item}</h3>
                    <h4>Rs.{food.price}</h4>
                    <button onClick={() => sendData(food._id)}>Add to Cart</button>
                    
                  </div>
                </>
              );
            })}
          </div>
        </div>
    </div>
  )
}
