import LayoutPage from "../components/LayoutPage";
import Box from './Box';
import Box1 from './Box1';
import Grid from './Grid';
import Button from 'react-bootstrap/Button';
import head from './HEAD.PNG';
import './Button.css';
import Miles from './miles.PNG';
import Select from 'react-select'
import React from "react";

const options = [
  { value: 'บ่อวิน', label: 'บ่อวิน' },
  { value: 'แหลมฉบัง', label: 'แหลมฉบัง' },
  { value: 'บางแสน', label: 'บางแสน' }
]

function PageSelectCar() {
  const [month, setMonth] = React.useState("36");
  return (
    <LayoutPage>
    <h1 align="center">ข้อมูลการเลือกรถ</h1>
    <br></br>
    <br></br>
    <div>
      <img src={head} alt="HEAD"/>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Grid columns={2}>
                    <Box>
                        <ul>
                        <h3 align="left">BWM IX</h3>
                        <img src="https://www.carrushome.com/media/2022/02/b-1-2.jpeg" alt="react logo" style={{ width: '400px', }}/>
                        <br></br>
                        <br></br>
                        <h3 align="left">ข้อมูลรถยนต์ไฟฟ้า</h3>
                        <br></br>
                        <h4 align="left"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj1e8GxtihSAANI6veXVbznLoieSUVSm6N8w&usqp=CAU" alt="react logo" style={{ width: '40px', }}/>&nbsp;&nbsp;&nbsp;68.3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://software.thaiware.com/upload_misc/software/2016_04/728/12535_16043020080655_161880.png" alt="react logo" style={{ width: '40px', }}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;365&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={Miles} alt="react logo" style={{ width: '40px', }}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;175</h4>
                        <h4 align="left">(kWh)แบบเตอรี่ที่ใช้งานได้&nbsp;&nbsp;&nbsp;(Km)ระยะวิ่งได้จริง&nbsp;&nbsp;&nbsp;(Km/h)ความเร็วสูงสุด</h4>
                        <h4 align="left"><img src="https://cb.lnwfile.com/_/cb/_raw/uo/xf/vo.jpg" alt="react logo" style={{ width: '30px', }}/>CCS2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/wheel.png" alt="react logo" style={{ width: '40px', }}/>&nbsp;&nbsp;2 Wheels</h4>
                        <h4 align="left">พอร์ทชาร์จ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ระบบขับเคลื่อน</h4>
                        <h4 align="left">สีรถ </h4> 
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Solid_blue.svg/512px-Solid_blue.svg.png?20150316143734" alt="react logo" style={{ width: '20px', }}/>
                        
                        
                        <br></br>

                        </ul>
                    </Box>
                    <Box1>
                    <h3>ระยะเวลา</h3>
                    <h4 align="left"> <input type="checkbox" shape="round" variant="fill" checked={month === "36"} onChange={() => setMonth("36")} /> 36 เดือน&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" shape="round" variant="fill" checked={month === "48"} onChange={() => setMonth("48")}/>48 เดือน&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" shape="round" variant="fill" checked={month === "60"} onChange={() => setMonth("60")}/>60 เดือน</h4> 
                        <hr></hr>
                        <h3>ระยะทางรวม</h3>
                        <h4 align="left"><input type="checkbox" shape="round" variant="fill" onChange={() => {}} />15,000 กม./ปี&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" shape="round" variant="fill" onChange={() => {}} />25,00 กม./ปี&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" shape="round" variant="fill" onChange={() => {}} />40,000 กม./ปี</h4> 
                        <h4 align="left">ระยะทาง (สูงสุดไม่เกิน 100,000 กม./ปี) ___________</h4>
                        <hr></hr>
                        <h3>ค่าบริการรายเดือน</h3>
                        <h4 align="left">บาท/เดือน</h4>
                        <hr></hr>
                        <h3>เลือกศูนย์ที่ต้องการรับรถ</h3>
                        <Select options={options} />
                    </Box1>

                </Grid>
                <br></br>
                
    <br></br>
    <br></br>
    <br></br>
    <div class="right">
      <a href="http://localhost:3000/Information"  size="sm">
        <Button type="button">  ยืนยัน </Button>
      </a>
    </div>            

    </LayoutPage>

  );
}

export default PageSelectCar;
