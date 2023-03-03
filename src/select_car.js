import Navbar from './Navbar';
import Navbar_Footer from './navbar_Footer';
import './select_car.css';

function select_car(){
    return(
        <div className='select_car_main'>
            <Navbar/>
            <p className='text'>เลือกรถที่คุณต้องการ</p>
            <div className='logo_grid'>
                <div className='logo_img' >
                    <img src={("/images/logo/logo1.png")} width={150} height={150}></img>
                </div>
                <div className='logo_img'>
                    <img src={("/images/logo/logo2.png")} width={150} height={150}></img>
                </div>
                <div className='logo_img'>
                    <img src={("/images/logo/logo3.png")} width={150} height={150}></img>
                </div>
                <div className='logo_img'>
                    <img src={("/images/logo/logo4.png")} width={150} height={150}></img>
                </div>
                <div className='logo_img'>
                    <img src={("/images/logo/logo5.png")} width={150} height={150}></img>
                </div>
                <div className='logo_img'>
                    <img src={("/images/logo/logo6.png")} width={150} height={150}></img>
                </div>
                <div className='logo_img'>
                    <img src={("/images/logo/logo7.png")} width={150} height={150}></img>
                </div>
                <div className='logo_img'>
                    <img src={("/images/logo/logo8.png")} width={150} height={150}></img>
                </div>
                <div className='logo_img'>
                    <img src={("/images/logo/logo9.png")} width={150} height={150}></img>
                </div>
            </div>
            <div className='select_car_grid'>
                <div className='car_img'>
                    <img src={("/images/car/car1.png")} width={300} height={270}></img>
                    {/* <p className='car_text'>car1</p> */}
                </div>
                <div className='car_img'>
                    <img src={("/images/car/car2.png")}  width={300} height={270}></img>
                </div>
                <div className='car_img'>
                    <img src= {("/images/car/car3.png")} width={300} height={270}></img>
                </div>
                <div className='car_img'>
                    <img src={("/images/car/car4.png")} width={300} height={270}></img>
                </div>
                <div className='car_img'>
                    <img src={("/images/car/car5.png")}  width={300}  height={270} ></img>
                </div>
                <div className='car_img'>
                    <img src= {("/images/car/car6.png")} width={300} height={270}></img>
                </div>
                <div className='car_img'>
                    <img src={("/images/car/car7.png")} width={300}  height={270}></img>
                </div>
                <div className='car_img'>
                    <img src={("/images/car/car8.png")}  width={300}  height={270} ></img>
                </div>
                <div className='car_img'>
                    <img src= {("/images/car/car9.png")} width={300} height={270}></img>
                </div>
                <div className='car_img'>
                    <img src={("/images/car/car10.png")} width={300}  height={270}></img>
                </div>
                <div className='car_img'>
                    <img src={("/images/car/car11.png")}  width={300}  height={270} ></img>
                </div>
                <div className='car_img'>
                    <img src= {("/images/car/car12.png")} width={300} height={270}></img>
                </div>
                <div className='car_img'>
                    <img src={("/images/car/car1.png")}  width={300}  height={270} ></img>
                </div>
                <div className='car_img'>
                    <img src= {("/images/car/car12.png")} width={300} height={270}></img>

                </div>
                
                
            </div>
            <Navbar_Footer/>
        </div>
    );
}

export default select_car;