import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/about/About';
import Index from './pages/home/Index';
import Facility from './pages/facilities/Facility';
import Gallery from './pages/gallery/Gallery';
import Offers from './pages/offers/Offers';
import ServiceType from './pages/serviceType/ServiceType';
import Reservation from './pages/reservation/Reservation';
import FoodMenu from './pages/foodMenu/FoodMenu';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Burgers from './pages/foodMenu/foodItems/Burgers';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "index",
    element: <Index/>,
  },
  {
    path: "facilities",
    element: <Facility/>,
  },
  {
    path: "gallery",
    element: <Gallery/>,
  },
  {
    path: "offers",
    element: <Offers/>,
  },
  {
    path: "serviceTypes",
    element: <ServiceType/>,
  },
  {
    path: "reservation",
    element: <Reservation/>,
  },
  
  {
    path: "foodMenu",
    element: <FoodMenu/>,
  },
  {
    path: "signup",
    element: <Signup/>,
  },
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "burgers",
    element: <Burgers/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavigationBar/>
    <RouterProvider router={router} />
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
