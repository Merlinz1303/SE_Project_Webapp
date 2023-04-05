import LayoutPage from "../components/LayoutPage";
import Button from 'react-bootstrap/Button';
import head2 from './HEAD2.PNG';
import './Button.css';
import Box from './Box';
import Grid from './Grid';
function PageInformation() {
  return (
    <LayoutPage>
    <h1 align="center">ข้อมูลส่วนตัว</h1>
    <br></br>
    <br></br>
    <div>
      <img src={head2} alt="HEAD"/>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Grid columns={3}>
    <h3 align="left">ข้อมูลส่วนตัว</h3>
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
    <h3 align="left">ข้อมูลส่วนตัว</h3>
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
    <h3 align="left">ข้อมูลที่อยู่อาศัย</h3>
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
      <a href="http://localhost:3000/Financial"  size="sm">
        <Button type="button">  ยืนยัน </Button>
      </a>
    </div>  
    </LayoutPage>
  );
}

export default PageInformation;
