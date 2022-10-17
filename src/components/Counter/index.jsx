import Clock from './clock';
import './index.css';

const Counter = ({time}) => {
    return (
        <div className="countdownBlock">
            <h4>SOLO FALTAN</h4>
            <div className="clockBlock">
                <Clock countdownTimestampMs={time}/>
            </div>
        </div>
    );
}

export default Counter;
