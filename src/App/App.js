import './App.css';
import Navbar from '../navbar/Navbar';
import Select_car from '../car/select_car';
import Navba_footer from '../navbar/navbar_Footer';
import Booking from '../Booking/Booking_car';
import Information from '../information/Information';
import Contact from '../contact/Contact';
import {Route, Routes } from 'react-router-dom';
import SelectCar from '../car/SelectCar';
import Select_carcop from '../car/select_car copy';



export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/SelectCar' element = {<SelectCar/>}></Route>
          <Route path='/Booking' element = {<Booking/>}></Route>
          <Route path='/Contact' element = {<Contact/>}></Route>
          <Route path='/Information' element = {<Information/>}></Route>
      </Routes>
      <Navba_footer/>
    </div>
  );
}

