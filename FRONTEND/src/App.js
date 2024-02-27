import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import Index from './pages/home/Index';
import Offers from './pages/offers/Offers';
import About from './pages/about/About';
import Facility from './pages/facilities/Facility';
import Gallery from './pages/gallery/Gallery';
import ServiceType from './pages/serviceType/ServiceType';
import Reservation from './pages/reservation/Reservation';
import FoodMenu from './pages/foodMenu/FoodMenu';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Burgers from './pages/foodMenu/foodItems/Burgers';
import Nuggets from './pages/foodMenu/foodItems/Nuggets';
import Salads from './pages/foodMenu/foodItems/Salads';
import Muffins from './pages/foodMenu/foodItems/Muffins';
import Frosty from './pages/foodMenu/foodItems/Frosty';
import Fries from './pages/foodMenu/foodItems/Fries';
import Drinks from './pages/foodMenu/foodItems/Drinks';
import Coffee from './pages/foodMenu/foodItems/Coffee';
import Biscuits from './pages/foodMenu/foodItems/Biscuits';
import Pizza from './pages/foodMenu/foodItems/Pizza';
import Sides from './pages/foodMenu/foodItems/Sides';
import Deals from './pages/foodMenu/foodItems/Deals';



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
        </Routes>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;