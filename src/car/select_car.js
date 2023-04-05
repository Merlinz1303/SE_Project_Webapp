/* Pattarapong Thanakiethirun 6130300654 */
import './select_car.css';
import LayoutPage from "../components/LayoutPage";
import React , {useEffect} from "react";
import { useSelector , useDispatch} from "react-redux";
import { getAllCars } from "../Redux/actions/carActions";
import {Row , Col} from 'antd';
import './SelectCar.css';
import {Link} from 'react-router-dom';

function select_car(){
    const {cars} = useSelector(state=>state.carsReducer)
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(getAllCars())
    }, [dispatch]);
  
    return(
        <div className='select_car_main'>
            <p className='text'>เลือกรถที่คุณต้องการ</p>
            <div className='logo_grid'>
                {/* MG */}
                <div className='logo_img' >
                    <img src={("/images/logo/logo1.png")} width={150} height={150}></img>
                </div>

                {/* AUDI */}
                <div className='logo_img'>
                    <img src={("/images/logo/logo3.png")} width={150} height={150}></img>
                </div>
                {/* BMW */}
                <div className='logo_img'>
                    <img src={("/images/logo/logo4.png")} width={150} height={150}></img>
                </div>

                {/* MINI */}
                <div className='logo_img'>
                    <img src={("/images/logo/logo6.png")} width={150} height={150}></img>
                </div>

                {/* Tesla */}
                <div className='logo_img'>
                    <img src={("/images/logo/logo9.png")} width={150} height={150}></img>
                </div>
            </div>
            <div className='select_car_grid'>
                <div className='car_img'>
                    <img src={("/images/car/car1.png")} width={300} height={270}></img>
                    <p className='car_text'>{car.Name}</p> 
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
        </div>
    );
}

export default select_car;