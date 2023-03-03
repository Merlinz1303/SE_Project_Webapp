import './Booking_car.css';
import Navbar_Footer from './navbar_Footer';
import Navbar from './Navbar';

function Booking() {
    return (
        <div className= "Booking_main">
            <Navbar/>
            <p className='text'>ข้อมูลการจอง</p>
            <div className='Footer2'>
                <Navbar_Footer/>
            </div>
            
        </div>
    
    );
}

export default Booking;