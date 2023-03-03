import './navbar_Footer.css';

function navbar_Footer(){
    return(
        <div className='nav_foot'>
            <div className='logo' >
                <img src={("/images/LOGO1.3.jpg")} width={300}  height={300}></img>
            </div>  
            <ul>
                <a className='menu'>เมนู</a>
                <li className='active'>
                    <a href='main' className='menutext'>หน้าหลัก</a>
                </li>
                <li className='active'>
                    <a href='information' className='menutext'>เกี่ยวกับ</a>
                </li>
                <li className='active'>
                    <a href='register' className='menutext'>วิธีสมัคร</a>
                </li>
                <li className='active'>
                    <a href='contact' className='menutext'>ติดต่อ/สอบถาม</a>
                </li>
            </ul>
            <ul>
                <a className='menu'>ติดต่อเรา</a>
                <a className='menutext'>1234-5678</a>
                <a className='menutext'>support@gmail.com</a>
            </ul> 
            <ul>
                <a className='menu'>ติดตามเรา</a>
            </ul> 

        </div>
    );
}

export default navbar_Footer