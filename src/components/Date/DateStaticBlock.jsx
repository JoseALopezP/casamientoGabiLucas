import React from 'react';
import Confirmation from './Confirmation';

const DateStaticBlock = (qDinner) => {
    return (
        <div className='dateStatickBlock'>
            <div className="church dateBlockItem"><a href='https://goo.gl/maps/xVUWop7uw5GkWxEA8'>
                <img src="assets/churchIcon.png" alt="Iglesia" />
                <p>Parroquia Ntra. Sra. de la Merced (21:15)</p>
            </a></div>
            <div className="date dateBlockItem">
                <img src="assets/calendarIcon.png" alt="Iglesia" />
                <p>Viernes 9 de Diciembre de 2022</p>
            </div>
            <div className="clock dateBlockItem">
                <img src="assets/clockIcon.png" alt="Iglesia" />
                {qDinner ? (<p>22:30</p>):(<p>00:30</p>)}
            </div>
            <Confirmation qDinner={qDinner}/>
        </div>
    );
}

export default DateStaticBlock;
