import React from 'react';
import Counter from '../Counter';
import Date from '../Date';

const Dinner = () => {
    return (
        <>
            <Counter time={1670635800000}/>
            <Date qDinner={true}/>
        </>
    );
}

export default Dinner;
