/* Pattarapong Thanakiethirun 6130300654 */
import './information.css';
function information(){
    return(
        <div className='information_main'>
            <p className='information_text1'>ข้อมูลส่วนตัว</p>
            <div className='profile'>
                <img  src= {("/images/Profile_pic.png")} width={400} height={400}></img>
            </div>
            <p className='information_text1'>Pattarapong Thanakiethirun</p>
            <div className='bg_information'>
                <p className='information_text3'>ข้อมูลรูปบัตรประชาชน</p>
                <p className='information_text4'>ข้อมูลรูปถ่าย</p>
                <p className='information_text4'>ข้อมูลรูปใบขับขี่</p>
                <img className='card_img'  src={("/images/card1.png")}></img>
                <img className = 'card_img' src={("/images/card2.png")}></img>
                <img claseeName = 'card_img' src={("/images/card3.png")}></img>
            </div>
            <p className='information_text2'>ข้อมูลส่วนตัว</p>
            <div className='bg_information'>
                <p className='information_text3'>ข้อมูลรูปบัตรประชาชน</p>
                <p className='information_text4'>ข้อมูลรูปถ่าย</p>
                <p className='information_text4'>ข้อมูลรูปใบขับขี่</p>
            </div>
        </div>
    );
}

export default information ;