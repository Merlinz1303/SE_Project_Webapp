import { Link ,useMatch, useResolvedPath} from 'react-router-dom';
import './navbar.css';

export default function Navbar(){
    return(
        <nav className='nav'>
            <div className='logo_top' >
                <img src={("/images/LOGO.png")} width={150}  height={20}></img>
            </div>  
            <ul>
                <CustomLink to ='/Information' className='menu_text' >เกี่ยวกับ</CustomLink>  
                <CustomLink to ='/Select_car' className='menu_text' >เลือกรถ</CustomLink>
                <CustomLink to ='/Register' className='menu_text'>วิธีสมัคร</CustomLink>
                <CustomLink to ='/Contact' className='menu_text'>ติดต่อ/สอบถาม</CustomLink>
                <CustomLink to ='/Booking' className='menu_text'>ข้อมูลการจอง</CustomLink>
                <CustomLink to ='/Lessing' className='menu_text'>ข้อมูลสัญญาเช่าซื้อ</CustomLink>
                <b> 
                <CustomLink to ='/user' className='user_text' > User</CustomLink> 
                </b>
            </ul>
        </nav>
        
    );

} 

function CustomLink({ to,children, ...proops }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end:true})
    return(
        <li className ={isActive ? "active" : ""}>
            <Link to = {to} {...proops}>
                {children}
            </Link>
        </li>
    )

}