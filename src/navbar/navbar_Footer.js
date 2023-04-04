/* Pattarapong Thanakiethirun 6130300654 */
import './navbar_Footer.css';
import { Link ,useMatch, useResolvedPath} from 'react-router-dom';
export default function navbar_Footer(){
    return(
        <div className='nav_foot'>
            <div className='logo' >
                <img src={("/images/LOGO1.3.jpg")} width={300}  height={300}></img>
            </div>  
            <ul>
                <a className='menu'>เมนู</a>
                <CustomLink2 to ='/Main' className='menutext'>หน้าหลัก</CustomLink2>
                <CustomLink2 to ='/Information' className='menutext'>เกี่ยวกับ</CustomLink2>  
                <CustomLink2 to ='/Register' className='menutext'>วิธีสมัคร</CustomLink2>
                <CustomLink2 to ='/Contact' className='menutext'>ติดต่อ/สอบถาม</CustomLink2>
            </ul>
            <ul>
                <a className='menu'>ติดต่อเรา</a>
                <a className='menutext'>1234-5678</a>
                <a className='menutext'>support@gmail.com</a>
            </ul> 
            <ul>
                <a className='menu'>ติดตามเรา</a>
                <img claseeName = 'Contact_Footer' src={("/images/logo/contact_logo.png")}></img>
            </ul> 
            <div>
                
            </div>
        </div>
    );
}

function CustomLink2({ to,children, ...proops }) {
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