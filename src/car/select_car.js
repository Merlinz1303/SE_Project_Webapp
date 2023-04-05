/* Pattarapong Thanakiethirun 6130300654 */
import './select_car.css';
import axios from 'axios';
import React, { useContext, useEffect, useState } from "react";

function select_car(){

    const [data, sendData] = useState([]);
    useEffect(() => {
        axios
          .get("http://localhost:3000/api2", {
            // amount: totalAmount,
            // email: "jamkapp556@gmail.com",
          })
          .then((response) => {
            console.log(response.data);
            sendData(response.data[0])
          });
      }, []);
    return(
        <div className='select_car_main'>
            <p className='text'>เลือกรถที่คุณต้องการ</p>
            <div className='logo_grid'>
                {/* MG */}
                <div className='logo_img' >
                    <img src={("/images/logo/logo1.png")} width={150} height={150}></img>
                </div>
{/*                 <div className='logo_img'>
                    <img src={("/images/logo/logo2.png")} width={150} height={150}></img>
                </div> */}
                {/* AUDI */}
                <div className='logo_img'>
                    <img src={("/images/logo/logo3.png")} width={150} height={150}></img>
                </div>
                {/* BMW */}
                <div className='logo_img'>
                    <img src={("/images/logo/logo4.png")} width={150} height={150}></img>
                </div>
{/*                 <div className='logo_img'>
                    <img src={("/images/logo/logo5.png")} width={150} height={150}></img>
                </div> */}
                {/* MINI */}
                <div className='logo_img'>
                    <img src={("/images/logo/logo6.png")} width={150} height={150}></img>
                </div>
{/*                 <div className='logo_img'>
                    <img src={("/images/logo/logo7.png")} width={150} height={150}></img>
                </div> */}
{/*                 <div className='logo_img'>
                    <img src={("/images/logo/logo8.png")} width={150} height={150}></img>
                </div> */}
                {/* Tesla */}
                <div className='logo_img'>
                    <img src={("/images/logo/logo9.png")} width={150} height={150}></img>
                </div>
            </div>
            <div className='select_car_grid'>
                <div className='car_img'>
                    <img src={data.imageURL} width={300} height={270}></img>
                    <p className='car_text'>{data.Car}</p> 
                    <p className='car_text2'>{data.Price}  บาท</p>
                </div>
                <div className='car_img'>
                    <img src={data.imageURL}  width={300} height={270}></img>
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