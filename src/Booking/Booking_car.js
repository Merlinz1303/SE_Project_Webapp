/* Pattarapong Thanakiethirun 6130300654 */
import './Booking_car.css';
import React, { useState, useEffect } from 'react';

import data from './data.json';

function Booking() {
  return (
    <body>
    <div>
      <p className='book_text'>ข้อมูลการจอง</p>
      <table>
        <thead>
          <tr>
            <th>เลขบัตรประชาชน</th>
            <th>ชื่อ</th>
            <th>นามสกุล</th>
            <th>หมายเลขโทรศัพท์</th>
            <th>รุ่นรถ</th>
            <th>รหัส</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.lname}</td>
              <td>{item.phone}</td>
              <td>{item.model}</td>
              <td><a href = "#" target="_blank">{item.code}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </body>
  )
}

export default Booking;