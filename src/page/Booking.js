import LayoutPage from "../components/LayoutPage";
import React , {useState,useEffect} from "react";
import { useSelector , useDispatch} from "react-redux";
import { getAllCars } from "../Redux/actions/carActions";
import { useParams } from 'react-router-dom';
import Box from './Box';
import Box1 from './Box1';
import Grid from './Grid';
import './Button.css';
import Select from 'react-select';
import Miles from './miles.PNG';
import $ from 'jquery';
import { DatePicker,Checkbox } from "antd";
import moment from 'moment';



const {RangePicker} = DatePicker;

const options = [
  { value: 'บ่อวิน', label: 'บ่อวิน' },
  { value: 'แหลมฉบัง', label: 'แหลมฉบัง' },
  { value: 'บางแสน', label: 'บางแสน' }
]


function Booking() {


    const {cars} = useSelector(state=>state.carsReducer);
    const [car, setcar]=useState({});
    const dispatch = useDispatch();
    const { carid } = useParams();
    const {from,setFrom} = useState();
    const {to,setTo} = useState();
    const {totalYears,setTotalYears} = useState(0);
    const{$box ,setBox} = useState({});






    
  
    useEffect(() => {
      dispatch(getAllCars())
      if(cars.length>0)
      {
        setcar(cars.find(o => String(o._id) === carid))
      }
    }, [cars]);


    $("input:checkbox").on('click', function() {
      var $box = $(this);
      if ($box.is(":checked")) {
        var group = "input:checkbox[name='" + $box.attr("name") + "']";
        $(group).prop("checked", false);
        $box.prop("checked", true);
      } else {
        $box.prop("checked", false);
      }
  
    });






    function selectTimeSlots(values){
      setFrom(moment(values[0]).format('YYYY'));
      setTo(moment(values[1]).format('YYYY'));
      setTotalYears(values[1].diff(values[0]), 'years');
    }



    function checkOnlyOne(b){

      var x = document.getElementsByClassName('daychecks');
      var i;
      
      for (i = 0; i < x.length; i++) {
        if(x[i].value != b) x[i].checked = false;
      }
      }

    return (
    <LayoutPage>
      <input class="daychecks" onclick="checkOnlyOne(this.value);" type="checkbox" name="reoccur_weekday" value="36" />36 เดือน&nbsp;&nbsp;&nbsp;
      <input class="daychecks" onclick="checkOnlyOne(this.value);" type="checkbox" name="reoccur_weekday" value="48" />48 เดือน&nbsp;&nbsp;&nbsp;
      <input class="daychecks" onclick="checkOnlyOne(this.value);" type="checkbox" name="reoccur_weekday" value="60" />60 เดือน&nbsp;&nbsp;&nbsp;



 
    <h1 align="center">ข้อมูลการเลือกรถ </h1>
    <Grid columns={2}>
                    <Box>
                        <ul>
                        <h1>รุ่น {car.Name}</h1>
                        <br></br>
                        <div>
                          <img src={car.Image} Alt=""  style={{ width: '400px', }} />
                        </div>
                        <h3 align="left">ข้อมูลรถยนต์ไฟฟ้า</h3>
                        <br></br>
                        <h4 align="left"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj1e8GxtihSAANI6veXVbznLoieSUVSm6N8w&usqp=CAU" alt="" style={{ width: '40px', }}/>&nbsp;&nbsp;&nbsp;{car.Battery}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://software.thaiware.com/upload_misc/software/2016_04/728/12535_16043020080655_161880.png" alt="" style={{ width: '40px', }}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{car.Distance}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={Miles} alt="react logo" style={{ width: '40px', }}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{car.Speed}</h4>
                        <h4 align="left">(kWh)แบบเตอรี่ที่ใช้งานได้&nbsp;&nbsp;&nbsp;(Km)ระยะวิ่งได้จริง&nbsp;&nbsp;&nbsp;(Km/h)ความเร็วสูงสุด</h4>
                        <h4 align="left"><img src="https://cb.lnwfile.com/_/cb/_raw/uo/xf/vo.jpg" alt="react logo" style={{ width: '30px', }}/>{car.Port}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/wheel.png" alt="" style={{ width: '40px', }}/>&nbsp;&nbsp;&nbsp;{car.WheelDrive}</h4>
                        <h4 align="left">พอร์ทชาร์จ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ระบบขับเคลื่อน</h4>
                        <img src="https://firebasestorage.googleapis.com/v0/b/se-database-e3659.appspot.com/o/Color%2Fblack.png?alt=media&token=19e16504-5715-42d0-b149-6f68ede468dd" alt="" style={{ width: '45px', }}/>
                        <h4 align="left">สีรถ </h4> 
                        <br></br>

                        </ul>
                    </Box>
                    <Box1>
                      <h3>เลือกระยะเวลาสัญญา</h3>
                      <RangePicker picker="year" onChange={selectTimeSlots}  />
                      <div>
                      <p>ระยะเวลารวม: {totalYears}</p>
                      </div>
                      













                        <h3>ระยะเวลา</h3>
                        <h4 align="left"> <input type="checkbox" class="time1" value="36" name="fooby[1][]" />36 เดือน&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" class="time2" value="1" name="fooby[1][]" />48 เดือน&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" class="time3" value="1" name="fooby[1][]" />60 เดือน</h4> 
                        <hr></hr>
                        <h3>ค่าบริการรายเดือน</h3>
                        <p> {car.Price} บาท</p>
                        <h4 align="left"> </h4>
                        <hr></hr>
                        <h3>เลือกศูนย์ที่ต้องการรับรถ</h3>
                        <Select options={options} />
                    </Box1>

                </Grid>
    </LayoutPage>

  );
}

export default Booking;
