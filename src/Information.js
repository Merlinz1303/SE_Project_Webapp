import './information.css';
function information(){
    return(
        <div className='information_main'>
            <p className='text1'>ข้อมูลส่วนตัว</p>
            <div className='profile'>
                <img  src= {("/images/Profile_pic.png")} width={400} height={400}></img>
            </div>
            <p className='text1'>Pattarapong Thanakiethirun</p>
            <div className='rect'>
                <img src = {("/images/Rectangle 72.png")}></img>
            </div>
            <p className='text2'>ข้อมูลส่วนตัว</p>
            <div className='rect'>
                <img src = {("images/Rectangle 73.png")}></img>
            </div>
            <div className='rect'>
                <img src = {("images/Rectangle 74.png")}></img>
            </div>
            <div className='rect'>
                <img src = {("images/Rectangle 75.png")}></img>
            </div>
        </div>
    );
}

export default information ;