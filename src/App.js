import './App.css';
import Navbar from './Navbar';
import Select_car from './select_car';
import Navba_footer from './navbar_Footer';
import Booking from './Booking_car';
import Information from './Information';
import Contact from './Contact';
import {Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/Select_car' element = {<Select_car/>}></Route>
          <Route path='/Booking' element = {<Booking/>}></Route>
          <Route path='/Contact' element = {<Contact/>}></Route>
          <Route path='/Information' element = {<Information/>}></Route>
      </Routes>
      <Navba_footer/>
    </div>
  );
}


