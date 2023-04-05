import './Box1.css';

function Box1(props) {
    return (
        <div className="box1">
            {props.children}
        </div>
    );
}

export default Box1;