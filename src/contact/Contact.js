/* Pattarapong Thanakiethirun 6130300654 */
import './Contact.css';


function Contact() {
  return (
    <div className="MainCon">
       <img className='' src={("/images/ติดต่อ.png")} width={3250} height={300}></img>
        <br></br>
        <div>
          <img className='img1' src={("/images/gmail.png")} width={1050} height={100}></img>
        </div>
        <div>
          <img className='img2' src={("/images/facebook.png")} width={700} height={100}></img>
        </div>
        <div>
          <img className='img2' src={("/images/ig.png")} width={700} height={100}></img>
        </div>
        <div>
          <img className='img2' src={("/images/call.png")} width={700} height={100}></img>
        </div>
        <br></br>
        <br></br>
        <br></br>
    </div>
  );
}

export default Contact;
