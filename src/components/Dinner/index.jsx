import React, {useContext} from 'react';
import Counter from '../Counter';
import Date from '../Date';
import { ListContext } from '../Context/ListContext';

const Dinner = () => {
    const {setQDinner} = useContext(ListContext);
    setQDinner(true);
    return (
        <>
            <Counter time={1670635800000}/>
            <Date/>
        </>
    );
}

export default Dinner;
