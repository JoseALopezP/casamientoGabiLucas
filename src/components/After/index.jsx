import React, {useContext} from 'react';
import Counter from '../Counter';
import Introduction from '../Introduction';
import GiftPage from '../GiftPage';
import Date from '../Date';
import { ListContext } from '../Context/ListContext';
import Footer from '../Footer';

const After = () => {
    const {setQDinner} = useContext(ListContext);
    setQDinner(false);
    return (
        <>
            <Introduction/>
            <Counter time={1670643000000}/>
            <Date/>
            <GiftPage/>
            <Footer/>
        </>
    );
}

export default After;
