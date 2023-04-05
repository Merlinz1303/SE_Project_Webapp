import LayoutPage from "../components/LayoutPage";
import React , {useEffect} from "react";
import { useSelector , useDispatch} from "react-redux";
import { getAllCars } from "../Redux/actions/carActions";
import {Row , Col} from 'antd';
import './SelectCar.css';
import {Link} from 'react-router-dom';



function SelectCar() {

  
  const {cars} = useSelector(state=>state.carsReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCars())
  }, [dispatch]);



  return (
    <LayoutPage>

        
      <h1 align="center">เลือกรถที่คุณต้องการ</h1>
      <Row justify='center' gutter={53}  >

        {cars.map(car=>{
          return <Col lg={8} sm={10} xs={10}>
            <div className="car bs1 mt-3 ">
              <img src={car.Image} Alt="" className="carimg"/>

              <div>

                <div className="center  ">
                  <p>รุ่น {car.Name}</p>
                  <p>ราคา {car.Price} บาท</p>
                </div>

                <div className="center">
                  <button className="btn1"><Link to ={`/Booking/${car._id}`  }className="btn2" >สั่งจอง</Link></button>
                </div>
                <br></br>   


              </div>
              

            </div>
            <br></br>
            <br></br>
            <br></br>
          </Col>

        })}


      </Row>



    </LayoutPage>

  )
}

export default SelectCar;
