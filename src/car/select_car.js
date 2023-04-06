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
            /* console.log(response.data); */
            sendData(response.data)
          });
      }, []);
    
    const book = () => {
        alert("Booking");
    }

    return(
        <div className='select_car_main'>
            <p className='select_text'>เลือกรถที่คุณต้องการ</p>
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
                {data.map((data1) => {
                    console.log(data1);
                    return(
                        <div className='car_img'>
                            <img  src={data1.imageURL} width={300} height={250} ></img>
                            <p className='car_text'>{data1.Car}</p>
                            <p className='car_text2'>ราคาเริ่มต้น {data1.Price/36} บาท/เดือน</p>
                            <div className='center'>
                                <button className="btn1" onClick={book}>สั่งจอง</button>
                            </div>
                        </div>
                    )
                    
                })}
            </div>
            
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>
    );
}

export default select_car;