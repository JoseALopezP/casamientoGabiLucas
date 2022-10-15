import Clock from './clock';
import './index.css';

const Counter = () => {
    return (
        <div className="clockBlock">
            <Clock countdownTimestampMs={1670632200000}/>
        </div>
    );
}

export default Counter;
