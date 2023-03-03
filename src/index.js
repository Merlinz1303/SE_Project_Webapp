import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar';
import Select_car from './select_car';
import Navba_footer from './navbar_Footer';
import Booking from './Booking_car';
import Information from './Information';
import Contact from './Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
  </React.StrictMode>
);

reportWebVitals();
