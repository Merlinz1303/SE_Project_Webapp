import './navbar.css';
function Navbar(){
    return(
        <nav className='nav'>
            <div className='logo_top' >
                <img src={("/images/LOGO.png")} width={150}  height={20}></img>
            </div>  
            <ul>
                <li className='active'>
                    <a href='/information' className='menu_text' >เกี่ยวกับ</a>
                </li>
                <li className='active'>
                    <a href='/select_car' className='menu_text' >เลือกรถ</a>
                </li>
                <li className='active'>
                    <a href='=/register' className='menu_text'>วิธีสมัคร</a>
                </li>
                <li className='active'>
                    <a href='=/contact' className='menu_text'>ติดต่อ/สอบถาม</a>
                </li>
                <li className='active'>
                    <a href='=/Booking' className='menu_text'>ข้อมูลการจอง</a>
                </li>
                <li className='active'>
                    <a href='=/lessing' className='menu_text'>ข้อมูลสัญญาเช่าซื้อ</a>
                </li>
                <li className='active'>
                    <a href='=/user' className='user_text'></a>
                </li>
                {/* <li className='active'>
                    <a href='=/user' className='user_text' > User</a>
                </li>  */}
            </ul>
        </nav>
        
    );

} 

export default Navbar