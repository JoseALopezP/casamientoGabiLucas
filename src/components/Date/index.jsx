import React from 'react';
import DateStaticBlock from './DateStaticBlock';
import './index.css';

const Date = ({qDinner}) => {

    return (
        <div className='dateBlock'>
          <DateStaticBlock qDinner={qDinner}/>
          
        </div>
    );
}

export default Date;