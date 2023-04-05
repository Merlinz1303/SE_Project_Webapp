import LayoutPage from "../components/LayoutPage";
import Button from 'react-bootstrap/Button';
import head3 from './HEAD3.PNG';
import './Button.css';
import Box from './Box';
import Grid from './Grid';
function PageFinancial() {
  return (
    <LayoutPage>
    <h1 align="center">ข้อมูลการเงิน</h1>
    <br></br>
    <br></br>
    <div>
      <img src={head3} alt="HEAD"/>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Grid columns={3}>
    <h3 align="left">ข้อมูลบริษัท</h3>
                    <Box>
                        <ul>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>

                        </ul>
                    </Box>
    <h3 align="left">เอกสารประกอบ</h3>
                    <Box>
                        <ul>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>

                        </ul>
                    </Box>

                </Grid>
    <br></br>
    <br></br>
    <br></br> 
    <div class="right">
      <a href="http://localhost:3000/Booking"  size="sm">
        <Button type="button">  ยืนยัน </Button>
      </a>
    </div>  
    </LayoutPage>
  );
}

export default PageFinancial;
