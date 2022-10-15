import {useState, useEffect} from 'react';
import {getRemainingTimeUntilMsTimestamp} from './Utils/CountdownTimerUtils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}
const Clock = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }
    return (
        <>
            <div className="countdownDays countdownItem">
                <h5>DÍAS</h5>
                <span>{remainingTime.days}</span>
            </div>
            <div className="countdownHours countdownItem">
                <h5>HORAS</h5>
                <span>{remainingTime.hours}</span>
            </div>
            <div className="countdownMinutes countdownItem">
                <h5>MINUTOS</h5>
                <span>{remainingTime.minutes}</span>
            </div>
            <div className="countdownSeconds countdownItem">
                <h5>SEGUNDOS</h5>
                <span>{remainingTime.seconds}</span>
            </div>
        </>
    );
}

export default Clock;
