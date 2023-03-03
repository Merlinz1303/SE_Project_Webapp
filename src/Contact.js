import './Contact.css';


function Contact() {
  return (
    <div className="Main">
        <header className='main_header'>
          <div className='contact_pic'>
            <div className='Banner'>
              <img src= {("/images/ติดต่อ.png")} width={1800}></img>
            </div>
            <div className='BG_Contact'>
              <img  src= {("/images/BG_contact.png")} width={1800}></img>
            </div>
          </div>
        </header>
    </div>
  );
}

export default Contact;
