/* Pattarapong Thanakiethirun 6130300654 */
import './information.css';
import axios from 'axios';
import React, { useContext, useEffect, useState } from "react";

function information(){

    const [data, sendData] = useState([]);
    useEffect(() => {
        axios
          .get("http://localhost:3000/api", {
            // amount: totalAmount,
            // email: "jamkapp556@gmail.com",
          })
          .then((response) => {
            /* console.log(response.data); */
            sendData(response.data[0])
            console.log(data);
          });
      }, []);
      
    return(
        <div className='information_main'>
            <p className='information_text1'>ข้อมูลส่วนตัว</p>
            <div className='profile'>
                <img className='profileCir' src={data.profile} width={400}  height={400}></img>
            </div>
            <p className='information_text1'>{data.username}</p>
            <div className='bg_information'>
                <p className='information_text3'>ข้อมูลรูปบัตรประชาชน</p>
                <p className='information_text4'>ข้อมูลรูปถ่าย</p>
                <p className='information_text4'>ข้อมูลรูปใบขับขี่</p>
                <img className='card_img'  src={data.peoplecard}></img>
                <img className = 'card_img2 pic' src={data.profile}></img>
                <img claseeName = 'card_img' src={data.drivercard}></img>
            </div>
            <p className='information_text2'>ข้อมูลส่วนตัว</p>
            <div className='bg_information2'>
                <p className='box text-box'>{data.gender}</p>
                <p className='box2 text-box2'>{data.firstname}</p>
                <p className='box2 text-box2'>{data.lastname}</p>
                <p className='box text-box'>{data.nationality}</p>
                <p className='box2 text-boxID'>{data.ID_cardNumber}</p>
                <p className='box2 text-boxID'>{data.tel}</p>
                <p className='box text-boxday'>{data.birthday}</p>
                <p className='box2 text-box2'>{data.marital_status}</p>
                <p className='box2 text-box'>{data.email}</p>
            </div>
            <p className = 'information_text2'>ที่อยู่</p>
            <div className=' bg_information3'>
                <p className='box3 text-box3'>{data.Address}</p>
            </div>
            <div className='bg_information4'>
                <p className='box4 text-box' > {data.subdistrict}</p>
                <p className='box4 text-box'>{data.city}</p>
                <p className='box4 text-box'>{data.province}</p>
                <p className='box4 text-box'>{data.zipcode}</p> 
            </div>
            <p className='information_text2'>ข้อมูลบริษัท</p>
            <div className='bg_information5'>
                <p className='box5 text-box'>ชื่อบริษัท : {data.companyname}</p>
                <p className='box5 text-box'>ประเภทธุรกิจ : {data.companytype}</p>
                <p className='box5 text-box'>email : {data.companyemail}</p>
                <p className='box5 text-box'>เบอร์โทร : {data.companytel}</p>
                <p className='box5 text-box'>เงินเดือน : {data.salary}</p>
            </div>
            <div className='bg_informationFree'></div>
        </div>
    );
}



export default information ;