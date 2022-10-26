import React, {useContext} from 'react';
import Counter from '../Counter';
import Date from '../Date';
import { ListContext } from '../Context/ListContext';
import Introduction from '../Introduction';
import GiftPage from '../GiftPage';

const Dinner = () => {
    const {setQDinner} = useContext(ListContext);
    setQDinner(true);
    return (
        <>
            <Introduction/>
            <Counter time={1670635800000}/>
            <Date/>
            <GiftPage/>
        </>
    );
}

export default Dinner;
