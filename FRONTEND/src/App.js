import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import Index from "./pages/user/home/Index";
import Offers from "./pages/user/offers/Offers";
import About from "./pages/user/about/About";
import Facility from "./pages/user/facilities/Facility";
import Gallery from "./pages/user/gallery/Gallery";
import ServiceType from "./pages/user/serviceType/ServiceType";
import Reservation from "./pages/user/reservation/Reservation";
import FoodMenu from "./pages/user/foodMenu/FoodMenu";
import Signup from "./pages/user/signup/Signup";
import Login from "./pages/user/login/Login";
import FoodCart from "./pages/user/cart/FoodCart";
import Search from "./pages/user/search/Search";
import FoodItems from "./pages/user/foodMenu/foodItems/FoodItems";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/facilities" element={<Facility />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/serviceTypes" element={<ServiceType />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/foodMenu" element={<FoodMenu />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/foodCart" element={<FoodCart />} />
          <Route path="/foodItems" element={<FoodItems />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
