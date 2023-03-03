import './Contact.css';
import Navbar_Footer from './navbar_Footer';
import Navbar from './Navbar';

function Contact() {
  return (
    <div className="Main">
        <header className='main_header'>
          <div className='contact_pic'>
            <Navbar/>
            <div className='Banner'>
              <img src= {("/images/ติดต่อ.png")} width={1800}></img>
            </div>
            <div className='BG_Contact'>
              <img  src= {("/images/BG_contact.png")} width={1800}></img>
            </div>
            <Navbar_Footer/>
          </div>
        </header>
    </div>
  );
}

export default Contact;
