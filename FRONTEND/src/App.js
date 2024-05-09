import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import Index from './pages/user/home/Index';
import Offers from './pages/user/offers/Offers';
import About from './pages/user/about/About';
import Facility from './pages/user/facilities/Facility';
import Gallery from './pages/user/gallery/Gallery';
import ServiceType from './pages/user/serviceType/ServiceType';
import Reservation from './pages/user/reservation/Reservation';
import FoodMenu from './pages/user/foodMenu/FoodMenu';
import Signup from './pages/user/signup/Signup';
import Login from './pages/user/login/Login';

import Burgers from './pages/user/foodMenu/foodItems/Burgers';
import Nuggets from './pages/user/foodMenu/foodItems/Nuggets';
import Salads from './pages/user/foodMenu/foodItems/Salads';
import Muffins from './pages/user/foodMenu/foodItems/Muffins';
import Frosty from './pages/user/foodMenu/foodItems/Frosty';
import Fries from './pages/user/foodMenu/foodItems/Fries';
import Drinks from './pages/user/foodMenu/foodItems/Drinks';
import Coffee from './pages/user/foodMenu/foodItems/Coffee';
import Biscuits from './pages/user/foodMenu/foodItems/Biscuits';
import Pizza from './pages/user/foodMenu/foodItems/Pizza';
import Sides from './pages/user/foodMenu/foodItems/Sides';
import Deals from './pages/user/foodMenu/foodItems/Deals';
import FoodCart from './pages/user/cart/FoodCart';
import Search from './pages/user/search/Search';



function App() {
  return (
    <Router>
      <div>
        <NavigationBar/>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/facilities" element={<Facility />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/serviceTypes" element={<ServiceType />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path='/foodMenu' element={<FoodMenu/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/foodCart' element={<FoodCart/>} />

          <Route path='/burgers' element={<Burgers />} />
          <Route path='/nuggets' element={<Nuggets />} />
          <Route path='/salads' element={<Salads />} />
          <Route path='/fries' element={<Fries />} />
          <Route path='/muffins' element={<Muffins />} />
          <Route path='/biscuits' element={<Biscuits />} />
          <Route path='/ice' element={<Frosty />} />
          <Route path='/coffee' element={<Coffee />} />
          <Route path='/beverage' element={<Drinks />} />
          <Route path='/pizza' element={<Pizza />} />
          <Route path='/sides' element={<Sides />} />
          <Route path='/deals' element={<Deals />} />
          <Route path='/search' element={<Search />} />
        </Routes>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;